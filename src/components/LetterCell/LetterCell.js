// import './LetterCell.css';
// import React from 'react';

// export default function LetterCell({ letter, isActiveRow, isActiveColumn, onLetterEntry, enteredLetter }) {
//     const isActive = isActiveRow && isActiveColumn;

//     let classList = "letter-cell d-flex center-child-xy ";
//     classList += isActive ? "active-cell" : "";

//     return (<div className={ classList }> { isActive ?  :  enteredLetter  } </div>);
// }

// // export default React.memo(LetterCell, (a, b) => { 
// //     return !(b.isActiveColumn && b.isActiveRow);
// // }); 