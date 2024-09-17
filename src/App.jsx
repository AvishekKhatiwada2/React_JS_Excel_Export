import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import * as XLSX from 'xlsx';
import Table from './Table'
import Export from './Export'

function App() {
  
  const data = [
    { Name: 'John Doe', Age: 28, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 34, Email: 'jane@example.com' },
    // Add more data as needed
  ];

  return (
    <>
    <div>
      <h1>Export Table to Excel</h1>
      <Table data={data} />
      <Export data={data} />
    </div>
    </>
  )
}

export default App
