import {Carousel} from 'antd';
import React from 'react';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const BlogCarousel = () => (
    <Carousel autoplay>
        <div>
            <h3 style={contentStyle} src="https://joeschmoe.io/api/v1/random">1</h3>
        </div>
        <div>
            <h3 style={contentStyle} src="https://joeschmoe.io/api/v1/random">2</h3>
        </div>
        <div>
            <h3 style={contentStyle} src="https://joeschmoe.io/api/v1/random">3</h3>
        </div>
        <div>
            <h3 style={contentStyle} src="https://joeschmoe.io/api/v1/random">4</h3>
        </div>
    </Carousel>
);

export default BlogCarousel;