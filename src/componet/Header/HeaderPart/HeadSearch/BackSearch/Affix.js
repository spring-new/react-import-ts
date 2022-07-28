import {Affix, Button} from 'antd';
import React, {useState} from 'react';

const Affix = () => {
    const [top, setTop] = useState(10);
    const [bottom, setBottom] = useState(10);
    return (
        <>
            <Affix offsetTop={top}>
                <Button type="primary" onClick={() => setTop(top + 10)}>
                    <div className="">
                        <Search
                            placeholder="input search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}/>
                    </div>
                </Button>
            </Affix>

            <br/>
            <Affix offsetBottom={bottom}>
                <Button type="primary" onClick={() => setBottom(bottom + 10)}>
                    Affix bottom
                </Button>
            </Affix>
        </>
    );
};

export default Affix;