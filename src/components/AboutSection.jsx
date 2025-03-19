import FormField from "./FormField";

export default function AboutSection({ formData }) {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={formData.name || ""}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        defaultValue={formData.email || ""}
        required
      />

      <label htmlFor="number">Phone Number:</label>
      <input
        type="tel"
        id="number"
        name="number"
        defaultValue={formData.number || ""}
        required
      />

      <label htmlFor="summary">Summary:</label>
      <textarea
        id="summary"
        name="summary"
        defaultValue={formData.summary || ""}
        required
      />
    </div>
  );
}
