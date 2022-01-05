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
import { ChakraProvider, CSSReset, extendTheme, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"


const theme = extendTheme({
    styles: {
        global: props => ({
            bg: props.colorMode === 'dark' ? 'red' : '#323232',
        })
    },
    components: {
        Link: {
            baseStyle: {
                textDecoration: 'none',
            }
        },
        Input: {
            variants: {
                filled: {
                    field: {
                        _focus: {
                            borderWidth: '3px',
                            borderColor: '#B7B7B7',
                        }
                    }
                }
            }
        },
        Button: {
            baseStyle: {
                _focus: {
                    boxShadow: '0 0 0 3px #B7B7B7',
                }
            },
            variants: {
                outline: props => ({
                    _hover: {
                        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
                    },
                    _active: {
                        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
                    }
                }),
                ghost: {
                    _hover: {
                        bg: 'transparent',
                    },
                    _active: {
                        bg: 'transparent',
                    }
                },
                solid: {
                    color: 'white',
                },
                link: props => ({
                    color: props.colorMode === 'dark' ? '#fff' : '#000',
                    _focus: {
                        boxShadow: 'none',
                    }
                }),

            },
        },
        Heading: {
            baseStyle: props => ({
                color: props.colorMode === 'dark' ? '#fff' : '#000'
            })
        }
    },
    colors: {
        local: {
            500: '#F2994A', // light
            200: '#F2994A', //dark
            300: '#F4AD6E', // hover dark (lighter)
            600: '#D98942', // hover light (darker)
        },
        google: {
            200: '#58A55C', //dark
            300: '#79B77C', // dark hover
            500: '#58A55C', //light
            600: '#4F9452' // light hover
        },
        facebook: {
            200: '#3479EA',
        },
        gray: {
            800: '#323232',
            700: '#323232',
        },
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