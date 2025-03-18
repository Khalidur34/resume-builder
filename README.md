# Resume Builder WebApp Plan

## Features
- Input personal details, education, experience
- Preview
- Edit

## Components
- Header
- Footer
- Form
- Section
- FormField
- Button
- Preview

## Form Section

### About
- Name
- Email
- Phone
- Summary
### Education
- Institution Name
- Degree/Course
- Graduation Date (Date Picker)
### Experience
- Company Name
- Position
- Description
- Start Date
- End Date

## UX Flow

```mermaid
flowchart TD
    A[Homepage: Display Form] --> B[User Fills Form]
    B --> C[Submit Button Clicked]
    C --> D[Show Resume Preview]
    D --> E{Choose Action}
    E -->|Edit| F[Return to Form]
    E -->|Download| G[Download PDF]
    F --> C
```
