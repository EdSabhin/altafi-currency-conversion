const Dashboard = ({ currencies }) => {
  return (
    <div className="w-[19.3%] h-64 overflow-y-auto rounded-bl-md !rounded-br-none">
      <h2 className="flex justify-center py-2 z-10 rounded-tl-md bg-[#021431] text-indigo-to-teal">
        Currency Code Reference
      </h2>
      <table className="w-full table table-compact !rounded-br-none">
        <thead>
          <tr className="sticky top-0">
            <th className="text-[0.9rem] pt-3 !rounded-none">Code</th>
            <th className="text-[0.9rem] pt-3 !rounded-none">Name</th>
          </tr>
        </thead>
        <tbody className="!rounded-br-none">
          {Object.entries(currencies).map(([code, name]) => (
            <tr key={code}>
              <td className="py-3 !rounded-br-none">{code}</td>
              <td className="!rounded-br-none">{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
