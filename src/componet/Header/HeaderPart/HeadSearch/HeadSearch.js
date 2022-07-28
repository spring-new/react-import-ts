import {Affix, Input, Space} from 'antd';
import './HeadSearch.css'
import React, {useState} from 'react';


const {Search} = Input;


const onSearch = (value) => console.log(value);

const HeadSearch = () => {
    const [top, setTop] = useState(10);
    return (
        <>
            <Affix offsetTop={0}>
                <div className="topSearch">
                    <Space direction="vertical" type="primary" onClick={() => setTop(top + 10)}>
                        <Search
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            style={{
                                width: '100%', textAlign: 'center', float: 'left',
                            }}

                            onSearch={onSearch}/>
                    </Space>
                </div>

            </Affix>
        </>
    );

}


export default HeadSearch;