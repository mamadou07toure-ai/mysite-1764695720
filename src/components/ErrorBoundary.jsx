import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Erreur interceptée:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Quelque chose s'est mal passé
    </h2>
    <p className="text-gray-600 mb-4">
      Une erreur s'est produite. Veuillez recharger la page.
  </p>
  <button
    onClick={() => window.location.reload()"}
    className="bg-tech-blue-600 text-white px-6 py-3 rounded-lg hover:bg-tech-blue-700 transition duration-300 font-semibold">
      Recharger la page
    </button>
  </div>
)
}

return this.props.children
}
}

export default ErrorBoundary