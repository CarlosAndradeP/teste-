import React, { FormEvent } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon, FacebookIcon } from '@lucide/react';

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    const formData = new FormData(e.currentTarget);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPinIcon className="text-yellow-500" />
                <p>Rua Principal, 123 - Centro</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="text-yellow-500" />
                <p>(XX) XXXX-XXXX</p>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="text-yellow-500" />
                <p>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="text-yellow-500" />
                <p>contato@realparafusos.com.br</p>
              </div>
              <div className="flex items-center gap-3">
                <FacebookIcon className="text-yellow-500" />
                <a href="https://www.facebook.com/realparafusoseferramentas/" 
                   className="hover:text-yellow-500 transition"
                   target="_blank" 
                   rel="noopener noreferrer">
                  /realparafusoseferramentas
                </a>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Nome"
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-500 focus:outline-none"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-500 focus:outline-none"
              />
              <textarea 
                name="message"
                placeholder="Mensagem"
                required
                rows={4}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-500 focus:outline-none"
              ></textarea>
              <button 
                type="submit"
                className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;