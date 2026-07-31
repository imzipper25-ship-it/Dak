// JavaScript for Obra Transparente Portuguese Construction Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky & Glass Navbar effect on scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Active nav link highlighting on scroll
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Lead Modal Handling
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalClose = document.getElementById('modalClose');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const leadForm = document.getElementById('leadForm');
    const formSuccessMsg = document.getElementById('formSuccessMsg');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');

    const openModal = () => {
        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalBackdrop.classList.remove('active');
        document.body.style.overflow = '';
        // Reset form state after transition
        setTimeout(() => {
            if (leadForm && formSuccessMsg) {
                leadForm.style.display = 'flex';
                formSuccessMsg.classList.remove('active');
                leadForm.reset();
            }
        }, 300);
    };

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });
    }

    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', closeModal);
    }

    // Form Submission Simulation
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            leadForm.style.display = 'none';
            if (formSuccessMsg) {
                formSuccessMsg.classList.add('active');
            }
        });
    }

    // 4. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isFlex = navMenu.style.display === 'flex';
            if (isFlex) {
                navMenu.style.display = '';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px';
                navMenu.style.left = '24px';
                navMenu.style.right = '24px';
                navMenu.style.background = '#ffffff';
                navMenu.style.padding = '24px';
                navMenu.style.borderRadius = '20px';
                navMenu.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            }
        });
    }
});
