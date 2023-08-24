import { createPortal } from 'react-dom';
import { useState } from 'react';
import ContenedorModal from './ContModal';

export default function Modal(){
    const [modalState , setModal] =useState(false);
    return (
      <>
      <button onClick={() =>setModal(true)}>Click para mostrar modal</button>
      {modalState && createPortal(
        <ContenedorModal onClose={()=> setModal(false)}/>,
        document.body //document.body muestra el modal en el cuepo de html 
      )}
      </>
    )
  }