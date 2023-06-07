import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Authenticate and get access token
          const response = await axios.get('/api/auth');
          const accessToken = response.data.access_token;
  
          // Fetch data from Google Sheets API
          const sheetId = '1vG7it4XOA6P8tYUT_Jj987HJDFwY1vKgVwoFosJSk68';
          const range = 'Platos!A1:ZZ';
          const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?access_token=${accessToken}`;
          const sheetsResponse = await axios.get(url);
  
          // Extract data from the response
          const values = sheetsResponse.data.values;
          setData(values);
        } catch (error) {
          console.error('Error fetching data from Google Sheets:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {/* Display the fetched data */}
        {data.map((row, index) => (
          <div key={index}>{row.join(', ')}</div>
        ))}
      </div>
    );
  }
  
  

export default Menu;