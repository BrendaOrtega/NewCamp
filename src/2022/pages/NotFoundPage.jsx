import * as React from 'react'

import image404 from 'assets/404.svg'
import { Nav } from '2022/parts/nav'
import { Heading } from '@chakra-ui/react'

const NotFoundPage = () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80vh',
}}>
    <Nav />
    <Heading >404 Página no encontrada.</Heading>
    <img width={320} src={image404} alt="404 robot" />
</div>

export default NotFoundPage