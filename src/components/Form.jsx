import { useState } from "react";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import Preview from "./Preview";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const formObject = Object.fromEntries(data.entries());
    setFormData(formObject);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return isEditing ? (
    <form onSubmit={handleSubmit}>
      <AboutSection formData={formData} />
      <EducationSection formData={formData} />
      <ExperienceSection formData={formData} />
      <button type="submit">Generate CV</button>
    </form>
  ) : (
    <Preview formData={formData} onEdit={handleEdit} />
  );
}
