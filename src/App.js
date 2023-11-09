import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Modal, Button, message } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Content } = Layout;

const App = () => {
  const page = window.location.search.includes('page=') ? window.location.search.split('page=')[1] : 'home';

  const handleButtonClick = () => {
    message.success('Button clicked');
  };

  const handleConfirm = () => {
    // Handle confirmation logic
    Modal.destroyAll();
  };

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          {/* Add more menu items as needed */}
        </Menu>
      </Header>
      <Content style={{ padding: '24px 50px' }}>
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-body text-white"></div>
        </div>
        <main id="view-panel">
          {/* Include your page components based on the 'page' variable */}
        </main>
      </Content>
      <Button
        type="primary"
        shape="circle"
        icon={<ArrowUpOutlined />}
        className="back-to-top"
        onClick={handleButtonClick}
      />
      <Modal
        title="Confirmation"
        visible={false}
        onOk={handleConfirm}
        onCancel={() => Modal.destroyAll()}
      >
        <div id="delete_content"></div>
      </Modal>
    </Layout>
  );
};

export default App;
