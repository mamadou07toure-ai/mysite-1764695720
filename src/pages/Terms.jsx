import React from 'react'
import { motion } from 'framer-motion'

const Terms = () => {
  return (
    <div className="pt-20">
      {/* Terms Header */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold mb-6 text-gray-900"
      >
        CONDITIONS D'UTILISATION
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      </motion.p>
    </div>
  </section>

  {/* Terms Content */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="prose prose-lg max-w-none">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}">
      <h2>Conditions Générales d'Utilisation</h2>
      <p>
      Bienvenue sur le site web de BonPlan Architecture. En accédant et en utilisant ce site, vous acceptez les conditions suivantes.</p>
      <h3>1. Acceptation des conditions</h3>
      <p>
      L'utilisation de notre site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-dessous.'
</p>
<h3>2. Services fournis</h3>
<p>
BonPlan Architecture fournit des services d'architecture, de design intérieur et de modélisation 3D.',
</p>
</div>
</section>
</div>
)
}

export default Terms