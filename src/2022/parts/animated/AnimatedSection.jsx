import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useMediaQuery } from '@chakra-ui/react'

const AnimatedSection = ({ loop = true, from = 'bottom', ...props }) => {
    const [isTablet] = useMediaQuery('(min-width: 768px)')
    const animationControl = useAnimation()
    const { inView, entry, ref } = useInView();

    // if (!isTablet) { return <div {...props}></div> }

    const initial = {}
    const final = {}
    const frm = {
        top: -1,
        bottom: 1,
        left: -1,
        right: 1,
    }

    initial[from === 'top' || from === 'bottom' ? 'y' : 'x'] = 0
    final[from === 'top' || from === 'bottom' ? 'y' : 'x'] = 140 * (frm[from] != null ? frm[from] : 1)

    if (inView) {
        animationControl.start({
            opacity: 1,
            ...initial,
            transition: {
                delay: 0.2,
                type: "spring",
                bounce: 0,
                // stiffness: 260,
                // damping: 20,
            }
        })
    } else if (loop) {

        animationControl.start({
            opacity: 0,
            ...final,
            transition: {
                delay: 0.2,
                type: "spring",
                bounce: 0,
            }
        })
    }

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0, ...final
            }}
            animate={animationControl}
            {...props}
        />
    )
}

export default AnimatedSection