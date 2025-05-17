import React from 'react';

function Merchants() {
  const merchants = [
    { id: 1, name: 'Café Catedral', description: 'Cafeteria tradicional próxima à Catedral' },
    { id: 2, name: 'Lages Souvenirs', description: 'Loja de lembranças e artesanato local' },
    { id: 3, name: 'Restaurante X', description: 'Culinária típica serrana' },
    { id: 4, name: 'Livraria do Museu', description: 'Livros sobre história e cultura local' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Comerciantes Parceiros</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {merchants.map(merchant => (
          <div key={merchant.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{merchant.name}</h3>
            <p className="text-gray-600">{merchant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Merchants; 