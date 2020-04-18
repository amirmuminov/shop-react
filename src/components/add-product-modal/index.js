import React, {useEffect, useState} from 'react';
import './add-product-modal.css';
import {Button, Modal, Select, Form, Input, Upload, message} from 'antd';
import {connect} from "react-redux";
import {getCategories, saveProduct} from "../../store/actions/productActions";
import {InboxOutlined} from "@ant-design/icons";

const onMount = props => () => {
    props.getCategories();
};

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

function AddProductModal(props) {

    const { Option } = Select;

    useEffect(onMount(props), []);

    const [modalVisibility, setModalVisibility] = useState(false);

    const setModalVisibilityState = state =>{
        setModalVisibility(state);
    };

    const categories = props.productReducer.categories;

    const categoriesList = categories.map(category => (
        <Select.Option value={category.id}>{category.name}</Select.Option>
    ));

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const normFile = e => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    const fileChange = info => {
        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setImageUrl(imageUrl)
            });

            setFormData({...formData, image: info.file.originFileObj})
        }
    };


    const [imageUrl, setImageUrl] = useState(``)
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        discount: '',
        image: null,
        category: null
    });

    const inputOnChange = e =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const categoryOnChange = value => {
        setFormData({...formData, category: value})
    };

    const saveProduct = () => {
        props.saveProduct(formData);
        setModalVisibilityState(false);
    };

    useEffect(() => {
        setModalVisibility(false)
    }, []);

    return (
        <div className="add-product-modal">
            <Modal
                title="Add Product"
                centered
                visible={modalVisibility}
                onOk={saveProduct}
                onCancel={() => setModalVisibilityState(false)}
            >
                <Form
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="title"
                    >
                        <Input placeholder="Please input product title" name="title" value={formData.title} onChange={inputOnChange}/>
                    </Form.Item>

                    <Form.Item
                        name="price"
                    >
                        <Input placeholder="Please input product price" name="price" value={formData.price} onChange={inputOnChange}/>
                    </Form.Item>

                    <Form.Item
                        name="discount"
                    >
                        <Input placeholder="Please input product discount" name="discount" value={formData.discount} onChange={inputOnChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="Category" onChange={categoryOnChange}>
                            {categoriesList}
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                            <Upload.Dragger
                                name="image"
                                beforeUpload={beforeUpload}
                                onChange={fileChange}
                                listType="picture-card"
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                </Form>
            </Modal>
            <Button type="primary" size={"large"} className="modal-button" onClick={() => setModalVisibilityState(true)}>
                Add Product
            </Button>
        </div>
    );
}

const mapStateToProps = state => ({
   productReducer: state.productReducer
});

const mapDispatchToProps = {
    getCategories,
    saveProduct
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductModal);
