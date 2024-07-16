document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    document.getElementById('contact-form').addEventListener('submit', validateForm);
  });
  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  function loadProjects() {
    const projects = [
      {
        title: 'Project 1',
        description: 'Description of the first project. It involves using technologies like HTML, CSS, and JavaScript.',
      },
      {
        title: 'Project 2',
        description: 'Description of the second project. It involves using technologies like React and Node.js.',
      },
      {
        title: 'Project 3',
        description: 'Description of the third project. It involves using technologies like Python and Django.',
      }
    ];
  
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'bg-white p-6 rounded shadow';
      projectElement.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-gray-700">${project.description}</p>
      `;
      projectsContainer.appendChild(projectElement);
    });
  }
  
  function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    alert('Form submitted successfully');
    document.getElementById('contact-form').reset();
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  