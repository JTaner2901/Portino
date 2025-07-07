import React from 'react';
import { ArrowLeft } from 'lucide-react';

function Impressum() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-16">
      {/* Navigation Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Zurück</span>
        </button>
      </div>

      {/* Impressum Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gray-800/30 p-8 md:p-12 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
          
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Impressum
          </h1>

          {/* Legal Information Section */}
          <div className="space-y-8">
            
            {/* TMG Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                Angaben gemäß § 5 TMG:
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p className="font-medium">Portino – Digital Solutions GbR</p>
                <p>Mert Can Kodal und Juan-Taner Allerborn</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                Kontakt:
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>
                  <span className="font-medium">Telefon:</span> +49 170 8260404
                </p>
                <p>
                  <span className="font-medium">E-Mail:</span> 
                  <a 
                    href="mailto:info@portino.net" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors ml-2"
                  >
                    info@portino.net
                  </a>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* Tax Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                Steuerliche Angaben:
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  <span className="font-medium">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</span> DE123456789
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* Liability Disclaimer */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                Haftungsausschluss:
              </h2>
              <div className="text-gray-300 leading-relaxed">
                <p>
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                  Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressum;