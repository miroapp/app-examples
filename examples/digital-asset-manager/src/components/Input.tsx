import { useState } from "react";
import { Link } from "react-router-dom";

const Input = ({
  handleInputChange,
  backButton,
}: {
  handleInputChange: (e: string) => void;
  backButton?: boolean;
}) => {
  const [internalInputValue, setInternalInputValue] = useState("");

  const handleClearInput = () => {
    setInternalInputValue("");
    handleInputChange("");
  };

  return (
    <div id={"input-container"}>
      {backButton && (
        <Link id={"input-back-button"} to={"/"}>
          <div className="icon m2 icon-arrow-left"></div>
        </Link>
      )}
      <div className="form-group">
        <input
          className="input input-small"
          type="text"
          placeholder="Search assets"
          onChange={(e) => {
            handleInputChange(e.target.value);
            setInternalInputValue(e.target.value);
          }}
          value={internalInputValue}
        />
        {internalInputValue !== "" && <X onClick={handleClearInput} />}
      </div>
    </div>
  );
};

const X = ({ onClick }: { onClick: () => void }) => {
  return (
    <div id={"input-x-container"} onClick={onClick}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.1382 1.8047C11.3985 1.54435 11.3985 1.12224 11.1382 0.861888C10.8778 0.601539 10.4557 0.601539 10.1953 0.861888L6.00008 5.05715L1.80482 0.861888C1.54447 0.601539 1.12236 0.601539 0.862011 0.861888C0.601661 1.12224 0.601661 1.54435 0.862011 1.8047L5.05727 5.99996L0.862011 10.1952C0.601661 10.4556 0.601661 10.8777 0.86201 11.138C1.12236 11.3984 1.54447 11.3984 1.80482 11.138L6.00008 6.94277L10.1953 11.138C10.4557 11.3984 10.8778 11.3984 11.1382 11.138C11.3985 10.8777 11.3985 10.4556 11.1382 10.1952L6.94289 5.99996L11.1382 1.8047Z"
          fill="#5F5C80"
        />
      </svg>
    </div>
  );
};

export default Input;
