import React from 'react';
import { Menu, X, ArrowRight, Mail, Phone, MapPin, MessageCircle, Lock } from 'lucide-react';
import { useState, useRef, useEffect, FormEvent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

function PasswordProtection({ onAuthenticated }: { onAuthenticated: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate a brief loading state for better UX
    setTimeout(() => {
      if (password === 'portinotanerman29') {
        localStorage.setItem('portino_authenticated', 'true');
        onAuthenticated();
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center">
      <div className="w-full max-w-md mx-4">
        <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-cyan-400" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Portino – Restricted Access
            </h1>
            <p className="text-gray-400">
              Please enter the password to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Enter password"
                required
                disabled={isSubmitting}
              />
            </div>

            {error && (
              <div className="p-3 bg-red-900/30 border border-red-600/50 rounded-lg">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !password.trim()}
              className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-950 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              {isSubmitting ? 'Verifying...' : 'Enter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasPlayedOnce = false;

    const handleTimeUpdate = () => {
      if (!hasPlayedOnce) {
        // First playback - let it play completely
        if (video.currentTime >= video.duration - 0.1) {
          hasPlayedOnce = true;
          video.currentTime = 1; // Jump to second 1 for the loop
        }
      } else {
        // Subsequent loops - loop from second 1 to 16
        if (video.currentTime >= 16) {
          video.currentTime = 1;
        }
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xnnvkqzw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        // Reset status after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        // Reset status after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/Logo2 trans.svg" 
                alt="Portino Logo" 
                className="h-8 w-8 transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" 
              />
              <span className="text-xl font-semibold">Portino – Digital Solutions GbR</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">Über uns</a>
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Leistungen</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Kontakt</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#about" className="block text-gray-300 hover:text-cyan-400 transition-colors">Über uns</a>
              <a href="#services" className="block text-gray-300 hover:text-cyan-400 transition-colors">Leistungen</a>
              <a href="#contact" className="block text-gray-300 hover:text-cyan-400 transition-colors">Kontakt</a>
            </div>
          </div>
        )}
      </nav>

      {/* Dedicated Video Section */}
      <section className="bg-black">
        <video 
          ref={videoRef}
          src="https://www.dropbox.com/scl/fi/pp45indfssf6bvydtn8a6/Portino-Logo-Animation.mp4?rlkey=gyn9o2v0n1dha1uuvnb8d6ib2&raw=1"
          className="w-full h-auto opacity-90"
          style={{ 
            maxHeight: '50vh',
            minHeight: '200px',
            objectFit: 'contain'
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </section>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gray-950">
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto pt-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
                Digitale Lösungen für Ihr Unternehmen
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
                Professionelle IT-Services, Webentwicklung und Cloud-Lösungen aus einer Hand
              </p>
              <a href="#contact" className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] inline-flex items-center space-x-2">
                <span>Kontakt aufnehmen</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-gray-400">Umfassende IT-Lösungen für moderne Unternehmen</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-cyan-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Netzwerk & Server</h3>
              <p className="text-gray-400">Setup und Wartung von Netzwerken, Servern und Backup-Systemen</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-cyan-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Webentwicklung</h3>
              <p className="text-gray-400">Moderne Websites, UI/UX Design und Suchmaschinenoptimierung</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-cyan-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud-Lösungen</h3>
              <p className="text-gray-400">Microsoft 365, Nextcloud und professionelle E-Mail-Services</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-cyan-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">IT-Support</h3>
              <p className="text-gray-400">Dokumentation, Container-Management und Support vor Ort</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Über uns</h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Portino – Digital Solutions GbR ist Ihr zuverlässiger Partner für moderne IT-Lösungen. 
                Wir verbinden technische Expertise mit kundenorientiertem Service.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-lg font-semibold mb-1">Unsere Mission</h3>
                  <p className="text-gray-400">Digitale Transformation zugänglich und effizient zu gestalten</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-lg font-semibold mb-1">Unsere Vision</h3>
                  <p className="text-gray-400">Unternehmen durch innovative Technologien zum Erfolg zu führen</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-gray-950 font-bold text-lg">5+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Jahre Erfahrung</h4>
                    <p className="text-gray-400 text-sm">In der IT-Branche</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-gray-950 font-bold text-lg">50+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Zufriedene Kunden</h4>
                    <p className="text-gray-400 text-sm">Vertrauen auf unsere Lösungen</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-gray-950 font-bold text-lg">24/7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Support</h4>
                    <p className="text-gray-400 text-sm">Rund um die Uhr verfügbar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Unsere Services im Detail</h2>
            <p className="text-xl text-gray-400">Professionelle IT-Lösungen für jeden Bedarf</p>
          </div>
          
          <div className="space-y-12">
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Netzwerk, Server & Backup-Systeme</h3>
              <p className="text-gray-300 mb-6">
                Professionelle Einrichtung, Wartung und Support für Windows/Linux-Umgebungen, 
                NAS-Systeme, RAID-Konfigurationen und VPN-Lösungen.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">Windows/Linux Server</h4>
                  <p className="text-sm text-gray-400">Setup und Administration</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">NAS & RAID</h4>
                  <p className="text-sm text-gray-400">Datensicherheit und -verfügbarkeit</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">VPN-Lösungen</h4>
                  <p className="text-sm text-gray-400">Sichere Fernzugriffe</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Webentwicklung & Design</h3>
              <p className="text-gray-300 mb-6">
                Moderne Websites, professionelles UI/UX Design, Webhosting-Beratung und 
                Suchmaschinenoptimierung für maximale Online-Präsenz.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">Website-Erstellung</h4>
                  <p className="text-sm text-gray-400">Responsive und modern</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">UI/UX Design</h4>
                  <p className="text-sm text-gray-400">Benutzerfreundliche Interfaces</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">SEO-Optimierung</h4>
                  <p className="text-sm text-gray-400">Bessere Sichtbarkeit</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cloud-Lösungen & E-Mail</h3>
              <p className="text-gray-300 mb-6">
                Einrichtung und Administration von Microsoft 365, Nextcloud-Installationen, 
                Monitoring-Systeme und professionelle E-Mail-Services.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">Microsoft 365</h4>
                  <p className="text-sm text-gray-400">Vollständige Cloud-Integration</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">Nextcloud</h4>
                  <p className="text-sm text-gray-400">Private Cloud-Lösungen</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">E-Mail Services</h4>
                  <p className="text-sm text-gray-400">Professionelle Kommunikation</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">IT-Support & Dokumentation</h3>
              <p className="text-gray-300 mb-6">
                Umfassende Dokumentation und Inventarisierung von Hard- und Software, 
                Docker/Container-Management sowie IT-Support vor Ort und remote.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">Dokumentation</h4>
                  <p className="text-sm text-gray-400">Hardware & Software Inventar</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">Container-Management</h4>
                  <p className="text-sm text-gray-400">Docker & Orchestrierung</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <h4 className="font-semibold mb-2">Remote & Vor-Ort Support</h4>
                  <p className="text-sm text-gray-400">Flexibler IT-Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h2>
            <p className="text-xl text-gray-400">Lassen Sie uns über Ihr nächstes Projekt sprechen</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Kontaktieren Sie uns</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-Mail</h4>
                    <p className="text-gray-400">info@portino.net</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <p className="text-gray-400">+49 170 8260404</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp Business</h4>
                    <p className="text-gray-400">+49 170 8260404</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-600/50 rounded-lg">
                  <p className="text-green-400 text-center font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-600/50 rounded-lg">
                  <p className="text-red-400 text-center font-medium">
                    Sorry, something went wrong. Please try again later.
                  </p>
                </div>
              )}
              
              <form 
                className="space-y-6" 
                method="POST" 
                action="https://formspree.io/f/xnnvkqzw"
                onSubmit={handleFormSubmit}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Ihr Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="ihre.email@beispiel.de"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Nachricht</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-950 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                >
                  {formStatus === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/Logo2 trans.svg" alt="Portino Logo" className="h-8 w-8" />
                <span className="text-xl font-semibold">Portino – Digital Solutions GbR</span>
              </div>
              <p className="text-gray-400 mb-4">
                Ihr zuverlässiger Partner für moderne IT-Lösungen, Webentwicklung und Cloud-Services.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Netzwerk & Server</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Webentwicklung</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cloud-Lösungen</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">IT-Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">Über uns</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Kontakt</a></li>
                <li><Link to="/impressum" className="hover:text-cyan-400 transition-colors">Impressum</Link></li>
                <li><Link to="/datenschutz" className="hover:text-cyan-400 transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Portino – Digital Solutions GbR. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = localStorage.getItem('portino_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={handleAuthenticated} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}

export default App;