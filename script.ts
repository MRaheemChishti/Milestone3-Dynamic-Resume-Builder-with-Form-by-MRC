const form = document.getElementById("ResumeForm") as HTMLFormElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
const resumeProfilepicture = document.getElementById("resumeProfilepicture") as HTMLImageElement;
const resumename = document.getElementById("resumename") as HTMLHeadingElement;
const resumeemail = document.getElementById("resumeemail") as HTMLParagraphElement;
const resumephone = document.getElementById("resumephone") as HTMLParagraphElement;
const resumeaddress = document.getElementById("resumeaddress") as HTMLParagraphElement;
const resumeeducation = document.getElementById("resumeeducation") as HTMLParagraphElement;
const resumeWorkexperience = document.getElementById("resumeWorkexperience") as HTMLParagraphElement;
const resumecertification = document.getElementById("resumecertification") as HTMLParagraphElement;
const resumeskills = document.getElementById("resumeskills") as HTMLParagraphElement;

form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const name1 = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const work_experience = (document.getElementById("work_experience") as HTMLTextAreaElement).value;
    const certification = (document.getElementById("certification") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const profilepicture = document.getElementById("profilepicture") as HTMLInputElement;

    const picturefile = profilepicture.files ? profilepicture.files[0] : null;

    let photoBase64 = '';

    if (picturefile) {
        photoBase64 = await fileToBase64(picturefile);
        resumeProfilepicture.src = photoBase64;
    }


    // Show the resume output
    resumeOutput.classList.remove("hidden");

    // Set the resume details
    resumename.textContent = name1;
    resumeemail.textContent = `Email: ${email}`;
    resumephone.textContent = `Phone: ${phone}`;
    resumeaddress.textContent = `Address: ${address}`;
    resumeeducation.textContent = education;
    resumeWorkexperience.textContent = work_experience;
    resumecertification.textContent = certification;
    resumeskills.textContent = skills;

    const container = document.getElementById("container");
    if (container) {
        container.style.display = 'none'; // Hide the container
    }

    // Optionally, you can hide the form if needed
    form.classList.add("hidden");
});

// Function to convert file to base64
function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
