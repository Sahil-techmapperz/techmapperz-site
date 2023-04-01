import React from 'react';
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    const months = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ];
  
    const month = months[monthIndex];
  
    return `${day}-${month}-${year}`;
  }

function FormattedDateComponent({ dateString }) {
  const formattedDate = formatDate(dateString);

  return formattedDate;
}

export default FormattedDateComponent;
