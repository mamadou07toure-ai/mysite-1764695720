```javascript
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'
const WhatsAppForm = ({ type = 'contact' }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    budget: '',
    location: '',
    message: ''
  })

  const projectTypes = [
    'Architecture résidentielle',
    'Architecture commerciale',
    'Rénovation',
    'Design intérieur',
    'Plans 2D/3D',
    'Modélisation 3D',
    'Suivi de chantier',
    'Autre'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Format message for WhatsApp
    const message = formatWhatsAppMessage(formData, type)
    
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
        project_type: '',
        budget: '',
        location: '',
        message: