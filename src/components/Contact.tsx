import React from 'react';
import { MailIcon, PhoneIcon, HomeIcon, ClockIcon, UsersIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section className="px-6 py-12 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">Nous contacter</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white/70 p-8 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white cursor-pointer transition">
            <HomeIcon className="w-8 h-8 text-slate-600 mb-2" />
            <h3 className="text-2xl font-semibold text-slate-800">Adresse du Studio</h3>
            <p className="text-slate-600">123 Rue de la Musique, 75000 Paris, France</p>
          </div>

          <div className="bg-white/70 p-8 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white cursor-pointer transition">
            <PhoneIcon className="w-8 h-8 text-slate-600 mb-2" />
            <h3 className="text-2xl font-semibold text-slate-800">Numéro de Téléphone</h3>
            <p className="text-slate-600">+33 1 23 45 67 89</p>
            <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Appeler maintenant</button>
          </div>

          <div className="bg-white/70 p-8 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white cursor-pointer transition">
            <MailIcon className="w-8 h-8 text-slate-600 mb-2" />
            <h3 className="text-2xl font-semibold text-slate-800">Courriel de Support</h3>
            <p className="text-slate-600">support@production-artistique.fr</p>
            <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Envoyer un Email</button>
          </div>

          <div className="bg-white/70 p-8 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white cursor-pointer transition">
            <ClockIcon className="w-8 h-8 text-slate-600 mb-2" />
            <h3 className="text-2xl font-semibold text-slate-800">Heures d'Ouverture</h3>
            <p className="text-slate-600">Lun - Ven: 9:00 - 18:00</p>
          </div>

          <div className="bg-white/70 p-8 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white cursor-pointer transition">
            <UsersIcon className="w-8 h-8 text-slate-600 mb-2" />
            <h3 className="text-2xl font-semibold text-slate-800">Réseaux Sociaux</h3>
            <p className="text-slate-600">Facebook - 12k Followers</p>
            <p className="text-slate-600">Instagram - 8k Followers</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
