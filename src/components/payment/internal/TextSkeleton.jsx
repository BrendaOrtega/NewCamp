import React from 'react';
import PropTypes from 'prop-types'
import {Skeleton, Spin} from 'antd'

const TextSkeleton = ({text = null, fetching}) => (
    <>
        {(text === null || fetching === true) ? <Skeleton active /> : <span>{text}</span>}
    </>
)

TextSkeleton.propTypes = {
    text: PropTypes.string,
    fetching: PropTypes.bool
}

export default TextSkeleton;