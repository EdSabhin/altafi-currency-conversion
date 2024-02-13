const Dashboard = ({ currencies }) => {
  return (
    <div className="w-[25%] overflow-x-auto">
      <table className="table table-compact">
        <thead>
          <tr>
            <th></th>
            <th>Code</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(currencies).map(([code, name], index) => (
            <tr key={code}>
              <th>{index + 1}</th>
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
