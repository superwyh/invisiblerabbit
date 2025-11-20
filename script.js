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

            // Sky Particles Effect
            const waitingSectionElement = document.querySelector('#waiting-section');
            if (waitingSectionElement) {
                // Create particles container
                const particlesContainer = document.createElement('div');
                particlesContainer.id = 'sky-particles';
                waitingSectionElement.appendChild(particlesContainer);

                const particles = [];
                const particleCount = 30;

                class Particle {
                    constructor() {
                        this.reset();
                        this.element = document.createElement('div');
                        this.element.style.position = 'absolute';
                        this.element.style.width = `${this.size}px`;
                        this.element.style.height = `${this.size}px`;
                        this.element.style.borderRadius = '50%';
                        this.element.style.background = `rgba(255, 255, 255, ${this.opacity})`;
                        this.element.style.pointerEvents = 'none';
                        this.element.style.filter = 'blur(1px)';
                        particlesContainer.appendChild(this.element);
                    }

                    reset() {
                        this.x = Math.random() * 100;
                        this.y = Math.random() * 100;
                        this.size = Math.random() * 3 + 1;
                        this.speedX = Math.random() * 0.5 + 0.2;
                        this.speedY = Math.random() * 0.3 - 0.15;
                        this.opacity = Math.random() * 0.3 + 0.2;
                    }

                    update() {
                        this.x += this.speedX;
                        this.y += this.speedY;

                        if (this.x > 100) {
                            this.x = -5;
                            this.y = Math.random() * 100;
                        }

                        if (this.y < -5 || this.y > 105) {
                            this.y = Math.random() * 100;
                        }

                        this.element.style.left = `${this.x}%`;
                        this.element.style.top = `${this.y}%`;
                    }
                }

                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle());
                }

                function animateParticles() {
                    particles.forEach(particle => particle.update());
                    requestAnimationFrame(animateParticles);
                }

                animateParticles();
            }

            // Glitch Effect
            const glitchImages = document.querySelectorAll('.glitch-img');

            function triggerGlitch() {
                if (glitchImages.length === 0) return;

                // Randomly pick one image
                const randomIndex = Math.floor(Math.random() * glitchImages.length);
                const img = glitchImages[randomIndex];

                // Show it
                img.style.opacity = (Math.random() * 0.5 + 0.5).toString(); // Random opacity 0.5-1

                // Hide it after a short random duration
                const duration = Math.random() * 200 + 50; // 50-250ms
                setTimeout(() => {
                    img.style.opacity = '0';
                }, duration);

                // Schedule next glitch
                const nextDelay = Math.random() * 3000 + 500; // 0.5-3.5s delay
                setTimeout(triggerGlitch, nextDelay);
            }

            triggerGlitch();
        });

        return {};
    }
}).mount('#app');
