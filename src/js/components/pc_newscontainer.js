import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_products';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
  render(){
    const settings = {
      dots: true,
      infinit: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };
    return(
      <div>
        <Row>
          <Col span={1}></Col>
          <Col span={21} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src="./src/images/carousel_1.jpg" /></div>
                  <div><img src="./src/images/carousel_2.jpg" /></div>
                  <div><img src="./src/images/carousel_3.jpg" /></div>
                  <div><img src="./src/images/carousel_4.jpg" /></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imageWidth="112px" />
            </div>
            <Tabs className="tabs_news">
              <TabPane tab="头条新闻" key="1">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="国际新闻" key="2">
                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="社会" key="3">
                <PCNewsBlock count={22} type="shehui" width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="科技" key="4">
                <PCNewsBlock count={22} type="keji" width="100%" bordered="false" />
              </TabPane>
            </Tabs>
            <Tabs class="tabs_product">
              <TabPane tab="ReactNews 产品" key="1">
                <PCProduct />
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImageBlock count={8} type="guonei" width="100%" cardTitle="国内新闻" imageWidth="132px" />
              <PCNewsImageBlock count={16} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="132px" />
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
