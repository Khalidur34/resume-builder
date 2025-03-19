import FormField from "./FormField";

export default function EducationSection({ formData }) {
  return (
    <div>
      <label htmlFor="institution">Institution Name:</label>
      <input
        type="text"
        id="institution"
        name="institution"
        defaultValue={formData.institution || ""}
        required
      />

      <label htmlFor="degree">Degree/Major:</label>
      <input
        type="text"
        id="degree"
        name="degree"
        defaultValue={formData.degree || ""}
        required
      />

      <label htmlFor="gradDate">Graduation Date:</label>
      <input
        type="date"
        id="gradDate"
        name="gradDate"
        defaultValue={formData.gradDate || ""}
        required
      />
    </div>
  );
}
