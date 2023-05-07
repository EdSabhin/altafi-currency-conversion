import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full form-control">
      <label className="label">
        <span className="label-text">What is your name?</span>
        <span className="label-text-alt">Top Right label</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <label className="label">
        <span className="label-text-alt">Bottom Left label</span>
        <span className="label-text-alt">Bottom Right label</span>
      </label>
    </div>
  );
};

export default SearchBar;
