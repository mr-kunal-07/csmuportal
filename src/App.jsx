import React, { useState } from 'react';
import { PdfDataProvider } from './contexts/PdfDataContext';
import PdfList from './components/PdfList';
import logo from './assets/Images/csmulogo.jpeg'
import './App.css';

function App() {
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  // const [subject, setSubject] = useState('');

  return (
    <PdfDataProvider>
      <div className="bg-gray-900 text-white min-h-screen">
        <nav className="flex gap-2 bg-gray-800 p-4">
          <img src={logo} className='h-12 rounded-full' alt="csmulogo" />
          <h1 className="mt-2 text-2xl font-semibold">CSMU Notes Provider Portal</h1>
        </nav>
        <div className="container mx-auto p-4 max-w-5xl">
          <div className="mb-4">
            <label htmlFor="department" className="block text-lg mb-2">Select Department:</label>
            <select
              id="department"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              <option value="it">IT</option>
              <option value="cs">CS</option>
              <option value="bca">BCA</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="semester" className="block text-lg mb-2">Select Semester:</label>
            <select
              id="semester"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
            </select>
          </div>
          {/* <div className="mb-4">
            <label htmlFor="subject" className="block text-lg mb-2">Select Subject:</label>
            <select
              id="subject"
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              <option value="1">ENGINEERING MATHEMATICS</option>
              <option value="2">ENGLISH COMMUNICATION SKILLS </option>
              <option value="3">Computer Fundamental</option>
              <option value="4">Principles of Management-I </option>
              <option value="5">C PROGRAMMING </option>
            </select>
          </div> */}
          

          {/* Display PDFs using PdfList component */}
          <PdfList department={department} semester={semester} />
        </div>
      </div>
    </PdfDataProvider>
  );
}

export default App;
