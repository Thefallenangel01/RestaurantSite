import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MapsInteractive = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const output = useSelector((state) => state.maps.value);
  
  
  const handleMapLoad = () => {
    setIsLoading(false);
  };

  const handleMapError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Dynamic URLs from Redux state
  const mapsDirectionsUrl = "https://www.google.com/maps/dir//La+Felicità,+Viale+Rinaldo+Piaggio,+26,+56025+Pontedera+PI";
  
  const mapsViewUrl = "https://www.google.com/maps/place/La+Felicit%C3%A0/@43.661043,10.632996,15z/data=!4m2!3m1!1s0x132a75edc6d442d5:0x53524fbc27e702d4";

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 py-8">
      <div className="w-full px-4 relative">
        
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
              <p className="text-gray-600">{output.loadingMap || "Loading map..."}</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg z-10">
            <div className="text-center p-8">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{output.errorTitle || "Unable to load map"}</h3>
              <p className="text-gray-600 mb-4">{output.errorMessage || "An error occurred while loading the map."}</p>
              <a 
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                {output.openInMaps || "Open in Google Maps"}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Map iframe with better responsive sizing */}
        <iframe
          title={output.mapTitle || "Restaurant La Felicità - Viale Rinaldo Piaggio 26, Pontedera"}
          src={output.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2886.3811149623875!2d10.632996!3d43.661043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a75edc6d442d5%3A0x53524fbc27e702d4!2sLa%20Felicit%C3%A0!5e0!3m2!1sit!2sit!4v1708551327643!5m2!1sit!2sit"}
          width="100%"
          height="500"
          className="w-full max-w-[1450px] h-[400px] md:h-[500px] lg:h-[600px] rounded-lg shadow-lg border-2 border-white"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleMapLoad}
          onError={handleMapError}
        />

        {/* Quick Actions Below Map - EQUAL-SIZED RESPONSIVE BUTTONS */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a 
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-center min-h-[52px] w-full"
          >
            <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="font-medium">{output.indications || "Get Directions"}</span>
          </a>
          
          <a 
            href={mapsViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg text-center min-h-[52px] w-full"
          >
            <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="font-medium">{output.visualize || "View on Maps"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapsInteractive;