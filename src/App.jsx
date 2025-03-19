import "./App.css";
import FormField from "./components/FormField";

function App() {
  return (
    <>
      <FormField label={"Name"} inputType={"text"}></FormField>
      <FormField
        type={"textarea"}
        label={"Description"}
        inputType={""}
      ></FormField>
      <FormField inputType={"Submit"}></FormField>
    </>
  );
}

export default App;
