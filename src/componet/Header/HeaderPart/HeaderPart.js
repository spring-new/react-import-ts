import {Col, Row,} from 'antd';
import React, {Component} from 'react'; //@ant-design/icons
// import {DingdingOutlined} from '@ant-design/icons'
import './HeaderPart.css'

import HeadAvatar from "./HeadAvatar/HeadAvatar";


class HeaderPart extends Component {

    render() {
        return (
            <div className="header">
                <span className="displays"> 24 格样式 </span>
                <Row className="rowcss">
                    <Col span={3}>首页 </Col>
                    <Col span={3}>
                        {/*                        <div > <a href="#"
                                style={{fontSize: '300%', color: "coral", float: "left"}}><DingdingOutlined
                            style={{fontSize: '150%', color: "coral", float: "left"}}/>ST<DingdingOutlined
                            className="mirrorRotateLevel"
                            style={{fontSize: '150%', color: "coral", float: "right"}}/></a>
                        </div>*/}
                    </Col>
                    {/*    HeadSearch     */}
                    <Col span={6}>{/* <HeadSearch/>*/}</Col>


                    <Col span={8}> 产品 | 下载 <div className="headavatar"><HeadAvatar/></div></Col>

                    <Col span={4}> </Col>
                </Row>


            </div>
        );
    }
}

export default HeaderPart;


