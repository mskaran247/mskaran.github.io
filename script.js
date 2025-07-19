// Sample project data
const projects = [
    {
        title: "Project One",
        description: "A web application built with React and Node.js, featuring real-time data processing.",
        image: "https://via.placeholder.com/300",
        link: "#"
    },
    {
        title: "Project Two",
        description: "A mobile-responsive e-commerce site developed using HTML, CSS, and JavaScript.",
        image: "https://via.placeholder.com/300",
        link: "#"
    },
    {
        title: "Project Three",
        description: "A machine learning model deployed as a web service using Flask and Python.",
        image: "https://via.placeholder.com/300",
        link: "#"
    }
];

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById('project-list');
    if (!projectList) return;

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card bg-white rounded-lg shadow-lg p-6';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-md mb-4">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <a href="${project.link}" class="text-blue-600 font-semibold hover:underline">View Project</a>
        `;
        projectList.appendChild(projectCard);
    });
}

// Contact form submission
function handleContactForm() {
    const submitButton = document.getElementById('submit-contact');
    if (!submitButton) return;

    submitButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Message sent successfully!');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    handleContactForm();
});