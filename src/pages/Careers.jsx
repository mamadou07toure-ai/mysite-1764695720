import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Careers = () => {
  const jobOpenings = [
    {
      title: 'Architecte Senior',
      department: 'Architecture',
      location: 'Conakry, Guinée',
      type: 'Temps plein',
      description: 'Nous recherchons un architecte expérimenté pour diriger des projets complexes et innovants.',
      requirements: [
        'Diplôme d\'architecte certifié',
        'Minimum 8 ans d\'expérience',
        'Maîtrise des logiciels de conception 3D',
        'Esprit d'équipe et leadership'
      ],
      benefits: [
        'Salaire compétitif',
        'Formation continue',
        'Environnement de travail dynamique',
        'Projets variés et stimulants'
      ]
    },
    {
      title: 'Designer Intérieur',
      department: 'Design',
      location: 'Conakry, Guinée',
      type: 'Temps plein',
      description: 'Rejoignez notre équipe pour créer des espaces uniques et mémorables.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Careers Header */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-6 text-gray-900"
      >
        CARRIÈRES
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Rejoignez notre équipe d'experts passionés et participez à des projets architecturaux innovants en Guinée.'
      </motion.p>
    </div>
  </section>

  {/* Job Openings */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8">
        {jobOpenings.map((job, index) => (
        <motion.div
          key={job.title}
          initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{job.title}</h3>
          <div className="flex flex-wrap gap-4 mb-4">
          <span className="bg-tech-blue-50 text-tech-blue-600 px-3 py-1 rounded-full text-sm">{job.department}</span>
          <p className="text-gray-600 mb-4">{job.description}</p>
          
          <div className="space-y-3">
          <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-tech-blue-100 rounded-full flex items-center justify-center">
          <span className="text-tech-blue-600 text-sm font-bold">📍</span>
          <span className="text-gray-600">{job.location}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-tech-blue-600 text-sm font-bold">🕒</span>
        <span className="text-gray-600">{job.type}</span>
      </div>
    </motion.div>
  ))}
</div>
</section>

{/* Why Join Us */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        POURQUOI NOUS REJOINDRE ?
      </motion.h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
  <h4 className="text-2xl font-bold mb-6">Notre culture d'entreprise</motion.h4>
<p className="text-gray-600 leading-relaxed">
        Chez BonPlan Architecture, nous cultivons un environnement où l'innovation, la collabaration et l'excellence sont au cœur de notre mission.',
</p>
</div>
<div>
  <h4 className="text-2xl font-bold mb-6">Les avantages</motion.h4>
<div className="space-y-4">
<div className="flex items-center space-x-3">
  <div className="w-8 h-8 bg-tech-blue-100 rounded-full flex items-center justify-center">
          <span className="text-tech-blue-600 text-sm font-bold">🏆</span>
      </div>
      <p className="text-gray-600">Reconnaissance et développement professionnel</p>
    </div>
    <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-tech-blue-100 rounded-full flex items-center justify-center">
          <span className="text-tech-blue-600 text-sm font-bold">🌱</span>
      </div>
      <p className="text-gray-600">Croissance et opportunités</p>
  </div>
</section>

{/* Application Process */}
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
    <h2 className="text-4xl font-bold">PROCESSUS DE RECRUTEMENT</motion.h2>
<div className="space-y-6">
<div className="flex items-center space-x-4">
<div className="w-8 h-8 bg-tech-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">1</span>
      </div>
      <p className="text-gray-600">
        Soumission de candidature en ligne
      </p>
    </div>
    <div className="flex items-center space-x-4">
<div className="w-8 h-8 bg-tech-blue-100 rounded-full flex items-center justify-center">
          <span className="text-tech-blue-600 text-sm font-bold">2</span>
      </div>
      <p className="text-gray-600">Entretien technique et culturel</p>
  </div>
  <div className="flex items-center space-x-4">
    <div className="w-8 h-8 bg-tech-blue-100 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">3</span>
    </div>
    <p className="text-gray-600">Intégration et formation</p>
</div>
</section>

{/* Contact for Careers */}
<section className="py-20 bg-tech-blue-600 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <h3 className="text-3xl font-bold mb-6">
        INTÉRESSÉ PAR UNE OPPORTUNITÉ CHEZ BONPLAN ?
      </motion.h3>
<p className="text-xl mb-8">
        Découvrez comment votre talent peut contribuer à notre succès collectif.'
</p>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}">
      <Link
        to="/contact"
        className="bg-white text-tech-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold text-lg">
        NOUS CONTACTER
      </Link>
    </motion.div>
</section>
</div>
)
}

export default Careers