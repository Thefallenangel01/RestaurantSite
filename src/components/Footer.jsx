import React from 'react';
import { useSelector } from 'react-redux';

// Enhanced Footer Component with better design and accessibility
export const NormalFooter = () => {
    const out = useSelector((state) => state.footer.value);
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-800 text-white py-8 border-t-4 border-red-500" role="contentinfo">
            <div className="container mx-auto px-4">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-6">
                    
                    {/* Restaurant Info */}
                    <div className="text-center md:justify-self-start md:text-center">
                        <h3 className="text-xl font-bold mb-3 text-red-400" style={{ fontFamily: "Dancing Script" }}>
                            Ristorante La Felicità
                        </h3>
                        <address className="text-gray-300 not-italic">
                            Viale Rinaldo Piaggio 26<br />
                            56025 Pontedera (PI), Italia
                        </address>
                    </div>

                    {/* Operating Hours */}
                    <div className="text-center">
                        <h4 className="text-lg font-semibold mb-3 text-red-400 flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {out.openingHours || "Orari"}
                        </h4>
                        <div className="text-gray-300 space-y-2">
                            <p className="font-medium text-green-400 text-sm">
                                {out.everyday || "Tutti i giorni"}
                            </p>
                            <div className="space-y-1 text-sm">
                                <div className="flex items-center justify-center space-x-2">
                                    <span className="text-red-300 font-medium">{out.lunch}</span>
                                    <span className="text-white font-mono">{out.lunchTime}</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <span className="text-red-300 font-medium">{out.dinner}</span>
                                    <span className="text-white font-mono">{out.dinnerTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:justify-self-end md:text-center">
                        <h4 className="text-lg font-semibold mb-3 text-red-400">
                            {out.contact || "Contatti"}
                        </h4>
                        <div className="space-y-2 text-gray-300">
                            <p>
                                <a 
                                    href="tel:+393338695996" 
                                    className="hover:text-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded inline-flex items-center"
                                    aria-label="Chiama il numero di telefono"
                                >
                                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Telefono">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +39 333 869 5996
                                </a>
                            </p>
                            <p>
                                <a 
                                    href="mailto:ristorantelafelicita@gmail.com" 
                                    className="hover:text-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded inline-flex items-center"
                                    aria-label="Invia una email"
                                >
                                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Email">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    ristorantelafelicita@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-6">
                    <a 
                        href="https://www.facebook.com/ristorantelafelicita/?locale=it_IT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg p-2"
                        aria-label="Visita la nostra pagina Facebook"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Facebook">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    
                    <a 
                        href="https://wa.me/3338695996"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg p-2"
                        aria-label="Contattaci su WhatsApp"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="WhatsApp">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.51 3.488"/>
                        </svg>
                    </a>

                    <a 
                        href="mailto:ristorantelafelicita@gmail.com"
                        className="text-gray-400 hover:text-red-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-lg p-2"
                        aria-label="Invia una email"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Email">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-6">
                    {/* Copyright */}
                    <div className="text-center text-gray-400">
                        <p className="mb-2">
                            &copy; {currentYear} {out.copyresName || "Ristorante La Felicità"} - {out.place || "Pontedera, Italia"}. {out.rights || "Tutti i diritti riservati"}.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};