import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ZoomIn } from 'lucide-react'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'residential', name: 'Résidentiel' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'interior', name: 'Design Intérieur' },
    { id: 'renovation', name: 'Rénovation' },
    { id: 'public', name: 'Public' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Résidence Le Corbusier',
      category: 'residential',
      description: 'Conception contemporaine avec intégration paysagère innovante.',
      image: 'http://static.photos/architecture/1200x630/1",
      features: ['Surface: 350m²', 'Durée: 18 mois', 'Budget: 650K€'],
      tags: ['Moderne', 'Durable', 'Panoramique']
    },
    {
      id: 2,
      title: 'Siège Social TechnoCorp',
      category: 'commercial',
      description: 'Architecture d'entreprise durable avec certification HQE.'
    },
    {
      id: 3,
      title: 'Loft Industriel Urbain',
      category: 'residential',
      description: 'Rénovation d'espace industriel en habitat moderne et fonctionnel.'
    },
    {
      id: 4,
      title: 'SpaceLab Coworking',
      category: 'commercial',
      description: 'Espace de travail collaboratif innovant optimisé pour la productivité.'
    },
    {
      id: 5,
      title: 'Hôtel Signature',
      category: 'interior',
      description: 'Design intérieur premium alliant luxe et confort moderne.'
    },
    {
      id: 6,
      title: 'Bistro Moderne',
      category: 'commercial',
      description: 'Restaurant aux lignes épurées avec ambiance chaleureuse.'
    },
    {
      id: 7,
      title: 'Centre Culturel Municipal',
      category: 'public',
      description: 'Espace public moderne favorisant les échanges culturels et artistiques.'
    },
    {
      id: 8,
      title: 'Appartement Haussmannien Rénové',
      category: 'renovation',
      description: 'Rénovation d'appartement haussmannien alliant charme d'antan et modernité.'
    },
    {
      id: 9,
      title: 'Clinique Spécialisée',
      category: 'public',
      description: 'Architecture médicale optimisée pour le confort des patients et l'efficacité médicale.'
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Portfolio Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-gray-900"
        >
          NOTRE PORTFOLIO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Découvrez nos réalisations les plus marquantes, alliant innovation technique et design exceptionnel.'
        </motion.p>
      </div>
    </section>

    {/* Portfolio Filter */}
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
              activeCategory === category.id
                ? 'bg-tech-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>
    </div>
  </section>

  {/* Portfolio Grid */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition duration-300"
                >
                  <h3 className="text-white text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                  {project.description}
                </p>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold mb-4 text-gray-900">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags && project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-tech-blue-50 text-tech-blue-600 rounded-full text-sm">
                  {tag}
                </span>
              ))}
              
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-tech-blue-600 hover:text-tech-blue-700 transition duration-300"
                >
                  <ZoomIn size={16} />
                  <span>Détails</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition duration-300">
                  <ExternalLink size={16} />
                  <span>Projet complet</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </div>
</section>

{/* Stats Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { number: '150+', label: 'Projets réalisés' },
      { number: '12', label: 'Experts' },
      { number: '25+', label: 'Prix' },
      { number: '98%', label: 'Satisfaction' }
    ].map((stat, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    className="text-center p-6">
      <p className="text-4xl font-bold text-tech-blue-600 mb-2">{stat.number}</p>
      <p className="text-gray-600">{stat.label}</p>
    </motion.div>
  ))}
</div>
</section>

{/* CTA Section */}
<section className="py-20 bg-tech-blue-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold mb-6">
  INSPIRÉ PAR NOS RÉALISATIONS ?
</motion.h2>
<motion.p
  initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-xl mb-8">
  Démarrons la conception de votre projet dès aujourd'hui'
</motion.p>
<motion.div
  initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    >
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

export default Portfolio