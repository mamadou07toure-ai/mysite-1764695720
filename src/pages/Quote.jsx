import React from 'react'
import { motion } from 'framer-motion'
import QuoteForm from '../components/QuoteForm'

const Quote = () => {
  return (
    <div className="pt-20">
      {/* Quote Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            DEMANDE DE DEVIS
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Obtenez une estimation précise pour votre projet d'architecture.'
      </motion.p>
    </div>
  </section>

  {/* Quote Form Section */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
    <div>
      <QuoteForm />
    </div>
    
    {/* Additional Information */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">
          Pourquoi choisir BonPlan Architecture ?
        </motion.h3>
      <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-tech-blue-100 rounded-full flex items-center justify-center">
          <span className="text-tech-blue-600 text-sm font-bold">✓</span>
      </div>
      <p className="text-gray-600">Précision technique garantee</p>
    </div>
    <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-tech-blue-100 rounded flex items-center justify-center">
          <span className="text-tech-blue-600 text-sm font-bold">✓</span>
      </div>
      <p className="text-gray-600">Design innovant personnalisé</p>
    </div>
    <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-tech-blue-100 rounded flex items-center justify-center">
          <span className="text-tech-blue-600 text-sm font-bold">✓</span>
      </div>
      <p className="text-gray-600">
      </div>
    </div>
  </section>
</div>
)
}

export default Quote