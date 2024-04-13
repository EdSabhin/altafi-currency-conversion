const Dashboard = ({ currencies }) => {
  return (
    <div className="w-[20%] h-64 overflow-y-auto">
      <table className="w-full table table-compact">
        <thead>
          <tr className="sticky top-0">
            <th className="text-[0.9rem]">Code</th>
            <th className="text-[0.9rem]">Name</th>
          </tr>
        </thead>
        <tbody className="">
          {Object.entries(currencies).map(([code, name]) => (
            <tr key={code}>
              <td>{code}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
