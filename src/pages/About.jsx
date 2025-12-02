import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Building, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Building, number: '150+', label: 'Projets réalisés' },
    { icon: Users, number: '12', label: 'Experts architectes' },
    { icon: Award, number: '25+', label: 'Prix d\'excellence' },
    { icon: Target, number: '98%', label: 'Clients satisfaits' },
    { icon: Award, number: '15', label: 'Années d\'expérience' }
  ]

  const values = [
    {
      title: 'Innovation Technique',
      description: 'Nous repoussons constamment les limites de la conception architecturale avec des solutions techniques avancées.'
    },
    {
      title: 'Précision Maximal',
      description: 'Chaque détail compte dans nos plans et modèles 3D.',
    },
    {
      title: 'Design Contemporain',
      description: 'Une esthétique moderne alliant fonctionnalité et beauté.',
    },
    {
      title: 'Excellence Client',
      description: 'Votre satisfaction est notre priorité absolue.'
    }
  ]

  return (
    <div className="pt-20">
      {/* About Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-gray-900"
        >
          À PROPOS DE NOUS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Découvrez l'histoire derrière BonPlan Architecture et notre passion pour l'architecture innovante.'
        </motion.p>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
          className="text-center p-6">
            <div className="w-16 h-16 bg-tech-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon size={24} className="text-white" />
            </div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="text-3xl font-bold text-gray-900">{stat.number}</span>
          </motion.h3>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Our Story */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-900">
    NOTRE HISTOIRE
  </motion.h2>
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-lg text-gray-600 mb-4 leading-relaxed">
    Fondée en 2009, BonPlan Architecture est née d'une vision simple mais ambitieuse : réinventer l'architecture en alliant précision technique rigoureuse et design contemporain audacieux.'
  </motion.p>
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-lg text-gray-600 mb-6 leading-relaxed">
    Notre équipe d'architectes certifiés travaille avec passion pour transformer vos idées les plus audacieuses en réalité concrète.'
</motion.p>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="relative"
>
  <motion.img
    src="http://static.photos/office/1200x630/10" alt="Notre histoire" className="rounded-xl shadow-2xl" />
</motion.div>
</div>
</section>

{/* Our Values */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center mb-16 text-gray-900">
    NOS VALEURS
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {values.map((value, index) => (
      <motion.div
        key={value.title}
        initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6 hover:bg-gray-50 rounded-xl transition duration-300">
        <div className="w-16 h-16 bg-tech-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Target size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
      <p className="text-gray-600 leading-relaxed">{value.description}</p>
    </motion.div>
  ))}
</div>
</section>

{/* Team Preview */}
<section className="py-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">RENCONTREZ NOTRE ÉQUIPE</motion.h2>
<motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
      Découvrez les experts passionés qui donnent vie à vos projets.'
</motion.p>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  >
  <Link
    to="/team"
    className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 font-semibold">
    Voir l'équipe complète
  </Link>
</motion.div>
</section>
</div>
)
}

export default About