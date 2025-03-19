import React from "react";
import profileimage from '../../images/home images/WhatsApp Image 2025-03-03 at 21.06.39_5fbd92ae 1.png';

const TestimonialCard = () => {
  return (
    <div className="container flex justify-center items-center min-h-screen bg-gray-100 p-4 " style={{marginTop:"100px", marginBottom:"100px"}}>
      <div
        className="bg-white shadow-lg rounded-3xl p-6 text-center"
        style={{
          width: "1000px", // Fixed width
          height: "400px", // Hug content
          maxWidth: "100%", // Makes it responsive on smaller screens
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileimage}
            alt="Dr. Asma Khan"
            className="rounded-full border-4 border-gray-200 object-cover"
            style={{ width: "150px", height: "150px", marginTop: "20px" }}
          />
        </div>

        {/* Responsive Description */}
        <p 
  className="text-gray-700 mt-4 text-sm md:text-base lg:text-lg leading-relaxed 
             px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
             max-w-full break-words overflow-hidden"
  style={{
    fontFamily: "Roboto",
    textAlign: "justify",
    marginTop: "-30px",
    marginLeft: "auto",
    marginRight: "auto",
    wordBreak: "break-word", // Ensures words wrap properly
    whiteSpace: "normal", // Prevents text from stretching outside the container
  }}
>
          <strong>Dr. Asma Khan</strong> has been practicing homeopathy since
          2012, working alongside Dr. Kiran Parekh. She received her first
          certification from the National Council for Homeopathy and later
          earned further qualifications from the renowned Hahnemann College of
          Homeopathy in the UK. Dr. Khan is also an active member of the United
          Kingdom Homeopathic Association (MUKHA).
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
