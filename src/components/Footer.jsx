import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
      const footerSections = [
        {
          title: 'Entreprise',
          links: [
            { name: 'À propos', path: '/about' },
            { name: 'Notre équipe', path: '/team' },
            { name: 'Processus', path: '/process' },
            { name: 'Contact', path: '/contact' },
          ]
        },
        {
          title: 'Services',
          links: [
            { name: 'Architecture', path: '/services#architecture' },
            { name: 'Plans 2D/3D', path: '/services#plans' },
            { name: 'Modélisation 3D', path: '/services#modeling' },
            { name: 'Design Intérieur', path: '/services#design' },
          ]
        },
        {
          title: 'Ressources',
          links: [
            { name: 'Blog', path: '/blog' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Témoignages', path: '/#testimonials' },
          ]
        }
      ]
const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-tech-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">BP</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">BONPLAN ARCHITECTURE</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Agence d'architecture innovante spécialisée dans la conception technique précise et le design contemporain.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-tech-blue-600 transition duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-tech-blue-400 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
              <Phone size={16} className="text-tech-blue-400" />
              <span className="text-gray-300">+224 620 67 07 58</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={16} className="text-tech-blue-400" />
            <span className="text-gray-300">contact@bonplan-architecture.com</span>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} BonPlan Architecture. Tous droits réservés.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-gray-400 hover:text-tech-blue-400 text-sm transition duration-300">
                  Politique de confidentialité
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-tech-blue-400 text-sm transition duration-300">
                  Conditions d'utilisation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer