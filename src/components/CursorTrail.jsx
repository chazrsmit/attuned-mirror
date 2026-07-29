// components/CursorTrail.jsx
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function CursorTrail() {
    const cursorX = useMotionValue(0)
    const cursorY = useMotionValue(0)

    // spring adds the "lag" — lower stiffness / higher damping = more trailing delay
    const trailX = useSpring(cursorX, { stiffness: 150, damping: 20, mass: 0.5 })
    const trailY = useSpring(cursorY, { stiffness: 150, damping: 20, mass: 0.5 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [cursorX, cursorY])

    return (
        <motion.img
            src={`${import.meta.env.BASE_URL}/images/homepage/logo.png`}
            style={{
                position: 'fixed',
                top: 15,
                left: 10,
                width: '32px',
                height: '32px',
                x: trailX,
                y: trailY,
                translateX: '-50%',
                translateY: '-50%',
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        />
    )
}   