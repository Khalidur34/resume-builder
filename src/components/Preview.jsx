export default function Preview({ formData, onEdit }) {
  return (
    <div>
      <h1>CV Preview</h1>
      <h2>About</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Number: {formData.number}</p>
      <p>Summary: {formData.summary}</p>

      <h2>Education</h2>
      <p>Institution Name: {formData.name}</p>
      <p>Degree/Major: {formData.degree}</p>
      <p>Graduation Date: {formData.gradDate}</p>

      <h2>Experience</h2>
      <p>Company Name: {formData.companyName}</p>
      <p>Position: {formData.position}</p>
      <p>Start Date: {formData.startDate}</p>
      <p>End Date: {formData.endDate}</p>

      <button onClick={onEdit}>Edit</button>
    </div>
  );
}
