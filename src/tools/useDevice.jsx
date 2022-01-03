import * as React from 'react'

// this may grow with more client details
const useDevice = () => {
    const [device, setDevice] = React.useState({ width: 0, height: 0, type: 'Mobile' })

    window.onload = function () {
        const isMobile = window.innerWidth < 720
        setDevice({
            isSmartPhone: navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),
            width: window.innerWidth, height: window.innerHeight, type: isMobile ? 'Mobile' : 'Desktop',
        })
    };

    window.onresize = function () {
        const isMobile = window.innerWidth < 720
        setDevice({
            isSmartPhone: navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i),
            width: window.innerWidth, height: window.innerHeight, type: isMobile ? 'Mobile' : 'Desktop'
        })
    };
    return device
}

export default useDevice