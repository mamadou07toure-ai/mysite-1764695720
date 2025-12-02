import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useRef()
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.current?.start('visible')
    }
  }, [controls, inView])

  return { ref, controls }
}

export default useScrollAnimation