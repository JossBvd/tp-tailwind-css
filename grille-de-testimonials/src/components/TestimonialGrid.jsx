import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialGrid = () => {
  const temoignages = [
    {
      id: 1,
      src: "https://picsum.photos/id/237/100/100",
      nom: "John Doe",
      star: "🌟🌟🌟🌟",
      temoignage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem ratione libero vel commodi.",
    },
    {
      id: 2,
      src: "https://picsum.photos/id/238/100/100",
      nom: "Jane Dae",
      star: "🌟🌟🌟",
      temoignage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      src: "https://picsum.photos/id/239/100/100",
      nom: "June Due",
      star: "🌟🌟",
      temoignage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem ratione.",
    },
    {
      id: 4,
      src: "https://picsum.photos/id/111/100/100",
      nom: "Jane Dae",
      star: "🌟🌟🌟🌟🌟",
      temoignage:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem ratione, dolorem ratione libero vel commodi.",
    },
  ];

  return (
    <div class="m-auto gap-6  p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {temoignages.map((temoignage) => (
        <TestimonialCard
          key={temoignage.id}
          src={temoignage.src}
          nom={temoignage.nom}
          star={temoignage.star}
          temoignage={temoignage.temoignage}
        />
      ))}
    </div>
  );
};

export default TestimonialGrid;
