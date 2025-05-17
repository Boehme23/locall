// src/components/EstabelecimentoForm.jsx
import React, { useState } from 'react';
import { db } from '../dexieDB';

function EstabelecimentoForm() {
  const [formData, setFormData] = useState({
    nome: '',
    cnpj: '',
    logo:'',
    latitude: '',
    longitude: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.estabelecimentos.add(formData);
    alert('Estabelecimento salvo no banco local!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome" onChange={handleChange} />
      <input type="text" name="cnpj" placeholder="CNPJ" onChange={handleChange} />
      <input type='image' name ='logo' placeholder='Logo' onChange={handleChange}/>
      <input type="text" name="latitude" placeholder="Latitude" onChange={handleChange} />
      <input type="text" name="longitude" placeholder="Longitude" onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default EstabelecimentoForm;
