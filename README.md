<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width", initial-scale="1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://meritpages.com/kgibs">Education</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="about">
            <img src="project2.jpg" alt="Kyle Gibson" class="profile-picture">
            <h2>About Me</h2>
            <p>Currently Attending SNHU to persue a degree in Computer Science with an emphasis on Software Engineering.</p>
            <p>Enjoys spending time with </p>
            <h3>Skills and Languages I'm currently working on.</h3>
            <button id="toggleSkillsButton">Show Skills</button>
                <ul id="skillsContent" style="display: none;">
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>HTML & CSS</li>
                    <li>React</li>
                    <li>C++</li>
                    <li>JAVA</li>
                </ul>  
        </section>
        <section id="projects">
            <h2>Projects</h2>
            <button id="toggleProjectsButton">Show Projects</button>
            <div id="projectsContent" style="display: none;">
                <div class="project">
                    <h3>Project 1</h3>
                    <img src="project1.jpg" alt="Project 1 screenshot">
                    <p>Details about my projects will go here.</p>
                    <a href="https://github.com/KindredCoder/Portfolio" target="_blank">View on GitHub</a>
                </div>
                <div class="project">
                    <h3>Project 2</h3>
                    <img src="project2.jpg" alt="Project 2 screenshot">
                    <p>A breif description of Project 2.</p>
                    <a href="https://github.com/KindredCoder/Portfolio" target="_blank">View on GitHub</a>
                </div>
                <!--- Add more projects here, later -->
            </div>
        </section>
        <section id="contact">
            <h2>Contact Me</h2>
            
            <form id="contactForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message:</label>
                <textarea name="message" id="message" name="message"></textarea>

                <button type="submit">Send</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Portfolio</p>
    </footer>
    <script src="scripts.js"></script>
</body>
</html>