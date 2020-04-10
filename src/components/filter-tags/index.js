import React from 'react';
import './filter-tags.css';
import {Button, Input} from "antd";
import Tags from "../tags";

function FilterTags() {

    return (
        <div className="filter-tags">
            <div className="filter-tags-header">
                <h4>tags</h4>
                <Button type="default" className="card-button" size={"large"}>
                    see all
                </Button>
            </div>
            <Tags />
        </div>
    );
}

export default FilterTags;
