document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); //used to scroll to top on load or reload
    
    console.log('Document is ready!');



    // Scroll To the Top Button
    const scrollToTop = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // Show button after scrolling down 100px
            scrollToTop.style.display = 'block';
        } else {
            scrollToTop.style.display = 'none';
        }
    });

    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

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

    // Show Projects Button
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

    //dark mode//
    document.addEventListener('DOMContentLoaded', function() {
        const darkModeToggle = document.getElementById('darkModeToggle');

        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    });
});
