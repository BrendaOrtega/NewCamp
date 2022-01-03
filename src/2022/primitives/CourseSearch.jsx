import * as React from 'react'
import { Input } from 'antd'

const { Search } = Input

const CourseSearch = ({ size = 'small' }) => <Search
    placeholder="¡Qué quieres aprender hoy?"
    // size="large"
    onSearch={() => false}
    allowClear
/>

export default CourseSearch