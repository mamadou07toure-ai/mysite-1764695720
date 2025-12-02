import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'L\'Architecture Durable : Défis et Solutions',
      excerpt: 'Exploration des dernières innovations en matière de construction écologique et leur intégration dans les projets contemporains.',
      author: 'Pierre Martin',
      date: '15 Mars 2024',
      readTime: '5 min',
      category: 'Innovation',
      image: 'http://static.photos/green/1200x630/12",
      tags: ['Écologie', 'Technologie', 'Design']
    },
    {
      id: 2,
      title: 'La Transformation des Espaces Urbains',
      excerpt: 'Comment réinventer nos villes pour créer des environnements plus humains et durables.',
      image: 'http://static.photos/cityscape/1200x630/13",
      readTime: '7 min']
    },
    {
      id: 3,
      title: 'L\'Importance de la Modélisation 3D',
      excerpt: 'Les avantages de la visualisation 3D dans la conception architecturale.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Blog Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-gray-900"
        >
          NOTRE BLOG
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Découvrez nos réflexions sur les tendances, innovations et défis de l'architecture moderne.'
        </motion.p>
      </div>
    </section>

    {/* Blog Posts */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            whileHover={{ y: -5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="relative">
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-tech-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User size={14} />
                    <span>{post.author}</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{post.date}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                    <Clock size={14} />
                    <span>{post.readTime} de lecture</span>
                </div>
              </div>
              
              <Link
                to={`/blog/${post.id}"}
                className="text-tech-blue-600 font-semibold hover:text-tech-blue-700 transition duration-300 flex items-center space-x-2">
                  <span>Lire l'article</span>
                  <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
)
}

export default Blog