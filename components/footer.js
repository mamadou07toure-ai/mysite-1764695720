class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                .footer {
                    background: #111827;
                    color: white;
                    padding: 3rem 0 1rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                .footer-section h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: #f9fafb;
                }
                
                .footer-links {
                    list-style: none;
                }
                
                .footer-links li {
                    margin-bottom: 0.5rem;
                }
                
                .footer-links a {
                    color: #d1d5db;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: #2563eb;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    color: #d1d5db;
                    transition: color 0.3s ease;
                }
                
                .social-link:hover {
                    color: #2563eb;
                }
                
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 1rem;
                    text-align: center;
                    color: #9ca3af;
                    font-size: 0.875rem;
                }
                
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-grid">
                        <div class="footer-section">
                            <h3>BONPLAN ARCHITECTURE</h3>
                            <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">
                                Agence d'architecture innovante spécialisée dans la conception technique précise et le design contemporain.
                            </p>
                            <div class="social-links">
                                <a href="#" class="social-link">
                                    <i data-feather="facebook"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="linkedin"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Services</h3>
                            <ul class="footer-links">
                                <li><a href="/services.html#architecture">Architecture</a></li>
                                <li><a href="/services.html#plans">Plans 2D/3D</a></li>
                                <li><a href="/services.html#modelisation">Modélisation 3D</a></li>
                                <li><a href="/services.html#design">Design Intérieur</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Entreprise</h3>
                            <ul class="footer-links">
                                <li><a href="/about.html">À propos</a></li>
                                <li><a href="/team.html">Notre équipe</a></li>
                                <li><a href="/process.html">Processus</a></li>
                                <li><a href="/contact.html">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Contact</h3>
                            <ul class="footer-links">
                                <li style="color: #d1d5db;">+224 620 67 07 58</li>
                                <li style="color: #d1d5db;">contact@bonplan-architecture.com</li>
                                <li><a href="/contact.html">Demander un devis</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; 2024 BonPlan Architecture. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);