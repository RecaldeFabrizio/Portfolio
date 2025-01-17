import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const [isDragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() =>{
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen){
      document.addEventListener('keydown', handleKeyDown);
    }else{
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () =>{
      document.removeEventListener('keydown', handleKeyDown);
    };
  },[isOpen, onClose]);

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffsetX(e.clientX - e.target.getBoundingClientRect().left);
    setOffsetY(e.clientY - e.target.getBoundingClientRect().top);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const modal = document.getElementById('modal');
      modal.style.left = `${e.clientX - offsetX}px`;
      modal.style.top = `${e.clientY - offsetY}px`;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div
        id="modal"
        style={styles.modal}
      >
        <div style={styles.header} onMouseDown={handleMouseDown}>
          <span style={styles.closeButton} onClick={onClose}>&times;</span>
        </div>
        <div style={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  modal: {
    position: 'fixed',
    backgroundColor: 'white',
    width: '300px',
    height: '300px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: 'darkgreen',
    padding: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'move',
  },
  closeButton: {
    cursor: 'pointer',
    color: 'white',
    fontSize: '1.5rem',
  },
  content: {
    padding: '20px',
    color: 'black',
  },
};

export default Modal;
