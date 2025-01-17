import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/home';
import Modal from './components/Modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleLinkClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div className='bg-gradient-to-b from-zinc-800 to-black'>
      <Header onLinkClick={handleLinkClick} />
      <Home />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h1>{modalContent}</h1>
        <p>This is the content for {modalContent}.</p>
      </Modal>
    </div>
  );
};

export default App;
