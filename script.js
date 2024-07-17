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
        title: 'Resume Screening App',
        description: 'Resume Screening App With Python and Machine Learning Resume Screening App A Streamlit-based web application for screening resumes.This app allows users to upload a resume, which is then cleaned and analyzed to predict the job category based on pre-trained models.',
        link: 'https://github.com/DhivijaMacharla/NLP'

      },
      {
        title: 'SMS Spam Classifier',
        description: 'SMS Spam Classifier.A spam classifier is a machine learning model that categorizes messages or emails as spam or not spam based on their content. It involves using Machine Learning Libraries and Frameworks.',
        link: 'https://github.com/DhivijaMacharla/SMS_SPAM'
      },
      {
        title: 'TIC-TAC-TOE',
        description: 'TIC-TAC-TOE. A simple implementation of the classic Tic-Tac-Toe game using Python.',
        link: 'https://github.com/DhivijaMacharla/TIC-TAC-TOE'
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
  
