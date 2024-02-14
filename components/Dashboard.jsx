const Dashboard = ({ currencies }) => {
  return (
    <div className="w-[20%] h-64 overflow-y-auto rounded-md">
      <table className="table table-compact">
        <thead>
          <tr className="sticky top-0">
            <th>Code</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(currencies).map(([code, name]) => (
            <tr key={code}>
              <td>{code}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Dashboard;
