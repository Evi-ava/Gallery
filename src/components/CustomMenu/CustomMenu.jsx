import React from "react";
import "./CustomMenu.module.css";

import {  Menu  } from "antd";

const { SubMenu } = Menu;

class CustomMenu extends React.Component {

      handleClick = (e) => {
        console.log('click ', e);
        debugger
        this.props.setOrder(e.key);
      };
    
    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.props.currentItemMenu]} mode="horizontal">
              <Menu.Item key="new" >
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