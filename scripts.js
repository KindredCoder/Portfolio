document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');

    const toggleSkillsButton = document.getElementById('toggleSkillsButton');
    const skillsContent = document.getElementById('skillsContent');

    toggleSkillsButton.addEventListener('click', function() {
        if (skillsContent.style.display === 'none') {
            skillsContent.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        } else {
            skillsContent.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });

    const toggleButtonProjects = document.getElementById('toggleProjectsButton');
    const projectsContent = document.getElementById('projectsContent');

    toggleButtonProjects.addEventListener('click', function() {
        if (projectsContent.style.display === 'none') {
            projectsContent.style.display = 'block';
            toggleButtonProjects.textContent = 'Hide Projects';
        } else {
            projectsContent.style.display = 'none';
            toggleButtonProjects.textContent = 'Show Projects';
        }
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!'); //Replace with actuall form handling later
    });
});