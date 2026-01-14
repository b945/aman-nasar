// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
        links.forEach(l => l.style.animation = '');
    });
});

// Smooth Scrolling for Anchor Links (Optional as CSS scroll-behavior: smooth handles most)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate header offset
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 18, 18, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(18, 18, 18, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

/* -----------------------------------------------------------------------------
   Project Modal Logic
----------------------------------------------------------------------------- */
const projectData = {
    1: {
        title: 'AI Smart Billboard System',
        img: 'smart_billboard.png',
        desc: 'A cutting-edge solution utilizing Computer Vision to analyze audience demographics in real-time. The system detects age, gender, and engagement levels to dynamically serve targeted advertisements, maximizing ROI for advertisers.',
        tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'React Dashboard']
    },
    2: {
        title: 'Kerala Diet Planner',
        img: 'kerala_diet_planner.png',
        desc: 'A comprehensive nutrition and meal planning tool tailored for Kerala cuisine. It calculates BMI, BMR, and daily calorie needs, suggesting authentic local recipes (like Sadya, Avial) that fit health goals.',
        tech: ['HTML5', 'CSS3', 'Vanilla JS', 'Chart.js', 'Nutrition API']
    },
    3: {
        title: 'College Management System',
        img: 'college_cms.png',
        desc: 'A robust web-based ERP for educational institutions. Features 5-tier role-based access (Admin, HOD, Faculty, Student), attendance tracking, exam management, and an integrated AI chatbot for student queries.',
        tech: ['PHP', 'MySQL', 'Bootstrap 5', 'AJAX', 'ChartJS']
    },
    4: {
        title: 'Sleep Tracker App',
        img: 'sleep_tracker.png',
        desc: 'A cross-platform mobile application built with Flutter to help users improve their sleep hygiene. It tracks sleep patterns using sensor data, provides detailed analytics graphs, and allows users to set smart alarms.',
        tech: ['Flutter', 'Dart', 'SQLite', 'Firebase', 'Local Notifications']
    }
};

const modal = document.getElementById('project-modal');
const modalImg = modal.querySelector('.modal-img');
const modalTitle = modal.querySelector('.modal-title');
const modalDesc = modal.querySelector('.modal-desc');
const techList = modal.querySelector('.tech-list');
const closeModal = document.querySelector('.close-modal');
const viewBtns = document.querySelectorAll('.view-project-btn');

viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-id');
        const data = projectData[id];

        if (data) {
            modalImg.src = data.img;
            modalTitle.textContent = data.title;
            modalDesc.textContent = data.desc;

            // Clear and populate tech list
            techList.innerHTML = '';
            data.tech.forEach(tech => {
                const li = document.createElement('li');
                li.textContent = tech;
                techList.appendChild(li);
            });

            modal.style.display = 'flex';
            // Slight delay to allow display flex to apply before opacity transition
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Match transition duration
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
});

