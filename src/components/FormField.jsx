export default function FormField({ type, label, inputType, idName }) {
  return (
    <div className="formField">
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea name={idName} id={idName} required />
      ) : (
        <input type={inputType} name={idName} id={idName} required />
      )}
    </div>
  );
}
