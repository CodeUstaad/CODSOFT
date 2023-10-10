document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', () => {
        const currentSection = [...sections].find(
            (section) => section.getBoundingClientRect().top <= 0
        );

        navLinks.forEach((link) => {
            link.classList.remove('active');
        });

        if (currentSection) {
            const index = [...sections].indexOf(currentSection);
            navLinks[index].classList.add('active');
            sections[index].classList.add('show-animate'); // Use index to target the correct section
        } else {
            sections.forEach((section) => {
                section.classList.remove('show-animate'); // Remove class from all sections
            });
        }

        // Toggle 'sticky' class for the header
        header.classList.toggle('sticky', window.scrollY > 100);
     

        
       
    });

    
});
let footer=document.querySelector('footer');

footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);




