
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
    const [platos, setPlatos] = useState([]);
    const [categorias, setCategorias] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch data from Google Sheets API - Platos sheet
          const sheetId = '1vG7it4XOA6P8tYUT_Jj987HJDFwY1vKgVwoFosJSk68';
          const range = 'Platos!A1:ZZ';
          const apiKey = 'AIzaSyArikwxM8CGxHNFzkPOW0-6-RyfrD7a0p4'; // Replace with your actual API key
          const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
          const sheetsResponse = await axios.get(url);
          const values = sheetsResponse.data.values;
          const keys = values[0];
          const dataWithoutKeys = values.slice(1);
          const objects = dataWithoutKeys.map(row =>
            Object.fromEntries(row.map((value, index) => [keys[index], value]))
          );
  
          // Fetch data from Google Sheets API - Categorías sheet
          const range2 = 'Categorías!A1:ZZ';
          const url2 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range2}?key=${apiKey}`;
          const sheetsResponse2 = await axios.get(url2);
          const values2 = sheetsResponse2.data.values;
          const keys2 = values2[0];
          const data2 = values2.slice(1);
          const objects2 = data2.map(row =>
            Object.fromEntries(row.map((value, index) => [keys2[index], value]))
          );
  
          setPlatos(objects);
          setCategorias(objects2);
        } catch (error) {
          console.error('Error fetching data from Google Sheets:', error);
        }
      };
  
      fetchData();
    }, []);

    const filtrados= platos.filter(p=>p.Activo=='Sí')

    const platosAgrupados = filtrados.reduce((agrupados, plato) => {
        const categoriaId = plato.Categoría_id;
        const categoria = categorias.find((cat) => cat.id === categoriaId);
    
        if (!agrupados[categoria.Nombre]) {
        agrupados[categoria.Nombre] = [];
        }
    
        agrupados[categoria.Nombre].push(plato);
    
        return agrupados;
    }, {});
  
  const menurender = Object.keys(platosAgrupados).map((categoria) => {
    const platosCategoria = platosAgrupados[categoria];
    const platosConDescripcion = platosCategoria.map((plato) => {
      return {
        nombre: plato.Nombre,
        precio: plato.Precio,
        descripcion: plato.Descripción,
      };
    });
  
    return {
      categoría: categoria,
      platos: platosConDescripcion,
    };
  });

  console.log(menurender)

  return (
    <div className="container mx-auto bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Menú</h1>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menurender.map((item) => (
          <div
            key={item.categoría}
            className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="bg-orange-500 h-2 w-16 absolute top-0 left-0"></div>
            <h2 className="text-xl font-semibold mb-4">{item.categoría}</h2>
            <ul>
              {item.platos.map((plato) => (
                <li key={plato.nombre} className="mb-4">
                  <h3 className="text-lg font-medium">
                    {plato.nombre} <span className="text-gray-700 text-base font-normal">-</span> <span className="text-gray-700 text-sm font-normal">${plato.precio}</span>
                  </h3>
                  <p className="text-gray-600 text-sm italic">{plato.descripcion}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
