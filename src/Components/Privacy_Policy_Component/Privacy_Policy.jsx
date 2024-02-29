import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button } from '@chakra-ui/react';
import Privacy_Policy_pdf from '../../Photos/Footer/Privacy_Policy.pdf';

const MyPdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

 

  return (
    <div>
      <Document file={Privacy_Policy_pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={"1500"} />
      </Document>
    </div>
  );
};

export default MyPdfViewer;
