import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Calendar, Users, FileText, Home as House } from 'lucide-react'

const Process = () => {
  const processSteps = [
    {
      icon: Users,
      title: 'Consultation Initiale',
      description: 'Nous écoutons vos besoins, analysons vos contraintes et définissons ensemble les objectifs de votre projet.',
      details: [
        'Analyse du site et de son environnement',
        'Étude de faisabilité technique',
        'Définition du budget et des délais',
        'Validation des orientations conceptuelles'
      ]
    },
    {
      icon: FileText,
      title: 'Étude et Conception',
      description: 'Développement des concepts architecturaux et création des plans détaillés.',
      duration: '1-2 semaines'
    },
    {
      icon: Calendar,
      title: 'Validation du Projet',
      description: 'Présentation des concepts et validation finale avant le lancement des travaux.',
      details: [
        'Élaboration des plans techniques',
        'Modélisation 3D pour visualisation',
        'Estimation finale des coûts'
    },
    {
      icon: CheckCircle,
      title: 'Plans Définitifs',
      description: 'Finalisation des documents d\'exécution.',
      duration: '2-3 semaines'
    },
    {
      icon: House,
      title: 'Réalisation et Suivi',
      description: 'Coordination des travaux et supervision de la qualité.',
      details: [
        'Suivi rigoureux du chantier',
        'Contrôle qualité à chaque étape',
        'Respect strict des délais convenus',
        'Livraison clé en main'
    }
  ]

  return (
    <div className="pt-20">
      {/* Process Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-gray-900"
        >
          NOTRE PROCESSUS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Une méthodologie rigoureuse garantissant l'excellence de chaque projet, de la conception à la réalisation.'
        </motion.p>
      </div>
    </section>

    {/* Process Steps */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-tech-blue-600 rounded-full flex items-center justify-center mb-4">
                <step.icon size={24} className="text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-tech-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-tech-blue-600 text-lg font-bold">{index + 1}</div>
                  
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                {step.duration && (
                  <p className="text-tech-blue-600 font-semibold">{step.duration}</p>
              </div>
              
              <div className="space-y-2">
                      {step.details && step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle size={16} className="text-tech-blue-600" />
                        <span className="text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Quality Assurance */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">GARANTIE DE QUALITÉ</motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-600 mb-6">
            Chaque étape de notre processus est conçue pour assurer l'excellence et la satisfaction totale.',
          className="text-xl text-gray-600 mb-8">
          Nous nous engageons à délivrer des résultats qui dépassent vos attentes.'
        </motion.p>
      </div>
    </section>
  </div>
)
}

export default Process