import React from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

const QuoteForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        DEMANDE DE DEVIS
      </motion.h2>
      <WhatsAppForm type="quote" />
    </motion.div>
  )
}

export default QuoteForm