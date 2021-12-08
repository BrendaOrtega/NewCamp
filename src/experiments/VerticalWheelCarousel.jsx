import * as React from 'react'

import styles from './VerticalWheelCarousel.module.css'

const VerticalWheelCarousel = (props) => {
    const { sources, flex = 1 } = props
    const top = React.useRef(0)
    const ref = React.useRef()
    // const style = useSpring({
    //     from: { top: 0 },
    //     to: { top: -1895 },
    //     loop: true,
    //     config: { duration: 20000 },
    //     pause
    // })

    let myReq
    let direction = 'up'

    const animate = () => {
        // console.log("Running", top)

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
        myReq = window.requestAnimationFrame(animate)
        return () => window.cancelAnimationFrame(myReq)
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
        window.cancelAnimationFrame(myReq)
    }
    const onMouseOut = () => {
        animate()
    }

    window.addEventListener('mousemove', e => {
        followMouse(e.clientY / window.innerHeight - 0.5)
        // followMouse(-(e.clientY / (ref.current.height) - 0.5))
        // followMouse((e.clientY - ref.current.height / 2) / (ref.current.height / 2) * -30)
    })

    return (
        <div className={styles.container}
            style={{
                flex: flex === 'xl' ? 1.5 : 1
            }}
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