import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Produtos em Destaque</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            image="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80"
            title="Ferramentas Manuais"
            description="Chaves, alicates e ferramentas diversas"
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80"
            title="Parafusos e Fixadores"
            description="Diversos tamanhos e especificações"
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1616321507403-9db926c914fd?auto=format&fit=crop&q=80"
            title="Ferramentas Elétricas"
            description="Equipamentos profissionais"
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80"
            title="Equipamentos de Proteção"
            description="EPIs e segurança"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;