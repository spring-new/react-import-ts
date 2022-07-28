import React, {Component} from 'react';
import './BodyPart.css'
import {Col, Row} from "antd";
import EmpFrom from "./EmpFrom/EmpFrom";
import PageDemo from "./PageDemo/PageDemo";
import {Route, Routes} from "react-router-dom";
import SearchResultList from "./SearchResultList/SearchResultList";

class BodyPart extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <span className="displays"> 5 14 5 </span>
                    <Row>
                        <Col align="middle" span={5}></Col>
                        <Col align="middle" span={14} className="bodyPart">

                            {/*<PageDemo/>*/}
                            {/*<EmpFrom/>*/}
                            {/* 需要路由*/}
                            {/*<BlogView/>*/}
                            {/* <EditorDemo/>*/}
                            <Routes>
                                <Route path="/" element={<SearchResultList/>}/>
                                <Route path="/search_result_list" element={<SearchResultList/>}/>
                                <Route path="/article" element={<PageDemo/>}/>
                                <Route path="/emp" element={<EmpFrom/>}/>
                                <Route path="/edit" element={<EmpFrom/>}/>

                            </Routes>
                        </Col>
                        <Col align="middle" span={5}></Col>
                    </Row>

                </div>
            </div>
        );
    }
}

export default BodyPart;