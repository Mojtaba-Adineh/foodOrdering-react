/* eslint-disable react/prop-types */
import React from "react";

const FilterButton = ({setCategory, category , imgUrl , title}) => {
  return (
    <button
      onClick={() => setCategory(title)}
      className={category === title ? "activeFilter-btn d-flex align-items-center gap-2" : "d-flex align-items-center gap-2"}
    >
      {imgUrl ? <img src={imgUrl} alt="" /> : null}
      {title}
    </button>
  );
};

export default FilterButton;
