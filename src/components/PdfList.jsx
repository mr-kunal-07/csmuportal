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


// import React, { useContext, useState } from 'react';
// import { PdfDataContext } from '../contexts/PdfDataContext';

// const PdfList = ({ department, semester }) => {
//   const preUploadedPdfs = useContext(PdfDataContext);
//   const [selectedPdf, setSelectedPdf] = useState(null);

//   const filteredPdfs = preUploadedPdfs.filter(pdf =>
//     (department === '' || pdf.department === department) &&
//     (semester === '' || pdf.semester === semester)
//   );

//   const handlePdfClick = (pdf) => {
//     setSelectedPdf(pdf);
//   };

//   return (
//     <div>
//       {selectedPdf ? (
//         <div className="pdf-viewer">
//           <button
//             onClick={() => setSelectedPdf(null)}
//             className="mb-4 p-2 bg-blue-600 text-white rounded"
//           >
//             Back to list
//           </button>
//           <embed
//             src={selectedPdf.url}
//             type="application/pdf"
//             width="100%"
//             height="800"
//             className="border border-gray-300"
//           />
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {filteredPdfs.map((pdf) => (
//             <div
//               key={pdf.id}
//               onClick={() => handlePdfClick(pdf)}
//               className="cursor-pointer block bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
//             >
//               <div className="flex flex-col h-full justify-between">
//                 <div>
//                   <h2 className="text-xl font-semibold mb-2">{pdf.title}</h2>
//                   <p className="text-gray-400">Click to view</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PdfList;

