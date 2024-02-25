import React from 'react';
import OtherPageNavBar from './OtherPageNavBar';
import MapsInteractive from './MapsInteractive';
import { useSelector } from 'react-redux';
function FindUs() {
  const path="/"
  const output =useSelector((state)=>state.findus.value);
  return (
    <>
      <OtherPageNavBar />
      <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-400 flex flex-col justify-center items-center text-black mt-12 sm:mt-20">
        <div className="flex flex-col items-center mb-8 mt-20 lg:mt-0">
          <h2 className="text-3xl  md:text-6xl font-bold mb-4 text-center">{output.ourLocation}</h2>
          <p className="text-lg md:text-xl font-bold max-w-3xl text-center mb-4">
          {output.visitUs}:
          </p>
          <p className="text-lg md:text-xl max-w-3xl text-center mb-4 ">
            Viale Rinaldo Piaggio 26 56025 Pontedera (PI)
          </p>
        </div>
        
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl md:text-xl font-bold mb-4 text-center">{output.contactUs}:</h2>
        </div>
        <div className="justify-center items-center mb-4 grid grid-cols-2 md:grid-cols-4 lg:gap-40 gap-8">
        
          <div className="flex flex-col items-center">
            <div className="relative transition duration-300 ease-in-out transform hover:scale-110">
              <a href="https://www.google.com/maps/dir//La+Felicità,+Viale+Rinaldo+Piaggio,+26,+56025+Pontedera+PI" className="m-4">
                <img src={`${path}google-maps-icon.svg`} alt="Phone" className="w-20 h-20" />
              </a>
              <p className="text-lg font-semibold text-center mt-2">Google Maps</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative transition duration-300 ease-in-out transform hover:scale-110">
              <a href="mailto:ristorantelafelicita@gmail.com" className="m-4">
                <img src={`${path}email-icon.svg`} alt="Email" className="w-20 h-20" />
              </a>
              <p className="text-lg font-semibold text-center mt-2">E-mail</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative transition duration-300 ease-in-out transform hover:scale-110">
              <a href="https://wa.me/3338695996" className="m-4">
                <img src={`${path}whatsapp-icon.svg`} alt="WhatsApp" className="w-20 h-20" />
              </a>
              <p className="text-lg font-semibold text-center mt-2">WhatsApp</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative transition duration-300 ease-in-out transform hover:scale-110">
              <a href="https://www.facebook.com/ristorantelafelicita/?locale=it_IT" className="m-4">
                <img src={`${path}facebook-icon.svg`} alt="Facebook" className="w-20 h-20" />
              </a>
              <p className="text-lg font-semibold text-center mt-2">Facebook</p>
            </div>
          </div>
        </div>
        <div className='text-bold text-center mt-20 text-3xl '>
          <h1 className="text-lg md:text-xl max-w-3xl text-center mb-0 text-black">{output.weAreHere}</h1>
        </div>
      </div>
      <MapsInteractive></MapsInteractive>
    </>
  );
}

export default FindUs;
