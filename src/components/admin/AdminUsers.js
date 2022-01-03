import React, { useEffect, useState } from 'react'
import { Table, Divider, Tag, Switch, Input, Modal, Select } from 'antd';
import { connect } from 'react-redux';
import { getUsersAction, saveUserAction } from '../../redux/adminDuck'
import toastr from 'toastr'

const { Search } = Input;
const { Option } = Select;



function AdminUsers({ saveUserAction, bootcamps, users, fetching, getUsersAction, error }) {

    let [search, setSearch] = useState('')
    let [user, setUser] = useState({})
    let [show, setShow] = useState(false)

    useEffect(() => {
        getUsersAction()
    }, [])
    useEffect(() => {
        if (error) toastr.error(error)
    }, [error])

    function editUser(record) {
        let u = { ...record }
        if (u.bootcamps) u.bootcamps = u.bootcamps.map(b => b._id)
        setShow(true)
        setUser(u)
    }

    function onChangeUser({ target: { name, value } }) {
        setUser({ ...user, [name]: value })
    }

    const columns = [
        {
            title: 'displayName',
            dataIndex: 'displayName',
            key: 'displayName',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Bootcamps',
            dataIndex: 'bootcamps',
            key: 'bootcamps',
            filters: [
                {
                    text: 'Current Bootcamp',
                    value: '5d632e4c339a1b379df68a74',
                },
                {
                    text: 'Any bootcamp',
                    value: 'null',
                }
            ],
            filterMultiple: false,
            //onFilter: (value, record) => record.bootcamps.length > 0,
            //onFilter: (value, record) => record.bootcamps.find(b => b === value),
            onFilter: (value, record) => {
                if (value === "null") return record.bootcamps.length > 0
                else return record.bootcamps.find(b => b._id === value)
            },

            render: bootcamps => {
                return (<span>
                    {bootcamps.map(bootcamp => {
                        return <Tag>
                            {bootcamp.title}
                        </Tag>
                    })}
                </span>)

            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',
            render: role => {

                let color = 'geekblue'
                if (role === 'ADMIN') {
                    color = 'volcano';
                }
                return (
                    <Tag color={color} key={role}>
                        {role.toUpperCase()}
                    </Tag>
                );

            }
        },
        {
            title: 'Active',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Switch />
                    <Divider type="vertical" />
                    <a onClick={() => editUser(record)} >Edit</a>
                </span>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            role: ['admin', 'guest'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            role: ['student'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            role: ['student', 'admin'],
        },
    ];

    function onSearch(value) {
        setSearch(value)
    }

    function saveUser() {
        setShow(false)
        saveUserAction(user)

    }

    //filters
    let regex = new RegExp(search, 'i')
    let filtered = [...users.filter(u => regex.test(u.displayName) || regex.test(u.email))]
    return (
        <div>
            <Search
                placeholder="input search text"
                onSearch={value => onSearch(value)}
                style={{ width: "100%" }}
            />
            <Table loading={fetching} columns={columns} dataSource={filtered} />

            <Modal
                visible={show}
                onCancel={() => setShow(false)}
                title={"Editar a " + user.displayName}
                onOk={saveUser}
            >
                <Input
                    name="displayName"
                    value={user.displayName}
                    onChange={onChangeUser}
                    placeholder="Escribe un nombre"
                />
                <br />

                <Select
                    onChange={value => onChangeUser({ target: { name: "role", value } })}
                    name="role"
                    value={user.role}
                >
                    <Option value="ADMIN">ADMIN</Option>
                    <Option value="GUEST">GUEST</Option>
                    <Option value="STUDENT">STUDENT</Option>
                </Select>
                <br />
                <Select
                    mode="multiple"
                    value={user.bootcamps}
                    style={{ width: 320 }}
                    onChange={value => onChangeUser({ target: { name: "bootcamps", value } })}
                    name="bootcamps"
                    placeholder="Selecciona un bootcamp"
                >
                    {bootcamps.map((b, i) => {
                        return <Option key={i} value={b._id}>{b.title}</Option>
                    })}
                </Select>

            </Modal>
        </div>
    )

}

function mapState({ admin: { users: { array }, fetching }, bootcamps: { array: boots } }) {
    return {
        fetching,
        users: array,
        bootcamps: boots
    }
}

export default connect(mapState, { saveUserAction, getUsersAction })(AdminUsers)