import React from 'react';
import { ArrowLeft } from 'lucide-react';

function Datenschutz() {
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

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gray-800/30 p-8 md:p-12 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
          
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Datenschutzerklärung
          </h1>

          {/* Privacy Policy Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            
            {/* 1. Allgemeine Hinweise */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                1. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Datenschutz</h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                  dieser Datenschutzerklärung.
                </p>
                <p>
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
                  Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende 
                  Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, 
                  wie und zu welchem Zweck das geschieht.
                </p>
                <p>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) 
                  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist 
                  nicht möglich.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* 2. Verantwortliche Stelle */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                2. Verantwortliche Stelle
              </h2>
              <div className="space-y-4">
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="bg-gray-700/30 p-4 rounded-lg">
                  <p className="font-medium">Portino – Digital Solutions GbR</p>
                  <p>Mert Can Kodal und Juan-Taner Allerborn</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p className="mt-2">
                    <span className="font-medium">Telefon:</span> +49 170 8260404<br />
                    <span className="font-medium">E-Mail:</span> 
                    <a href="mailto:info@portino.net" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1">
                      info@portino.net
                    </a>
                  </p>
                </div>
                <p>
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
                  anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, 
                  E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* 3. Rechtsgrundlage */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                3. Rechtsgrundlage der Datenverarbeitung
              </h2>
              <div className="space-y-4">
                <p>
                  Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person 
                  einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
                </p>
                <p>
                  Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen 
                  Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als 
                  Rechtsgrundlage.
                </p>
                <p>
                  Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung 
                  erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als 
                  Rechtsgrundlage.
                </p>
                <p>
                  Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines 
                  Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen 
                  das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die 
                  Verarbeitung.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* 4. Ihre Rechte */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                4. Ihre Rechte als betroffene Person
              </h2>
              <div className="space-y-4">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen.</li>
                  <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.</li>
                  <li><strong>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen.</li>
                </ul>
                <p>
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: 
                  <a href="mailto:info@portino.net" className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1">
                    info@portino.net
                  </a>
                </p>
                <p>
                  Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
                  personenbezogenen Daten durch uns zu beschweren.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* 5. Hosting und Server-Logfiles */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                5. Hosting und Server-Logfiles
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Hosting</h3>
                <p>
                  Wir hosten die Inhalte unserer Website bei einem externen Dienstleister. Die von diesem erhobenen 
                  Daten werden auf Servern in Deutschland gespeichert.
                </p>
                
                <h3 className="text-lg font-medium text-white">Server-Logfiles</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Logfiles, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung 
                  dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein 
                  berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
                </p>
                <p>
                  Die Server-Logfiles werden für maximal 7 Tage gespeichert und anschließend automatisch gelöscht.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* 6. Kontaktformular und E-Mail */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                6. Kontaktformular und E-Mail-Kontakt
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Kontaktformular</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                  von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  Die im Kontaktformular erfassten Daten sind:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Betreff</li>
                  <li>Nachrichteninhalt</li>
                  <li>Zeitpunkt der Anfrage</li>
                </ul>
                
                <h3 className="text-lg font-medium text-white">E-Mail-Kontakt</h3>
                <p>
                  Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden 
                  personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert 
                  und verarbeitet.
                </p>
                
                <h3 className="text-lg font-medium text-white">Rechtsgrundlage und Speicherdauer</h3>
                <p>
                  Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
                  mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
                  erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
                  an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p>
                  Die von Ihnen an uns per Kontaktformular oder E-Mail übersandten Daten verbleiben bei uns, bis Sie 
                  uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die 
                  Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – 
                  bleiben unberührt.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* 7. Eingebettete Medien */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                7. Eingebettete Medien und externe Inhalte
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Video-Inhalte</h3>
                <p>
                  Auf unserer Website sind Videos eingebettet, die von externen Anbietern (z.B. Vimeo, Dropbox) 
                  bereitgestellt werden. Beim Aufruf einer Seite mit eingebetteten Videos wird eine Verbindung zu den 
                  Servern des jeweiligen Anbieters hergestellt.
                </p>
                <p>
                  Dabei können folgende Daten an den Anbieter übertragen werden:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP-Adresse des Nutzers</li>
                  <li>Zeitpunkt des Zugriffs</li>
                  <li>Aufgerufene Seite</li>
                  <li>Browser-Informationen</li>
                </ul>
                
                <h3 className="text-lg font-medium text-white">Dropbox</h3>
                <p>
                  Wir nutzen Dropbox zur Bereitstellung von Video-Inhalten. Anbieter ist Dropbox Inc., 333 Brannan 
                  Street, San Francisco, CA 94107, USA. Beim Laden der Videos wird eine Verbindung zu Dropbox 
                  hergestellt und Ihre IP-Adresse übertragen.
                </p>
                <p>
                  Weitere Informationen finden Sie in der Datenschutzerklärung von Dropbox: 
                  <a href="https://www.dropbox.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    https://www.dropbox.com/privacy
                  </a>
                </p>
                
                <h3 className="text-lg font-medium text-white">Rechtsgrundlage</h3>
                <p>
                  Die Einbindung erfolgt auf Grundlage unseres berechtigten Interesses an einer ansprechenden 
                  Darstellung unserer Online-Angebote (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* 8. Schriftarten */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                8. Schriftarten (Web Fonts)
              </h2>
              <div className="space-y-4">
                <p>
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Web Fonts. Diese werden lokal auf 
                  unserem Server gehostet, sodass keine Verbindung zu externen Servern (wie Google Fonts) hergestellt 
                  wird.
                </p>
                <p>
                  Durch die lokale Einbindung der Web Fonts werden keine personenbezogenen Daten an Drittanbieter 
                  übertragen.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* 9. Externe Links */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                9. Externe Links
              </h2>
              <div className="space-y-4">
                <p>
                  Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss 
                  haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte 
                  der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente 
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
                  Rechtsverletzung nicht zumutbar.
                </p>
                <p>
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* 10. Änderungen */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                10. Änderungen dieser Datenschutzerklärung
              </h2>
              <div className="space-y-4">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                  rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                  Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services.
                </p>
                <p>
                  Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Stand dieser Datenschutzerklärung:</strong> Januar 2025
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t border-gray-700"></div>

            {/* Legal Disclaimer */}
            <section>
              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6">
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Rechtlicher Hinweis</h3>
                <p className="text-sm text-gray-300">
                  Diese Datenschutzerklärung stellt keine Rechtsberatung dar und erhebt keinen Anspruch auf 
                  Vollständigkeit oder Richtigkeit. Bei rechtlichen Fragen sollten Sie einen Anwalt konsultieren. 
                  Die Datenschutzerklärung wurde nach bestem Wissen und Gewissen erstellt, jedoch können sich 
                  rechtliche Bestimmungen ändern.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Datenschutz;