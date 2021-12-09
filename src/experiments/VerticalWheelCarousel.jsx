import * as React from 'react'
import useDevice from '../tools/useDevice'
import { useSpring, animated } from 'react-spring'

import styles from './VerticalWheelCarousel.module.css'

const VerticalWheelCarousel = (props) => {
    const { sources, flex = 1 } = props
    const device = useDevice()
    const factors = React.useRef([0, 0])
    const [isOver, setIsOver] = React.useState(false)

    // iteration 2
    const initialSpringValues = ({
        to: async next => {
            while (1) {
                await next({ number: -0 })
                await next({ number: -2000 })
            }
        },
        config: {
            duration: 12000,
            // tension: 250,
            // friction: 10,
        },
        loop: { reverse: true },
        from: { number: 0 },
    })
    const [spring, api] = useSpring(() => initialSpringValues)
    const [{ offset }, api2] = useSpring(() => ({ offset: 0, }));

    const renderSources = (arr) => {
        if (typeof arr[0] === 'string') {
            return arr.map((el, i) => <picture className={styles.picture}> <img src={el} key={i} alt={`image-${i}`} /></picture>)
        }
    }

    const translate = (o) => `translateY(${o}px)`;

    const style = ({ transform: isOver ? offset.to(translate) : spring.number.to(translate) })

    const followMouse = (e) => {
        const posY = e?.clientY
        const offset = window.pageYOffset - posY;
        if (isNaN(offset)) { return }
        api2.start({
            offset, config: {
                tension: 170,
                mass: 5,
                friction: 26,
                velocity: 0,
                precision: 0.01
            }
        });
    }

    const onMouseOver = (event) => {
        // api.pause()
        setIsOver(true)
    }
    const onMouseOut = () => {
        // api.resume()
        setIsOver(false)
    }

    React.useEffect(() => {
        window.addEventListener("mousemove", followMouse)
        return () => window.removeEventListener('mousemove', followMouse)
    }, [])

    return (
        <div className={`${styles.container} `}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            <div className={styles.overlay}></div>
            <animated.div

                style={style}
                id="first-column"
                className={`${styles.group} ${styles.one}`}
            >
                {renderSources(sources.slice(0, 3).concat(sources.slice(0, 3)))}
            </animated.div>
            <animated.div
                style={style}
                id="second-column"
                className={`${styles.group} ${styles.two}`}
            >
                {renderSources(sources.slice(3).concat(sources.slice(3)))}
            </animated.div>
        </div>
    )
}

export default VerticalWheelCarousel