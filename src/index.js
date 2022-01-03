import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import createStore from './redux/store'
import 'toastr/build/toastr.css'
import 'github-markdown-css'
import { ChakraProvider } from '@chakra-ui/react'



const WithRoute = () => (
    <Provider store={createStore()}>
        <Router>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </Router>
    </Provider>
)

ReactDOM.render(<WithRoute />, document.getElementById('root'));
serviceWorker.unregister();