/* import './App.css'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/home" element={<Menu />} />
          {/* <Route path="/home/:idVideogame" element={<Detail />} />
          <Route path="/videogame" element={<CreateGame />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;


