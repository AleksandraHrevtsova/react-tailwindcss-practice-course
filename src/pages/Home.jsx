import { useState } from 'react';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import { styleProperties, descriptions } from '../mocks/styleProperties';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({title: 'Modal Window', content: 'Test Modal Window'})

  return (
    <div className='container mx-auto'>
      {isModalOpen && (
        <Modal data={modalData} closeModal={() => setIsModalOpen(false)}>
          <div className='bg-white/80 text-black rounded w-1/2 p-5'>
            <h1 className='text-xl font-semibold'>Classes for <span className='font-black'>{modalData.title}</span>:</h1>
              {descriptions[modalData.title] && descriptions[modalData.title]?.map((el, idx) => {
                return (
                  <p className='text-regal-blue' key={idx}>{el}</p>
                );
              })}
          </div>
        </Modal>
      )}
      <h1 className="font-mainTitle font-extralight text-5xl text-center">Hello Vite, React & Tailwind CSS</h1>
      <ul className="font-display grid grid-flow-row-dense grid-cols-1 gap-1.5">
        {Object.keys(styleProperties).map((type, idx) => {
          return (
            <Card 
              key={idx} 
              title={styleProperties[type].title} 
              data={styleProperties[type].properties}
              openModal={(clickedItem) => {
                setModalData({
                  title: clickedItem,
                  content: ''
                })
                setIsModalOpen(true);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};