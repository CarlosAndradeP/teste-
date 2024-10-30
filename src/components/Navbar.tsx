import React, { useState, useCallback } from 'react';
import { ToolIcon, MenuIcon, XIcon } from '@lucide/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const menuItems = [
    { href: "#", label: "Início" },
    { href: "#", label: "Produtos" },
    { href: "#", label: "Serviços" },
    { href: "#", label: "Sobre" },
    { href: "#", label: "Contato" }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ToolIcon className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 font-bold text-xl">Real Parafusos</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-gray-700 hover:text-yellow-500 transition">
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;