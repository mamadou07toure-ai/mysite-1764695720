import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ChevronDown, 
  Home, 
  Layers, 
  Box, 
  PenTool, 
  RefreshCw, 
  Clipboard,
  Star,
  ArrowRight
} from 'lucide-react'

const Home = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const services = [
    {
      icon: Home,
      title: 'Architecture',
      description: 'Conception architecturale innovante alliant esthétique et fonctionnalité.',
      color: 'bg-tech-blue-600'
    },
    {
      icon: Layers,
      title: 'Plans 2D/3D',
      description: 'Précision technique maximale avec plans détaillés et modèles 3D.',
      color: 'bg-tech-blue-600'
    },
    {
      icon: Box,
      title: 'Modélisation 3D',
      description: 'Visualisation photoréaliste de vos projets avant réalisation.',
      color: 'bg-tech-blue-600'
    },
    {
      icon: PenTool,
      title: 'Design Intérieur',
      description: 'Espaces harmonieux optimisant confort et esthétique.',
      color: 'bg-tech-blue-600'
    },
    {
      icon: RefreshCw,
      title: 'Rénovation',
      description: 'Transformation et modernisation d'espaces existants.',
      color: 'bg-tech-blue-600'
    },
    {
      icon: Clipboard,
      title: 'Suivi de Chantier',
      description: 'Supervision rigoureuse garantissant qualité et délais.',
      color: 'bg-tech-blue-600'
    }
  ]

  const testimonials = [
    {
      name: 'Marie Dubois',
      project: 'Projet résidentiel',
      text: 'L\'équipe BonPlan a transformé notre vision en une maison extraordinaire. Leur précision technique est remarquable.',
      rating: 5
    },
    {
      name: 'Jean Martin',
      project: 'Rénovation commerciale',
      text: 'Un suivi de chantier impeccable et une attention aux détails qui font toute la différence.',
      rating: 5
    },
    {
      name: 'Sophie Laurent',
      project: 'Design d\'intérieur',
      text: 'Les rendus 3D étaient tellement réalistes que nous avons pris nos décisions en toute confiance.',
      rating: 5
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          >
            L'ARCHITECTURE<br />
            <span className="text-tech-blue-600">RÉINVENTÉE</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
          Précision technique, design innovant, réalisation d'exception
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-tech-blue-600 text-white px-8 py-4 rounded-lg hover:bg-tech-blue-700 transition duration-300 font-semibold text-lg"
          >
            Demander un devis
          </Link>
          <Link
            to="/portfolio"
            className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition duration-300 font-semibold text-lg">
            Voir nos projets
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ChevronDown size={32} className="text-gray-700" />
      </motion.div>
    </section>

    {/* Services Section */}
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          NOS SERVICES
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
          className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6">
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Link
                to="/contact"
                className="text-tech-blue-600 font-semibold hover:text-tech-blue-700 transition duration-300 flex items-center space-x-2">
                <span>En savoir plus</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Featured Projects */}
    <section id="featured-projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          PROJETS PHARES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-xl overflow-hidden shadow-lg">
          <motion.img
            src="http://static.photos/architecture/1200x630/1"
            alt="Projet résidentiel moderne"
            className="w-full h-96 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">Villa Contemporaine</h3>
            <p className="text-gray-200">Conception minimaliste avec vue panoramique</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-xl overflow-hidden shadow-lg">
          <motion.img
            src="http://static.photos/office/1200x630/2"
          alt="Bureau moderne"
          className="w-full h-96 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">Siège Corporate</h3>
        <p className="text-gray-200">Architecture d'entreprise innovante</p>
      </div>
    </motion.div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center">
    <Link
      to="/portfolio"
      className="bg-tech-blue-600 text-white px-8 py-4 rounded-lg hover:bg-tech-blue-700 transition duration-300 font-semibold text-lg">
    Voir tous les projets
  </Link>
</motion.div>
</div>
</section>

{/* About Section */}
<section className="py-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6">BONPLAN ARCHITECTURE</motion.h2>
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-xl mb-6 text-gray-300 leading-relaxed">
    Depuis 15 ans, nous repoussons les limites de l'architecture avec une approche technique rigoureuse et un design audacieux.
  </motion.p>
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-gray-300 mb-8 leading-relaxed">
    Notre équipe d'architectes certifiés allie expertise technique et vision créative pour transformer vos idées en réalité.
</motion.p>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  >
  <Link
    to="/about"
    className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 font-semibold">
    En savoir plus
  </Link>
</motion.div>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="relative"
>
  <motion.img
    src="http://static.photos/workspace/1200x630/3" alt="Notre équipe" className="rounded-xl shadow-2xl" />
<motion.div
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  className="absolute -bottom-6 -right-6 bg-tech-blue-600 text-white p-6 rounded-lg shadow-xl">
  <p className="text-2xl font-bold">15+</p>
  <p className="text-sm">Années d'expérience</p>
</motion.div>
</motion.div>
</div>
</section>

{/* Testimonials */}
<section id="testimonials" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-center mb-16 text-gray-900">
    TÉMOIGNAGES
  </motion.h2>

  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {testimonials.map((testimonial, index) => (
      <motion.div
        key={testimonial.name}
        variants={itemVariants}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <div className="flex text-yellow-400 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="inline" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic leading-relaxed">{testimonial.text}</p>
      <p className="font-semibold text-gray-900">{testimonial.name}</p>
      <p className="text-sm text-gray-500">{testimonial.project}</p>
    </motion.div>
  ))}
</motion.div>
</div>
</section>

{/* Contact CTA */}
<section id="contact" className="py-20 bg-tech-blue-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold mb-6">
  PRÊT À DÉMARRER VOTRE PROJET ?
</motion.h2>
<motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
  Discutons de votre vision et découvrez comment notre expertise peut la concrétiser avec précision et innovation.
</motion.p>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link
    to="/contact"
    className="bg-white text-tech-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold text-lg">
  Nous contacter
</Link>
<Link
  to="/contact#quote"
  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-tech-blue-600 transition duration-300 font-semibold text-lg">
  Demander un devis
</Link>
</motion.div>
</div>
</section>
</div>
)
}

export default Home