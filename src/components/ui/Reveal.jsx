import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  once = true,
  as = 'div',
}) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.15 })
  const Comp = motion[as] || motion.div

  return (
    <Comp
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  )
}
