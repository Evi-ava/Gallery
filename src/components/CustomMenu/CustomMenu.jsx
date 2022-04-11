import React from "react";
import "./CustomMenu.module.css";
import logo from "../../assets/image/logo.svg"

import {  Menu  } from "antd";

const { SubMenu } = Menu;

class CustomMenu extends React.Component {
    // state = {
    //     current: 'new',
    //   };
    
      handleClick = e => {
          debugger
        console.log('click ', e);
        // this.setState({ current: e.key });
        this.props.setOrder(e.key);
      };
    
      render() {
        // const { current } = this.state;setOrder
        return (
          <Menu onClick={this.handleClick} selectedKeys={[this.props.currentItemMenu]} mode="horizontal">
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