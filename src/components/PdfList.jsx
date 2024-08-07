import React, { useContext } from 'react';
import { PdfDataContext } from '../contexts/PdfDataContext';

const PdfList = ({ department, semester }) => {
  const preUploadedPdfs = useContext(PdfDataContext);

  const filteredPdfs = preUploadedPdfs.filter(pdf =>
    (department === '' || pdf.department === department) &&
    (semester === '' || pdf.semester === semester)
  );

  return (
    <div className="flex flex-row gap-4  sm:flex-nowrap flex-wrap">
      {filteredPdfs.map((pdf) => (
        <a
          key={pdf.id}
          href={pdf.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-colors w-full sm:w-1/2 md:w-1/3"
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
