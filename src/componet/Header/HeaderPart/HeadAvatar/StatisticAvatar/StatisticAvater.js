import {Col, Row, Statistic} from 'antd';
import React from 'react';

/*
https://ant.design/components/statistic-cn/
*/

const StatisticAvatar = () => {
    // {fansNum:1,attention:2}
    const fansNum = 1;
    const attenton = 2
    return (
        <div>
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic
                        title="粉丝"
                        value={fansNum}
                        valueStyle={{
                            color: '#898c8e',
                            width: "5rem",
                            height: "2.5rem",
                            fontFamily: "宋体"
                        }}/>
                </Col>
                <Col span={12}>
                    <Statistic
                        title="关注"
                        className="fansAndAttention"
                        value={attenton}
                        valueStyle={{
                            color: '#898c8e',
                            width: "5rem",
                            height: "2.5rem",
                            fontFamily: "宋体"
                        }}/>
                </Col>
            </Row>
        </div>
    )

}


export default StatisticAvatar;