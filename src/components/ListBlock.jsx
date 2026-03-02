export const ListBlock = (props) => {
  const { data, openModal } = props;
  return (
    <ul className="border rounded shadow p-1.5">
      {data.map((item, idx) => {
        return (
          <li 
            key={idx} 
            className="text-center cursor-pointer"
            onClick={() => openModal(item)}
          >{item}</li>
        );
      })}
    </ul>
  );
}; 