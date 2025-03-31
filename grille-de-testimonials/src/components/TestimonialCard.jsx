import React from "react";

const TestimonialCard = ({ src, nom, star, temoignage }) => {
  return (
    <div className="testimonial-card">
      {/* Image */}
      <img src={src} alt="placehold.co" className="w-40 h-40 object-cover rounded-full m-auto p-2" />

      {/* Contenu */}
      <div className="p-4 flex flex-col flex-grow h-full items-start">
        {/* Nom + étoiles */}
        <div className="mb-2">
          <h3 className="font-semibold text-xl">{nom}</h3>
          <h4>{star}</h4>
        </div>

        {/* Témoignage */}
        <div className="mt-auto pt-2">
          <p className="text-sm italic">{temoignage}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;