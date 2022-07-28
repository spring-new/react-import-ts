import React, {Component} from 'react';
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div>
                <div className="content ">
                    <nav className="">
                        nav
                        <ul className="left">
                            <li>li</li>
                            <li>li</li>
                        </ul>
                        <ul className="mid">
                            <li>li</li>
                            <li>li</li>
                        </ul>
                        <ul className="right">
                            <li>li</li>
                            <li>li</li>
                        </ul>

                    </nav>
                </div>
                <div className="header">
                    <a href="index.html" class="logo">
                        <h1>Logo</h1>
                    </a>

                    <nav class="navbar">

                        <ul>
                            <li><a href="https://gitee.com/spring-new/web">首页</a></li>

                            <li><a href="https://gitee.com/spring-new/web">专业介绍</a></li>
                            <li><a href="https://gitee.com/spring-new/web">专业介绍</a></li>


                            <li><a href="https://gitee.com/spring-new/web">实验室</a>

                                <ul class="hide">

                                    <li><a href="https://gitee.com/spring-new/web">932实验室</a></li>
                                    <li><a href="https://gitee.com/spring-new/web">925实验室</a></li>
                                    <li><a href="https://gitee.com/spring-new/web">923实验室</a></li>
                                </ul>
                            </li>

                            <li><a href="https://gitee.com/spring-new/web">教师队伍</a>
                                <ul class="hide">
                                    <li><a href="https://gitee.com/spring-new/web">博士</a></li>
                                    <li><a href="https://gitee.com/spring-new/web">教授</a></li>
                                    <li><a href="https://gitee.com/spring-new/web">讲师</a></li>
                                </ul>
                            </li>
                            <li><a href="https://gitee.com/spring-new/web">就业指南</a></li>
                            <li><a href="https://gitee.com/spring-new/web">后台管理</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="content">
                    <h1>这是网站的内容</h1>
                </div>

            </div>
        );
    }
}

export default Header;