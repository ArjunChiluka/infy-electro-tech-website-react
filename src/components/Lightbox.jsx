import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function Lightbox({ src, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-ink-950/90 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 h-11 w-11 rounded-full glass flex items-center justify-center text-white"
          >
            <X size={20} />
          </button>
          <motion.img
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
            src={src}
            alt="Enlarged view"
            className="max-h-[85vh] max-w-full rounded-2xl shadow-glow object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
