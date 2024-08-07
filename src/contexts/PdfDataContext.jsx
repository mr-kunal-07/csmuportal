import React, { createContext } from 'react';

const PdfDataContext = createContext();

const PdfDataProvider = ({ children }) => {
  const preUploadedPdfs = [
    { id: 'ITsem1', department: 'it', semester: '1', title: 'Notes IT Semester 1', url: 'https://example.com/Notes_IT_Sem1.pdf' },
    { id: 'CSsem2', department: 'cs', semester: '2', title: 'Notes CS Semester 2', url: 'https://example.com/Notes_CS_Sem2.pdf' },
    { id: 'BCAsem3', department: 'bca', semester: '3', title: 'Notes BCA Semester 3', url: 'https://example.com/Notes_BCA_Sem3.pdf' },
  ];

  return (
    <PdfDataContext.Provider value={preUploadedPdfs}>
      {children}
    </PdfDataContext.Provider>
  );
};

export { PdfDataContext, PdfDataProvider };
