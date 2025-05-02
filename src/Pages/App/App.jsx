import React from 'react';
import QRCodeComponent from './QRCodeComponent';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900'>
      <h1 className='text-2xl font-bold mb-4'>Bienvenido a mi proyecto</h1>
      <QRCodeComponent />
    </div>
  );
};

export default App;
