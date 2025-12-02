import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Layers, Box, PenTool, RefreshCw, Clipboard } from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 'architecture',
      icon: Home,
      title: 'Architecture',
      description: 'Conception architecturale innovante alliant esthétique et fonctionnalité pour créer des espaces uniques et durables.',
      features: [
        'Étude de faisabilité technique',
        'Conception de plans détaillés',
        'Optimisation spatiale',
        'Intégration paysagère',
        'Respect des normes et réglementations'
      ],
      image: 'http://static.photos/architecture/1200x630/11",
      process: [
        'Analyse des besoins et contraintes',
        'Développement conceptuel',
        'Plans techniques définitifs',
        'Assistance administrative'
      ]
    },
    {
      id: 'plans',
      icon: Layers,
      title: 'Plans 2D/3D',
      description: 'Précision technique maximale avec plans détaillés et modèles 3D pour une visualisation complète de votre projet.'
    },
    {
      id: 'modeling',
      icon: Box,
      title: 'Modélisation 3D',
      description: 'Visualisation photoréaliste de vos projets avant réalisation.',
      features: [
        'Modèles 3D haute résolution',
        'Rendus photoréalistes',
        'Visites virtuelles immersives',
        'Animation de présentation'
      ]
    },
    {
      id: 'design',
      icon: PenTool,
      title: 'Design Intérieur',
      description: 'Espaces harmonieux optimisant confort et esthétique pour créer des ambiances uniques.'
    },
    {
      id: 'renovation',
      icon: RefreshCw,
      title: 'Rénovation',
      description: 'Transformation et modernisation d'espaces existants en conservant leur âme tout en ajoutant modernité.'
    },
    {
      id: 'supervision',
      icon: Clipboard,
      title: 'Suivi de Chantier',
      description: 'Supervision rigoureuse garantissant qualité, délais et resspect du budget.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Services Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-gray-900"
        >
          NOS SERVICES
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Une gamme complète de services d'architecture pour concrétiser vos projets les plus ambitieux.'
        </motion.p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -5 }}
          className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-tech-blue-600 rounded-full flex items-center justify-center">
              <service.icon size={20} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
          
          <div className="space-y-3">
              {service.features && service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-tech-blue-600 rounded-full"></div>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Detailed Service Sections */}
{services.map((service, index) => (
  <section key={service.id} id={service.id} className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-3xl font-bold mb-6 text-gray-900">{service.title} - Processus Détaillé</h3>
      
      <div className="space-y-4">
        {service.process && service.process.map((step, stepIndex) => (
        <div key={stepIndex} className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-tech-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-bold">{stepIndex + 1}</span>
      </div>
      <p className="text-gray-600">{step}</p>
    </div>
  ))}
</div>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <motion.img
    src={service.image}
    alt={service.title}
    className="rounded-xl shadow-2xl"
  />
</motion.div>
</div>
</section>
))}

{/* Service CTA */}
<section className="py-20 bg-tech-blue-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  className="text-4xl font-bold mb-6">
  PRÊT À TRANSFORMER VOS IDÉES EN RÉALITÉ ?
</motion.h2>
<motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-xl mb-8 max-w-2xl mx-auto">
  Chaque projet débute par une consultation gratuite pour comprendre vos besoins et objectives.'
</motion.p>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link
    to="/contact"
    className="bg-white text-tech-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold text-lg">
  Démarrer mon projet
</Link>
</motion.div>
</div>
</section>
</div>
)
}

export default Services