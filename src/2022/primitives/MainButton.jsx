import * as React from 'react'
import { Button } from 'antd'

const MainButton = ({ children }) => (
    <Button
        type="primary"
    >
        {children}
    </Button>
)

export default MainButton