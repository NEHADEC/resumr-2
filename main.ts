interface ResumeData {
    name: string;
    email: string;
    education: string;
    experience: string;
    skills: string;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const output = document.getElementById("resume-output") as HTMLDivElement;
  
    form.addEventListener("submit", (event: Event) => {
      event.preventDefault();
      
      // Capture form data
      const formData: ResumeData = {
        name: (document.getElementById("name") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        education: (document.getElementById("education") as HTMLInputElement).value,
        experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
        skills: (document.getElementById("skills") as HTMLInputElement).value,
      };
  
      // Generate resume
      output.innerHTML = generateResume(formData);
    });
  });
  
  function generateResume(data: ResumeData): string {
    return `
      <h3>${data.name}</h3>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Education:</strong> ${data.education}</p>
      <p><strong>Experience:</strong> ${data.experience}</p>
      <p><strong>Skills:</strong> ${data.skills}</p>
    `;
  }
  