import React from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-16 h-16'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={`border-2 border-gray-300 border-t-tech-blue-600 rounded-full ${
    size === 'sm'
      ? 'w-4 h-4 border-2'
      : size === 'md'
        ? 'w-8 h-8 border-2'
      : 'w-16 h-16 border-3'
    } ${sizeClasses[size]}`}
    />
  </motion.div>
)
}

export default LoadingSpinner