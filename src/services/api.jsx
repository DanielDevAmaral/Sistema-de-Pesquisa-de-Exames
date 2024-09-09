import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FetchCSVData(){
  const [csvData, setCsvData] = useState([]) // inicia o estado com o array vazio ([representa o valor inicial "vazio"])
  // "serCsvData atua como uma função que atualiza o valor de csvData e sempre que sua funçaõ é chamada o seu valor é atualizada"

  useEffect(() => {
    fetchCSVData();
  }, []);

  const fetchCSVData = () => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/1u9jP2So8s2sonHujORzHmMJezqgbiXSY-0ScOv4VZXk/pub?output=csv'
    axios.get(csvUrl)
    .then((response) =>{
      const parsedCsvData = parseCSV(response.data);
      setCsvData(parsedCsvData)
      console.log(parsedCsvData)

    })
    .catch((e) =>{
      console.error("Erro ao tentar capturar os dados", e);
    })
  }

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(',');
    const data =[];
    for (let i = 1; i < rows.length; i++){
      const rowData = rows[i].split(',');
      const rowObject = {};
      for (let j = 0; j < headers.length; j++){
        rowObject[headers[j]] = rowData[j];
      }
      rowObject.id = i;
      data.push(rowObject);
    }

    return data;
  }
  return csvData;
}