import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[60vh] bg-black mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <img 
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80"
          alt="Hardware tools background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Real Parafusos e Ferramentas</h1>
          <p className="text-xl mb-8">Sua loja completa em ferramentas e materiais para construção</p>
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition">
            Conheça Nossos Produtos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;