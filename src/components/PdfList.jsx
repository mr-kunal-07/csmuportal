import React, { useContext } from 'react';
import { PdfDataContext } from '../contexts/PdfDataContext';

const PdfList = ({ department, semester }) => {
  const preUploadedPdfs = useContext(PdfDataContext);

  const filteredPdfs = preUploadedPdfs.filter(pdf =>
    (department === '' || pdf.department === department) &&
    (semester === '' || pdf.semester === semester)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredPdfs.map((pdf) => (
        <a
          key={pdf.id}
          href={pdf.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">{pdf.title}</h2>
              <p className="text-gray-400">Click to download</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PdfList;
