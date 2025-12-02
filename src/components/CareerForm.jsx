import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Upload } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

const CareerForm = ({ jobTitle }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: jobTitle || '',
    cover_letter: '',
    resume: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Format message for WhatsApp
    const message = `
🔷 CANDIDATURE - BONPLAN ARCHITECTURE

👤 Nom: ${formData.name || 'Non spécifié'}
📧 Email: ${formData.email || 'Non spécifié'}
📱 Téléphone: ${formData.phone || 'Non spécifié'}

📋 Poste souhaité:
${formData.position}

📝 Lettre de motivation:
${formData.cover_letter || 'Aucune lettre de motivation'}

📄 CV: ${formData.resume ? formData.resume.name : 'Non joint'
}
---
Site web: ArchiReact Pro`

    // Open WhatsApp
    const phoneNumber = '+224620670758'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}'

    // Simulate API call delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsLoading(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: jobTitle || '',
        cover_letter: '',
        resume: null
      })
    }, 1000)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
        Votre nom complet
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue-500 focus:border-transparent transition duration-300"
        placeholder="Jean Dupont"
      />
    </div>

    {/* Email Field */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Adresse email
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="email"
        name="email"
        required
        value={formData.email}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue-500 focus:border-transparent transition duration-300"
        placeholder="jean.dupont@email.com"
      />
    </div>

    {/* Phone Field */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Numéro de téléphone
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="tel"
        name="phone"
        required
        value={formData.phone}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue-500 focus:border-transparent transition duration-300"
        placeholder="+224 6 12 34 56 78"
      />
    </div>

    {/* Position Field */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Poste souhaité
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="position"
        required
        value={formData.position}
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue-500 focus:border-transparent transition duration-300"
        placeholder="ex: Architecte Senior"
      />
    </div>

    {/* Cover Letter */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Lettre de motivation
      </label>
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        name="cover_letter"
        required
        value={formData.cover_letter}
      onChange={handleChange}
        rows="4"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue-500 focus:border-transparent transition duration-300"
        placeholder="Décrivez votre motivation pour ce poste..."
      />
    </div>

    {/* Resume Upload */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        CV (PDF recommandé)
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="file"
        name="resume"
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue-500 focus:border-transparent transition duration-300"
      />
    </div>

    {/* Submit Button */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      disabled={isLoading}
      className="w-full bg-tech-blue-600 text-white py-4 rounded-lg hover:bg-tech-blue-700 transition duration-300 font-semibold text-lg flex items-center justify-center space-x-3"
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" />
          <span>Envoi en cours...</span>
        </>
      ) : (
        <>
          <Send size={20} />
          <span>Soumettre via WhatsApp</span>
      </>
    )}
    </motion.button>
</motion.form>
)
}

export default CareerForm