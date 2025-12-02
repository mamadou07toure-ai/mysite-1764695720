import React from 'react'
import { motion } from 'framer-motion'

const Privacy = () => {
  return (
    <div className="pt-20">
      {/* Privacy Header */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold mb-6 text-gray-900"
      >
        POLITIQUE DE CONFIDENTIALITÉ
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Notre engagement envers la protection de vos données personnelles.'
</motion.p>
    </div>
  </section>

  {/* Privacy Content */}
  <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
        <h2>Collecte et utilisation des données</h2>
      <p>
      Nous collectons uniquement les informations nécessaires pour fournir nos services et améliorer votre expérience.',
</p>
</div>
</section>
</div>
)
}

export default Privacy