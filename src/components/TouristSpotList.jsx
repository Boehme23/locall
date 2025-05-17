import React from 'react';

function TouristSpotList({ spots, onCheckIn, checkedInSpots }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Pontos Turísticos</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {spots.map((spot) => (
          <li key={spot.id} className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
            <div>
              <span className="font-bold text-lg">{spot.name}</span>
              <p className="text-sm text-gray-600">{spot.description}</p>
            </div>
            <button
              className={`px-4 py-2 rounded font-semibold transition-colors ${checkedInSpots.includes(spot.id) ? 'bg-green-400 text-white cursor-not-allowed' : 'bg-green-700 text-white hover:bg-green-800'}`}
              onClick={() => onCheckIn(spot.id)}
              disabled={checkedInSpots.includes(spot.id)}
            >
              {checkedInSpots.includes(spot.id) ? 'Check-in realizado' : 'Fazer Check-in'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TouristSpotList; 