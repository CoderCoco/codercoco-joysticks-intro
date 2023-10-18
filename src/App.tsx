import React from 'react';
import logo from './logo.svg';
import QRCodeSpiral from './qr-code/QrCodeSpiral';

function App() {
  return (
    <div className="App">
      <QRCodeSpiral url='https://www.google.com'></QRCodeSpiral>
    </div>
  );
}

export default App;
