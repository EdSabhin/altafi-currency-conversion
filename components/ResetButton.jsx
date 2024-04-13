const ResetButton = ({ resetDates }) => {
  return (
    <div>
      <button
        onClick={resetDates}
        className="w-full btn rounded-t-none hover:text-teal-300
        active:text-white active:bg-blue-200 active:scale-105 duration-800 transition-all"
      >
        Reset Time Period
      </button>
    </div>
  );
};

export default ResetButton;
