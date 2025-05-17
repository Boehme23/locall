import React from 'react';

function CouponList({ coupons, onUseCoupon, usedCoupons }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Cupons Desbloqueados</h2>
      {coupons.length === 0 ? (
        <p className="text-gray-500">Nenhum cupom desbloqueado ainda. Faça check-in em um ponto turístico!</p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {coupons.map((coupon) => (
            <li key={coupon.id} className="bg-green-50 border border-green-200 rounded-lg shadow p-4 flex flex-col gap-2">
              <div>
                <span className="font-bold text-lg">{coupon.store}</span>
                <p className="text-sm text-gray-700">{coupon.description}</p>
              </div>
              <button
                className={`px-4 py-2 rounded font-semibold transition-colors ${usedCoupons.includes(coupon.id) ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-700 text-white hover:bg-green-800'}`}
                onClick={() => onUseCoupon(coupon.id)}
                disabled={usedCoupons.includes(coupon.id)}
              >
                {usedCoupons.includes(coupon.id) ? 'Cupom usado' : 'Usar cupom'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CouponList; 