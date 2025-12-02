class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                }
                
                .navbar {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(229, 231, 235, 0.5);
                    transition: all 0.3s ease;
                }
                
                .navbar.scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 80px;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #111827;
                    text-decoration: none;
                }
                
                .nav-menu {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    list-style: none;
                }
                
                .nav-link {
                    color: #374151;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #2563eb;
                }
                
                .mobile-toggle {
                    display: none;
                    background: none;
                    border: none;
                    color: #374151;
                    cursor: pointer;
                }
                
                .cta-button {
                    background: #2563eb;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    text-decoration: none;
                    font-weight: 600;
                    transition: background-color 0.3s ease;
                }
                
                .cta-button:hover {
                    background: #1d4ed8;
                }
                
                @media (max-width: 768px) {
                    .mobile-toggle {
                        display: block;
                    }
                    
                    .nav-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: white;
                        flex-direction: column;
                        padding: 2rem;
                        gap: 1.5rem;
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        display: none;
                    }
                    
                    .nav-menu.active {
                        display: flex;
                    }
                }
            </style>
            <nav class="navbar">
                <div class="nav-container">
                    <a href="/" class="logo">BONPLAN ARCHITECTURE</a>
                    
                    <button class="mobile-toggle">
                        <i data-feather="menu"></i>
                    </button>
                    
                    <ul class="nav-menu">
                        <li><a href="/" class="nav-link">Accueil</a></li>
                        <li><a href="/about.html" class="nav-link">À propos</a></li>
                        <li><a href="/services.html" class="nav-link">Services</a></li>
                        <li><a href="/portfolio.html" class="nav-link">Portfolio</a></li>
                        <li><a href="/team.html" class="nav-link">Équipe</a></li>
                        <li><a href="/blog.html" class="nav-link">Blog</a></li>
                        <li><a href="/contact.html" class="cta-button">Nous contacter</a></li>
                    </ul>
                </div>
            </nav>
        `;
        
        // Add scroll effect
        window.addEventListener('scroll', () => {
            const navbar = this.shadowRoot.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const toggle = this.shadowRoot.querySelector('.mobile-toggle');
        const menu = this.shadowRoot.querySelector('.nav-menu');
        
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            feather.replace();
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);