import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 w-full bg-yellow-500 text-black py-2 rounded font-semibold hover:bg-yellow-400 transition">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default ProductCard;