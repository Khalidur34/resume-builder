import FormField from "./FormField";

export default function ExperienceSection({ formData }) {
  return (
    <div>
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        defaultValue={formData.companyName || ""}
        required
      />

      <label htmlFor="position">Position:</label>
      <input
        type="text"
        id="position"
        name="position"
        defaultValue={formData.position || ""}
        required
      />

      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        defaultValue={formData.startDate || ""}
        required
      />

      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        defaultValue={formData.endDate || ""}
        required
      />
    </div>
  );
}
