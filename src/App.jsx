import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Merchants from './pages/Merchants';
import './App.css';

// Dados simulados de pontos turísticos e cupons
const TOURIST_SPOTS = [
  { id: 'catedral', name: 'Catedral Diocesana', description: 'Principal igreja de Lages, cartão postal da cidade.' },
  { id: 'mirante', name: 'Morro da Cruz', description: 'Vista panorâmica da cidade de Lages.' },
  { id: 'parque-europa', name: 'Parque Natural de Lages', description: 'Parque com lagos e trilhas.' },
  { id: 'museu', name: 'Museu Thiago de Castro', description: 'Museu histórico de Lages.' },
];

const COUPONS = [
  { id: 'cupom1', spotId: 'catedral', store: 'Café Catedral', description: '10% de desconto em qualquer café.' },
  { id: 'cupom2', spotId: 'mirante', store: 'Lages Souvenirs', description: 'R$ 5 de desconto em lembranças.' },
  { id: 'cupom3', spotId: 'parque-natural', store: 'Restaurante X', description: 'Cachaça grátis no almoço.' },
  { id: 'cupom4', spotId: 'museu', store: 'Livraria do Museu', description: '15% de desconto em livros.' },
];

function App() {
  const [checkedInSpots, setCheckedInSpots] = useState(() => {
    return JSON.parse(localStorage.getItem('checkedInSpots') || '[]');
  });
  const [usedCoupons, setUsedCoupons] = useState(() => {
    return JSON.parse(localStorage.getItem('usedCoupons') || '[]');
  });

  useEffect(() => {
    localStorage.setItem('checkedInSpots', JSON.stringify(checkedInSpots));
  }, [checkedInSpots]);

  useEffect(() => {
    localStorage.setItem('usedCoupons', JSON.stringify(usedCoupons));
  }, [usedCoupons]);

  const handleCheckIn = (spotId) => {
    if (!checkedInSpots.includes(spotId)) {
      setCheckedInSpots([...checkedInSpots, spotId]);
    }
  };

  const handleUseCoupon = (couponId) => {
    if (!usedCoupons.includes(couponId)) {
      setUsedCoupons([...usedCoupons, couponId]);
    }
  };

  // Cupons desbloqueados após check-in
  const unlockedCoupons = COUPONS.filter(coupon => checkedInSpots.includes(coupon.spotId));

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-green-700 text-white p-4 shadow">
          <h1 className="text-2xl font-bold text-center">Locall</h1>
          <p className="text-center text-sm mb-4">Descubra Lages-SC, faça check-in nos pontos turísticos e desbloqueie cupons exclusivos!</p>
          <nav className="flex justify-center gap-4">
            <Link to="/" className="hover:text-green-200 font-medium">Mapa</Link>
            <Link to="/merchants" className="hover:text-green-200 font-medium">Comerciantes</Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  checkedInSpots={checkedInSpots}
                  usedCoupons={usedCoupons}
                  onCheckIn={handleCheckIn}
                  onUseCoupon={handleUseCoupon}
                />
              } 
            />
            <Route path="/merchants" element={<Merchants />} />
          </Routes>
        </main>
        <footer className="text-center text-xs text-gray-500 py-4">&copy; {new Date().getFullYear()} Locall</footer>
      </div>
    </Router>
  );
}

export default App;
