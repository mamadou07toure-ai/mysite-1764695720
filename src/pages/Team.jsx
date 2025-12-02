import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Pierre Martin',
      role: 'Architecte Principal',
      expertise: ['Architecture Moderne', 'Design Durable', 'Gestion de Projet' }
  ],
    {
      name: 'Sophie Dubois',
      role: 'Designer Intérieur Senior',
      expertise: ['Ambiance Spatiale', 'Matériaux Innovants', 'Couleurs et Textures'],
      image: 'http://static.photos/people/400x400/1",
      email: 'pierre@bonplan-architecture.com',
      phone: '+224 620 67 07 58',
      linkedin: '#'
    },
    {
      name: 'Jean Lefèvre',
      role: 'Expert Modélisation 3D',
      expertise: ['Rendus Photoréalistes', 'Animation 3D', 'Réalité Virtuelle' }
    ],
    {
      name: 'Marie Laurent',
      role: 'Architecte Technique',
      expertise: ['Plans 2D/3D', 'Calculs Structurels', 'Normes Bâtimentaires'
    ],
    {
      name: 'Thomas Moreau',
      role: 'Spécialiste Rénovation',
      expertise: ['Patrimoine Architectural', 'Techniques de Rénovation', 'Modernisation'
    ],
    {
      name: 'Camille Petit',
      role: 'Consultante en Architecture Durable',
      expertise: ['HQE', 'Bâtiment Basse Consommation', 'Matériaux Écologiques'
    ],
    {
      name: 'Antoine Blanc',
      role: 'Directeur Projets Commerciaux',
      expertise: ['Architecture Commerciale', 'Centres d'Affaires', 'Bureaux Corporate'
    ]
  ]

  const departments = [
    {
      name: 'Architecture',
      members: [0, 1, 2]
    },
    {
      name: 'Design Intérieur',
      members: [3, 4]
    },
    {
      name: 'Rénovation & Patrimoine',
      members: [5, 6]
    }
  ]

  return (
    <div className="pt-20">
      {/* Team Header */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-gray-900"
        >
          NOTRE ÉQUIPE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Rencontrez les experts passionés qui donnent vie à vos projets les plus ambitieux.'
        </motion.p>
      </div>
    </section>

    {/* Team Members */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16">
        {departments.map((department, depIndex) => (
        <motion.div
          key={department.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          >
          <h2 className="text-4xl font-bold mb-12 text-center">{department.name}</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {department.members.map((memberIndex) => {
            const member = teamMembers[memberIndex]
            return (
              <motion.div
                key={member.name}
                whileHover={{ y: -5 }}
            className="text-center">
                <div className="relative">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-tech-blue-600 font-semibold mb-4">{member.role}</p>
                
                <div className="space-y-2">
                  {member.expertise.map((skill, skillIndex) => (
                  <p key={skillIndex} className="text-gray-600">{skill}</p>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4">
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      className="text-tech-blue-600 hover:text-tech-blue-700 transition duration-300">
                      <Mail size={16} />
                    </motion.a>
                    <motion.a
                      href={`tel:${member.phone}`}
                      whileHover={{ scale: 1.1 }}
                      className="text-tech-blue-600 hover:text-tech-blue-700 transition duration-300">
                      <Phone size={16} />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
</div>
)
}

export default Team