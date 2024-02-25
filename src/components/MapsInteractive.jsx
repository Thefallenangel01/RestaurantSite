function MapsInteractive() {
    return (
      <div className=" flex justify-center items-center  bg-gradient-to-b from-gray-400 to-gray-600 min-h-screen mt-0">
        <div>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2886.3811149623875!2d10.632996!3d43.661043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a75edc6d442d5%3A0x53524fbc27e702d4!2sLa%20Felicit%C3%A0!5e0!3m2!1sit!2sit!4v1708551327643!5m2!1sit!2sit"
            width="1450"
            height="700"
            className="m-4 w-[450px] h-[300px] md:w-[1450px] md:h-[700px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
  
  export default MapsInteractive;
  