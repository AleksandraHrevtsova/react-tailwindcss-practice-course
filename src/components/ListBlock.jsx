export const ListBlock = ({ data }) => {
  return (
    <ul className="border rounded shadow p-1.5">
      {data.map((item, idx) => {
        return (
          <li key={idx} className="text-center">{item}</li>
        );
      })}
    </ul>
  );
}; 