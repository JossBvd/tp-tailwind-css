import { useState } from 'react';
import React from "react";

function ProductCard({ nom, prix, description, image, note }) {
  const[favorite, setFavorite] = useState(true);
  return (
    <div className="relative rounded-lg overflow-hidden max-w-sm bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-purple-700 hover:text-white">
      <div class="w-100 h-100">
        <img src={image} alt={nom} className="w-full object-cover" />
      </div>
      <hr />
      <div className="p-4 space-y-2 bg-cyan-600 hover:bg-purple-700 hover:shadow-lg transition duration-300" >
        <div className="flex flex-col justify-between items-start">
          <h2 className="text-lg font-bold">{nom}</h2>
          <p className="font-semibold">{prix} €</p>
          <p className="font-semibold">({note})</p>
          <p className="font-light">(
            {description}</p>

        </div>
        <div class="flex flex-row justify-between">
            <div>
              <button class="border-4 border-gray-600 bg-neutral-400 p-2">Ajouter</button>
            </div>
            <div class="w-8 h-8">
              <img 
                src={` ${favorite? "./assets/images/silhouette-en-forme-de-coeur.png":"./assets/images/comme.png"}`}   
                alt={nom}
                onClick={() => setFavorite(!favorite)}
           />
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProductCard;
