import { Children } from "react";

export const Modal = ({ data, closeModal, children }) => {
  const { title, content } = data;
  return (
    <div 
      id='modal-back'
      className='fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center'
      onClick={(e) => e.target.id === 'modal-back' && closeModal()}
    >
      {children}
    </div>
  );
};