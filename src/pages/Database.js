// src/dexieDB.js
import Dexie from 'dexie';

export const db = new Dexie('EstabelecimentosDB');

db.version(1).stores({
  estabelecimentos: '++id, nome,logo, cnpj, latitude, longitude'
});
