// script.js
// Mobile Menu
function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("active");
}

// Dark Mode
function toggleTheme(){
    document.body.classList.toggle("dark-mode");
}

// Portfolio Filter
function filterProjects(category){
    const projects = document.querySelectorAll(".project");
    projects.forEach(project=>{
        if(category === "all"){
            project.style.display = "block";
        } else {
            project.style.display =
                project.classList.contains(category) ? "block" : "none";
        }
    });
}

// Contact Form
const form = document.getElementById("contactForm");
if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you! I will get back to you soon.");
        form.reset();
    });
}