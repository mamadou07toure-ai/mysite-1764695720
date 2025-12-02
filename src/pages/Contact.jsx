import React from 'react'
import { motion } from 'framer-motion'
import WhatsAppForm from '../components/WhatsAppForm'

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Contact Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6 text-gray-900"
          >
            CONTACTEZ-NOUS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Prêt à concrétiser votre projet ? Notre équipe d'experts est à votre écoute pour discuter de vos besoins.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                  <WhatsAppForm type="contact" />
                </div>

                {/* Contact Details */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Nos coordonnées
              </motion.h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-tech-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">BP</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  BONPLAN ARCHITECTURE
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-tech-blue-100 rounded flex items-center justify-center">
                  <span className="text-tech-blue-600 text-sm font-bold">📍</span>
                </div>
                <p className="text-gray-600">
                  Conakry, République de Guinée
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-tech-blue-100 rounded flex items-center justify-center">
                    <span className="text-tech-blue-600 text-sm font-bold">📱</span>
              </div>
              <p className="text-gray-600">+224 620 67 07 58</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-tech-blue-100 rounded flex items-center justify-center">
                  <span className="text-tech-blue-600 text-sm font-bold">📧</span>
            </div>
            <p className="text-gray-600">contact@bonplan-architecture.com</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-tech-blue-100 rounded flex items-center justify-center">
                  <span className="text-tech-blue-600 text-sm font-bold">🕒</span>
        </div>
        <p className="text-gray-600">Lun-Ven: 8h-18h</p>
      </div>
    </motion.div>
  </div>
</section>
</div>
)
}

export default Contact