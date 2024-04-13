const Dashboard = ({ currencies }) => {
  return (
    <div className="w-[20%] h-64 overflow-y-auto rounded-t-2xl rounded-b-md">
      <table className="w-full table table-compact">
        <thead>
          <tr className="sticky top-0">
            <th className="text-[0.9rem] pt-3">Code</th>
            <th className="text-[0.9rem] pt-3">Name</th>
          </tr>
        </thead>
        <tbody className="">
          {Object.entries(currencies).map(([code, name]) => (
            <tr key={code}>
              <td className="py-3">{code}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
