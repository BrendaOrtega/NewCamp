import React from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

export default function AdminMenu() {
    console.log(window.location.pathname)
    return (
        <div style={{ width: 256, position: "fixed", top: 0, righ: 0 }}>
            <Menu
                style={{ height: "100vh", paddingTop: 100 }}
                selectedKeys={window.location.pathname}
                //defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={true}
            >
                <Menu.Item key="/admin/users">
                    <Link to="/admin/users" >
                        <Icon type="pie-chart" />
                        <span>Usuarios</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/bootcamps">
                    <Link to="/admin/bootcamps" >
                        <Icon type="desktop" />
                        <span>Bootcamps</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/admin/payments">
                    <Link to="/admin/payments" >
                        <Icon type="inbox" />
                        <span>Pagos</span>
                    </Link>
                </Menu.Item>
                {/* <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>Navigation Two</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu> */}
            </Menu>
        </div >
    )
}