// import React from 'react'
// import { Button, Menu, Typography, Avatar } from 'antd'
// import { Link } from 'react-router-dom'
// import { HomeOutlined, SlidersTwoTone , BulbTwoTone , FundTwoTone, MenuOutlined } from '@ant-design/icons'
// import icon from '../images/cryptocurrency.png' 
// import {Exchanges,Homepage,Cryptocurrencies,News,CryptoDetailes} from './index'

import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
 
    HomeOutlined,
    SlidersOutlined,
    FundOutlined,
    RocketOutlined,
    BulbOutlined

} from '@ant-design/icons';
import {Row,Col, Image,Layout, Menu, Space, theme, Typography ,Avatar} from 'antd';
import { Route, Routes } from 'react-router';
import Homepage from './Homepage';
import Exchanges from './Exchanges';
import Cryptocurrencies from './Cryptocurrencies';
import CryptoDetailes from './CryptoDetailes';
import News from './News';
import Link from 'antd/es/typography/Link';
import icon from '../images/cryptocurrency.png';
import './nav.css'


const Navbar = () => {
    const { Header, Sider, Content } = Layout;

const [collapsed, setCollapsed] = useState(false);
const {
  token: { colorBgContainer },
} = theme.useToken();
  return (
    <>
    
    

    <Layout className='main_component' >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        
       <div className="logo" > 
           <Row style={{width:"100%"}} type="flex" align="center">
  <Col> <Image src={icon} preview={false} /></Col>
           
            <Col>
            <Typography.Title level={3} >
                <Link to="/">Coinverse</Link>
            </Typography.Title></Col></Row>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'home',
              onClick: () => window.location.href='/',
            },
            {
              key: '2',
              icon: <SlidersOutlined />,
                label: 'Cryptocurrencies',
                onClick: () => window.location.href='/Cryptocurrencies',

            },
            {
              key: '3',
              icon: <BulbOutlined/>,
              label: 'Crypto News',
              onClick: () => window.location.href='/News',
            },
          ]}
          />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ paddingLeft: "1rem", background: colorBgContainer ,fontSize:"1.8rem"}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content>
     <div className="main" >
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/Exchanges' element={<Exchanges/>}/>
                        <Route path='/Cryptocurrencies' element={<Cryptocurrencies/>}/>
                        <Route path='/crypto/:coinId' element={<CryptoDetailes/>}/>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                </div>
                
            </Layout>

            
            <Layout.Footer style={{ background: '#002547', color: 'white', padding: '20px' }}>
      <Row>
       <Col xs={10} sm={8} md={8} lg={6}>
          <h3>Made with ❤️ by Arnab</h3>
          <p>Using <a href="https://rapidapi.com/Coinranking/api/coinranking1" style={{ color: 'grey' }}> Coinranking API</a>
          , <a href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/" style={{ color: 'grey' }}>Bing News API </a> 
          ,React,Ant Design,Redux and React Router.



          </p>
        </Col> 
       
        <Col>
          <h3>Links</h3>
          <a href="/" style={{ color: 'grey' }}>Home</a>
          &nbsp; &nbsp;
          <a href="/" style={{ color: 'grey' }}>Cryptocurrencies</a>
          &nbsp; &nbsp;
          <a href="/" style={{ color: 'grey' }}>Crypto News</a>
        </Col>
      </Row>
    </Layout.Footer>
        </div>
        </Content> 
      </Layout>
    </Layout>
  

  </>

    
)
}

export default Navbar