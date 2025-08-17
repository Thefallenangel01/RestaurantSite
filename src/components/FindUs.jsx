import React from 'react';
import OtherPageNavBar from './OtherPageNavBar';
import MapsInteractive from './MapsInteractive';
import { useSelector } from 'react-redux';
import { NormalFooter } from './Footer';

function FindUs() {
  const path = "/";
  const output = useSelector((state) => state.findus.value);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Ristorante La Felicità",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Viale Rinaldo Piaggio 26",
      "addressLocality": "Pontedera",
      "addressRegion": "PI",
      "postalCode": "56025",
      "addressCountry": "IT"
    },
    "telephone": "+39 333 869 5996",
    "email": "ristorantelafelicita@gmail.com",
    "openingHours": [
      "Mo-Su 12:00-15:00",
      "Mo-Su 19:00-23:00"
    ],
    "url": "https://www.facebook.com/ristorantelafelicita/?locale=it_IT"
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded z-50"
      >
        {output.skipToContent || "Skip to main content"}
      </a>

      <OtherPageNavBar />
      
      {/* Main content with unified gradient background */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        
        {/* Contact Section */}
        <div className="py-20 pt-32">
          <div className="container mx-auto px-4">
            {/* Contact heading */}
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800"
                  style={{ fontFamily: "Dancing Script" }}>
                📍 {output.contactUs}
              </h1>
            </div>

            {/* Contact Cards Grid with equal heights using CSS Grid auto-rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto" style={{ gridAutoRows: '1fr' }}>
              
              {/* Google Maps Card with Address */}
              <div className="group">
                <a 
                  aria-label="Open La Felicità on Google Maps - Opens in new tab" 
                  href="https://www.google.com/maps/dir//La+Felicità,+Viale+Rinaldo+Piaggio,+26,+56025+Pontedera+PI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-2 focus:-translate-y-2 border border-gray-100 cursor-pointer h-full"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex-grow">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Map icon">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">{output.location}</h3>
                      <address className="not-italic text-gray-700 mb-4 leading-relaxed text-sm">
                        Viale Rinaldo Piaggio 26<br />
                        56025 Pontedera (PI), Italia
                      </address>
                    </div>
                    <p className="text-blue-600 text-sm font-medium mt-4">{output.getDirections || "Get directions"}</p>
                  </div>
                </a>
              </div>

              {/* Email Card */}
              <div className="group">
                <a 
                  aria-label="Send us an email - Opens email client" 
                  href="mailto:ristorantelafelicita@gmail.com"
                  className="flex flex-col bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-2 focus:-translate-y-2 border border-gray-100 h-full cursor-pointer"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex-grow">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-200 transition-colors duration-300">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Email icon">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Email</h3>
                      <p className="text-gray-600 text-sm mb-4 break-words">ristorantelafelicita@gmail.com</p>
                    </div>
                    <p className="text-red-600 text-sm font-medium mt-4">{output.sendMessage || "Send us a message"}</p>
                  </div>
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="group">
                <a 
                  aria-label="Chat with us on WhatsApp - Opens in new tab" 
                  href="https://wa.me/3338695996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-2 focus:-translate-y-2 border border-gray-100 h-full cursor-pointer"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex-grow">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-300">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="WhatsApp icon">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.51 3.488"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">WhatsApp</h3>
                      <p className="text-gray-600 text-sm mb-4">+39 333 869 5996</p>
                    </div>
                    <p className="text-green-600 text-sm font-medium mt-4">{output.chatWithUs || "Chat with us"}</p>
                  </div>
                </a>
              </div>

              {/* Facebook Card */}
              <div className="group">
                <a 
                  aria-label="Visit our Facebook page - Opens in new tab" 
                  href="https://www.facebook.com/ristorantelafelicita/?locale=it_IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-2 focus:-translate-y-2 border border-gray-100 cursor-pointer h-full"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex-grow">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Facebook icon">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Facebook</h3>
                      <p className="text-gray-600 text-sm mb-4">La Felicità - ristorante cinese</p>
                    </div>
                    <p className="text-blue-600 text-sm font-medium mt-4">{output.followUs || "Follow us"}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Opening Hours Section */}
            <div className="max-w-2xl mx-auto mt-20">
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-2xl p-8 text-white text-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Clock icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">{output.openingHours || "Orari di Apertura"}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold">{output.everyday || "Tutti i giorni"}</p>
                  <p className="text-lg opacity-90">{output.lunch || "Pranzo: 12:00 - 15:00"}</p>
                  <p className="text-lg opacity-90">{output.dinner || "Cena: 19:00 - 23:00"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white/20 backdrop-blur-sm py-12">
          <div className="container mx-auto px-4 text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                style={{ fontFamily: "Dancing Script" }}>
              {output.weAreHere}
            </h2>
          </div>
          <MapsInteractive />
        </div>

      </div>

      <NormalFooter />
    </>
  );
}

export default FindUs;