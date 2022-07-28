import {UserOutlined} from '@ant-design/icons';
import {Avatar, Divider, Popover} from 'antd';
import React from 'react';
import './HeadAvatar.css'
import StatisticAvatar from "./StatisticAvatar/StatisticAvater";
import AvatarNavLink from "./AvatarNavLink/AvatarNavLink";


const buttonWidth = 10;


const content = (
    <div>

        <div className="box" style={{
            marginLeft: buttonWidth,
            clear: 'both',
            whiteSpace: 'nowrap',
        }}>
            <AvatarNavLink to="/">个人中心</AvatarNavLink>
            <Divider orientation="left" style={{fontSize: 1}}>muen</Divider>

            <AvatarNavLink to="/article">文章发布"braft-editor"</AvatarNavLink>
            <AvatarNavLink to="/emp">员工表</AvatarNavLink>
            <Divider orientation="left" style={{fontSize: 1}}>muen2</Divider>

            <AvatarNavLink to="/edit">编辑博客"md"</AvatarNavLink>
            <AvatarNavLink to="/">我的订单</AvatarNavLink>
            <Divider orientation="left" style={{fontSize: 1}}></Divider>

            <AvatarNavLink to="/search_result_list">返回首页</AvatarNavLink>
            <AvatarNavLink to="/">退出</AvatarNavLink>
        </div>
        <div>


        </div>
    </div>

);


const HeadAvatar = () => {
    return <>

        <div>
            <Popover content={content} title={<StatisticAvatar/>} trigger="hover">
                <Avatar className="avatartobig" size={32} icon={<UserOutlined/>}
                        src="https://ts1.cn.mm.bing.net/th?id=OIP-C.1-wFaNNsH_OCBFvGCfloWgHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"

                />
            </Popover>


            {
                /*   注释掉不用的antd样式
                         <Avatar size="large" icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
            <Avatar size="small" icon={<UserOutlined />} />*/}
        </div>
    </>
}

export default HeadAvatar;



