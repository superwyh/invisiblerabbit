const { createApp, onMounted, ref } = Vue;

createApp({
    setup() {
        onMounted(() => {
            const root = document.documentElement;
            const body = document.body;
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-outline');
            const roomSection = document.querySelector('#room-section');
            const waitingSection = document.querySelector('#waiting-section');

            // Mouse Tracking
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                root.style.setProperty('--cursor-x', `${posX}px`);
                root.style.setProperty('--cursor-y', `${posY}px`);

                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
                cursorOutline.style.left = `${posX}px`;
                cursorOutline.style.top = `${posY}px`;
            });

            // Scroll Logic
            const handleScrollEffects = () => {
                const windowHeight = window.innerHeight;

                let opacity = 0;

                if (roomSection) {
                    const roomRect = roomSection.getBoundingClientRect();

                    if (roomRect.top < windowHeight) {
                        opacity = 1 - (roomRect.top / windowHeight);
                        opacity = Math.max(0, Math.min(1, opacity));
                    }
                }

                // Theme Switch for Waiting Section
                if (waitingSection) {
                    const rect = waitingSection.getBoundingClientRect();
                    if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
                        body.classList.add('theme-light');
                        opacity = 0;
                    } else {
                        body.classList.remove('theme-light');
                    }
                }

                root.style.setProperty('--spotlight-opacity', opacity);
            };

            window.addEventListener('scroll', handleScrollEffects);
            handleScrollEffects();

            // Intersection Observer for Fade In Animations
            const observerOptions = {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe all fade-in-scroll elements
            const fadeElements = document.querySelectorAll('.fade-in-scroll');
            fadeElements.forEach(el => observer.observe(el));
        });

        return {};
    }
}).mount('#app');
