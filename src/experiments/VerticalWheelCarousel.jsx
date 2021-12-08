import * as React from 'react'
import useDevice from '../tools/useDevice'

import styles from './VerticalWheelCarousel.module.css'

const VerticalWheelCarousel = (props) => {
    const { sources, flex = 1 } = props
    const top = React.useRef(0)
    const ref = React.useRef()

    const animationFrameId = React.useRef()

    const device = useDevice()
    // const device = useDevice()
    // const style = useSpring({
    //     from: { top: 0 },
    //     to: { top: -1895 },
    //     loop: true,
    //     config: { duration: 20000 },
    //     pause
    // })

    let direction = 'up'

    const animate = () => {
        if (direction === 'up') {
            top.current--
            if (top.current < -(sources.length * 100)) {
                direction = 'down'
            }
        } else {
            top.current++
            if (top.current > (sources.length * 10)) {
                direction = 'up'
            }
        }

        const group = document.querySelector('#first-column')
        const group2 = document.querySelector('#second-column')
        group.style.top = `${top.current}px`
        group2.style.top = `${top.current}px`
        // animationFrameId.current = window.requestAnimationFrame(animate)
        animationFrameId.current = setTimeout(animate, 1000 / 60)
        // return () => window.cancelAnimationFrame(animationFrameId.current)
        return () => clearTimeout(animationFrameId.current)
    }

    React.useLayoutEffect(() => {
        return animate()
    }, [])

    const height = (sources.length - 1) * 300

    const renderSources = (arr) => {
        if (typeof arr[0] === 'string') {
            return arr.map((el, i) => <picture className={styles.picture}> <img src={el} key={i} alt={`image-${i}`} /></picture>)
        }
    }

    const followMouse = (y) => {
        const group = document.querySelector('#first-column')
        const group2 = document.querySelector('#second-column')
        const val = -y * 7
        const currentTop = Number(group.style.top.split('px')[0])
        // const val = y * 5
        // const val = y
        group.style.top = `${currentTop + val}px`
        group2.style.top = `${currentTop + val}px`

    }

    const onMouseOver = (event) => {
        if (device.type === 'Mobile') { return }
        // window.cancelAnimationFrame(animationFrameId.current)
        clearTimeout(animationFrameId.current)

    }
    const onMouseOut = () => {
        if (device.type === 'Mobile') { return }
        animate()
    }

    window.addEventListener('mousemove', e => {
        if (device.type === 'Mobile') { return }
        followMouse(e.clientY / window.innerHeight - 0.5)
    })

    // console.log(window.WURFL) <= device detection
    return (
        <div className={`${styles.container} `}
            // style={{
            //     flex: flex === 'xl' ? 1.5 : 1
            // }}
            ref={ref}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            <div className={styles.overlay}></div>
            <div
                id="first-column"
                className={`${styles.group} ${styles.one}`}
            >
                {renderSources(sources.slice(0, 3).concat(sources.slice(0, 3)))}
            </div>
            <div

                id="second-column"
                className={`${styles.group} ${styles.two}`}
            >
                {renderSources(sources.slice(3).concat(sources.slice(3)))}
            </div>
        </div>
    )
}

export default VerticalWheelCarousel