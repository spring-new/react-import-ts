import React, {Component} from 'react';
import HeaderPart from "../componet/Header/HeaderPart/HeaderPart";
import HeadSearch from "../componet/Header/HeaderPart/HeadSearch/HeadSearch";
import BodyPart from "../componet/Header/BodyPart/BodyPart";


class WebRouter extends Component {
    render() {
        return (
            <div>
                {/*  <Header/>*/}
                <HeaderPart/>
                <HeadSearch/>
                <BodyPart/>
            </div>
        );
    }
}

export default WebRouter;