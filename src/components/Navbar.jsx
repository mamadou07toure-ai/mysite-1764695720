import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Users, Briefcase, FileText, Mail, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navItems = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'À propos', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Portfolio', path: '/portfolio', icon: FileText },
    { name: 'Équipe', path: '/team', icon: Users },
    { name: 'Blog', path: '/blog', icon: FileText },
  ]
const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold text-gray-900"
          >
            <div className="w-8 h-8 bg-tech-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">BP</span>
        </div>
        <span>BONPLAN ARCHITECTURE</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center space-x-1 transition-all duration-300 ${
          location.pathname === item.path 
            ? 'text-tech-blue-600 font-semibold' 
            : 'text-gray-600 hover:text-tech-blue-600 font-medium'
        }`}
          >
            <item.icon size={16} />
            <span>{item.name}</span>
          </Link>
        ))}

        {/* CTA Button */}
        <Link
          to="/contact"
          className="bg-tech-blue-600 text-white px-6 py-2 rounded-lg hover:bg-tech-blue-700 transition duration-300 font-semibold">
          Nous contacter
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path 
                    ? 'bg-tech-blue-50 text-tech-blue-600 font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50 font-medium'
              }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.nav>
  )
}

export default Navbar