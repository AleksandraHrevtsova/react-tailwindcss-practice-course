import { Card } from '../components/Card';
import { styleProperties } from '../mocks/styleProperties';

export const Home = () => {
  return (
    <div className='container mx-auto'>
      <h1 className="font-mainTitle font-extralight text-5xl text-center">Hello Vite, React & Tailwind CSS</h1>
      <ul className="font-display grid grid-flow-row-dense grid-cols-1 gap-1.5">
        {Object.keys(styleProperties).map((type, idx) => {
          return (
            <Card key={idx} title={styleProperties[type].title} data={styleProperties[type].properties}/>
          );
        })}
      </ul>
    </div>
  );
};