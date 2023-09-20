const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
