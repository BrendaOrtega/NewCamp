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
import { ChakraProvider, extendTheme, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
    components: {
        Input: {
            variants: {
                filled: {
                    field: {
                        _focus: {
                            borderColor: 'brand.500',
                        }
                    }
                }
            }
        },
        Button: {
            baseStyle: {
                _focus: {
                    boxShadow: '0 0 0 3px #6B1D23',
                }
            },
            variants: {
                solid: {
                    color: 'white',
                }
            },
        },
        Heading: {
            baseStyle: props => ({
                color: props.colorMode === 'dark' ? '#fff' : '#000'
            })
        }
    },
    colors: {
        brand: {
            50: '#CA3E47',
            100: '#BB333C',
            200: '#CA3E47',
            300: '#93282F',
            400: '#7F2329',
            500: '#A72E36',
            600: '#6B1D23',
            700: '#6B1D23',
            800: '#6B1D23',
            900: '#6B1D23',
        },
    },
    // fonts: {
    //     heading: `Roboto`,
    //     body: `Roboto, Oxygen, Ubuntu`
    // },
},
    withDefaultColorScheme({
        colorScheme: 'brand',
        components: ['Button']
    }),
    withDefaultVariant({
        variant: 'filled',
        components: ['Input']
    }),
)

const WithRoute = () => (
    <Provider store={createStore()}>
        <Router>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </Router>
    </Provider>
)

ReactDOM.render(<WithRoute />, document.getElementById('root'));
serviceWorker.unregister();