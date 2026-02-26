import { ListBlock } from './ListBlock';

export const Card = ({ title, data }) => {
  return (
    <li className="border-2 rounded p-1.5">
      <h2 className="text-center mb-1.5">{title}</h2>
      <div className="grid grid-flow-row-dense grid-cols-3 gap-1.5">
        {Object.keys(data).map((elem, idx) => {
          return (
            <ListBlock key={idx} data={data[elem]}/>
          );
        })}
      </div>
    </li>
  );
}; 