import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ObraAeropuerto from './Components/Obras/ObraAeropuerto';
import ObraHotelSalta from './Components/Obras/ObraHotelSalta';
import ObraMebac from './Components/Obras/ObraMebac';
import ObraConectar from './Components/Obras/ObraConectar';
import ObraYarade from './Components/Obras/ObraYarade';
import ObraSeil from './Components/Obras/ObraSeil';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AA2000" element={<ObraAeropuerto />} />
          <Route path="/HotelSalta" element={<ObraHotelSalta />} />
          <Route path="/MEBAC" element={<ObraMebac />} />
          <Route path="/ProyectoConectar" element={<ObraConectar />} />
          <Route path="/FYyAS" element={<ObraYarade />} />
          <Route path="/Seil" element={<ObraSeil />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;


