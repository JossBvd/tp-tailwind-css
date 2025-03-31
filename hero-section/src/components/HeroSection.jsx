import React from "react";

const HeroSection = () => {
  return (
    <section class="relative h-[500px] p-6">
      <div class="absolute inset-0 bg-[url('https://picsum.photos/id/203/4000/4000')] bg-cover bg-center bg-fixed"></div>

      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 text-white flex flex-col justify-around h-full p-8 gap-6">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-start">
          Un produit acheté le deuxième offert !
        </h1>
        <p class="text-start line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum expedita nesciunt non quibusdam praesentium adipisci corrupti tempora, molestias cupiditate nisi officia porro dolorem natus ducimus sapiente nobis labore distinctio consequatur dicta! Soluta corporis illum velit accusamus! Laudantium, molestiae ex quisquam ipsum eos repellendus possimus eligendi consectetur iusto adipisci voluptate?
        </p>
        <div class="flex justify-center gap-8">
          <button class="bg-white text-black px-6 py-2 rounded-full transition-all hover:scale-105 duration-300 hover:bg-green-500">
            Acheter
          </button>
          <button class="border-2 border-white px-6 py-2 rounded-full transition-all hover:scale-105 duration-300 hover:bg-green-500">
            Panier
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
