import React from "react";
import "./CustomMenu.module.css";
import logo from "../../assets/image/logo.svg"

import {  Menu  } from "antd";

const { SubMenu } = Menu;

class CustomMenu extends React.Component {
    state = {
        current: 'new',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    
      render() {
        const { current } = this.state;
        return (
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item class="item" key="new" >
              New
            </Menu.Item>
            <Menu.Item key="popular">
              Popular
            </Menu.Item>

          </Menu>
        );
      }
}

export default CustomMenu;