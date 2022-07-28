import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class AvatarNavLink extends Component {
    render() {
        // console.log(this.props);
        return (
            /* webit 路径   list-group-item 样式*/
            <NavLink activeclassname="avatarNavLink" className="list-group-item" {...this.props}/>
        )
    }
}
