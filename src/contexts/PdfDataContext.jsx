import React, { createContext } from 'react';

const PdfDataContext = createContext();

const PdfDataProvider = ({ children }) => {
  const preUploadedPdfs = [
    // { id: 'ITsem1', department: 'it', semester: '1', title: 'ENGINEERING MATHEMATICS UNIT:1', url: '/pdf/IT/SEM2/' },

    { id: 'ITsem1.1', department: 'it', semester: '2', title: 'SOFTWARE ENGINEERING UNIT:1', url: './src/assets/DBMS Assignment 2.pdf' },
    { id: 'ITsem1.2', department: 'it', semester: '2', title: 'SOFTWARE ENGINEERING UNIT:2', url: 'public/pdf/IT/SEM2/SE/UNIT 2 - SE - ASSIGNMENT SEM 2.pdf' },
    { id: 'ITsem1.3', department: 'it', semester: '2', title: 'SOFTWARE ENGINEERING UNIT:3', url: 'public/pdf/IT/SEM2/SE/UNIT 3 - SE - ASSIGNMENT SEM 2.pdf' },
    { id: 'ITsem1.4', department: 'it', semester: '2', title: 'SOFTWARE ENGINEERING UNIT:4', url: 'public/pdf/IT/SEM2/SE/UNIT 4 - SE - ASSIGNMENT SEM 2.pdf' },
    { id: 'ITsem1.5', department: 'it', semester: '2', title: 'SOFTWARE ENGINEERING UNIT:5', url: 'public/pdf/IT/SEM2/SE/UNIT 5 - SE - ASSIGNMENT SEM 2.pdf' },

    
    // { id: 'CSsem2', department: 'cs', semester: '1', title: 'SOFTWARE ENGINEERING  UNIT:1', url: '/pdf/Notes_IT_Sem1.pdf' },
    // { id: 'CSsem2', department: 'cs', semester: '2', title: 'SOFTWARE ENGINEERING  UNIT:1', url: '/pdf/Notes_IT_Sem1.pdf' },


    // { id: 'BCAsem3', department: 'bca', semester: '1', title: 'Notes BCA Semester 3', url: '/pdf/Notes_BCA_Sem3.pdf' },
    // { id: 'BCAsem3', department: 'bca', semester: '2', title: 'Notes BCA Semester 3', url: '/pdf/Notes_BCA_Sem3.pdf' },
  ];

  return (
    <PdfDataContext.Provider value={preUploadedPdfs}>
      {children}
    </PdfDataContext.Provider>
  );
};

export { PdfDataContext, PdfDataProvider };


