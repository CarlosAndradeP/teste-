import React from 'react';
import { ToolIcon, ShoppingBagIcon, WrenchIcon } from '@lucide/react';

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <ToolIcon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Produtos de Qualidade</h3>
            <p className="text-gray-600">Oferecemos as melhores marcas do mercado</p>
          </div>
          <div className="text-center p-6">
            <ShoppingBagIcon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Variedade Completa</h3>
            <p className="text-gray-600">Tudo que você precisa em um só lugar</p>
          </div>
          <div className="text-center p-6">
            <WrenchIcon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Assistência Técnica</h3>
            <p className="text-gray-600">Suporte especializado para suas necessidades</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;