import React from 'react';
import './men-main-content-filter.css';
import {Select, Button} from "antd";
import {UnorderedListOutlined, GoldFilled} from "@ant-design/icons";

function MenMainContentFilter() {

    const { Option } = Select;

    return (
        <div className="men-main-content-filter">
            <div className="selects">
                <Select
                    showSearch
                    style={{marginRight: 10}}
                    placeholder="Select a product"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="men-select"
                >
                    <Option value="1">Product Name</Option>
                    <Option value="2">Product Name</Option>
                    <Option value="3">Product Name</Option>
                </Select>
                <Select
                    showSearch
                    placeholder="Select a manufacturer"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className="men-select"
                >
                    <Option value="1">Manufacturer Name</Option>
                    <Option value="2">Manufacturer Name</Option>
                    <Option value="3">Manufacturer Name</Option>
                </Select>
            </div>
            <div className="buttons">
                <Button type="primary" icon={<UnorderedListOutlined />} className="men-filter-button" />
                <Button type="primary" icon={<GoldFilled />} className="men-filter-button" />
            </div>
        </div>
    );
}

export default MenMainContentFilter;
