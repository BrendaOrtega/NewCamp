import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Button.css';



const Button = ({
    style = {},
    variant = 'default', // default | circular
    type = 'button',
    children, 
    ico,
    text,
     onClick = () => false
    }) => {
        return (
            <button 
                style={style}
                type={type}
                onClick={onClick}
                className={variant === 'circular' ? 'btn-explore btn-explore-circular' :"btn-explore"}
             >
                 {ico && <span>{ico}</span>}
                  {text || children}</button>
        );
    }


Button.propTypes = {
    style: PropTypes.object,
    variant: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.any,
    ico: PropTypes.node,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;