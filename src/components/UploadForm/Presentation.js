import React from "react";
import ProgessBar from "../ProgreesBar/Presentation";

function Presentation(props) {
  const { setFile, changeHandler, data } = props;

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {data.error && <div className="error">{data.error}</div>}
        {data.file && <div>{data.file.name}</div>}
        {data.file && <ProgessBar file={data.file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default Presentation;
