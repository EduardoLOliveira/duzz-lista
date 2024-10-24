import React from 'react';

const App = () => {
  const produtos = [
    {
      id: 1,
      nome: 'Fusca 1970',
      preco: 'R$ 30.000,00',
      image:
        'https://cdn-meloja.nyc3.cdn.digitaloceanspaces.com/stores/uploads/705178/conversions/large.jpg',
    },
    {
      id: 2,
      nome: 'Chevrolet Camaro',
      preco: 'R$ 150.000,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQX34qvsMtx0YntGXPBPaudCYlSJKuJeC5Lg&s',
    },
    {
      id: 3,
      nome: 'Ford Mustang',
      preco: 'R$ 200.000,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQbwgcxd_rKJMc0b8GZel0xoxip-vsBN5Qw&s',
    },
    {
      id: 4,
      nome: 'Porsche 911',
      preco: 'R$ 700.000,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2O1tzB1okHdB8GkA_Fx7ktRLuC6zN1emrA&s',
    },
    {
      id: 5,
      nome: 'Lamborghini Huracán',
      preco: 'R$ 1.000.000,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_hUNJ5FuVoGDnRf2oMlWbv7exBlaysduTA&s',
    },
    {
      id: 6,
      nome: 'Ferrari 488',
      preco: 'R$ 1.200.000,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs7F1yNzwha55uF_k_paJUjJebMA-4u9hHA&s',
    },
    {
      id: 7,
      nome: 'Tesla Model S',
      preco: 'R$ 400.000,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZGZcizrhRGyWltyV5ofWApFfTI3kUcYy7w&s',
    },
    {
      id: 8,
      nome: 'BMW M3',
      preco: 'R$ 350.000,00',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQ6f1DruciZdd1Kdt6wcm-BNqZ2-HOk1XGA&s',
    },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '2rem' }}>Lista de Produtos</h1>
      <ul style={{ padding: 0 }}>
        {produtos.map((produto) => (
          <li
            key={produto.id}
            style={{
              listStyleType: 'none',
              margin: '20px',
              textAlign: 'center',
            }}
          >
            <img
              src={produto.image}
              alt={produto.nome}
              style={{ width: '200px', height: 'auto' }} // Aumentando o tamanho da imagem
            />
            <div style={{ fontSize: '1.5rem' }}>
              {' '}
              {/* Aumentando o tamanho da fonte */}
              <strong>{produto.nome}</strong>
              <br />
              {produto.preco}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
