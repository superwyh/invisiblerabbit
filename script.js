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

            // If cursor elements don't exist, skip cursor functionality
            if (!cursorDot || !cursorOutline) {
                console.warn('Cursor elements not found, cursor functionality disabled');
            }

            // Mouse Tracking & Cursor Logic
            let lastMouseX = window.innerWidth / 2;
            let lastMouseY = window.innerHeight / 2;

            const updateCursorState = (posX, posY) => {
                // Skip if cursor elements don't exist
                if (!cursorDot || !cursorOutline) return;

                const blogSection = document.querySelector('#blog-section');

                // Check for Blog Section using coordinates
                let isOverBlog = false;
                if (blogSection) {
                    const rect = blogSection.getBoundingClientRect();
                    if (posY >= rect.top && posY <= rect.bottom) {
                        isOverBlog = true;
                    }
                }

                if (isOverBlog) {
                    cursorDot.classList.add('on-blog');
                    cursorOutline.classList.add('on-blog');
                } else {
                    cursorDot.classList.remove('on-blog');
                    cursorOutline.classList.remove('on-blog');
                }

                // Check for Interactive Elements
                const elementUnderCursor = document.elementFromPoint(posX, posY);
                if (elementUnderCursor && elementUnderCursor.closest('a, button, .blog-card, .project-link, .close-btn')) {
                    cursorOutline.classList.add('cursor-active');
                } else {
                    cursorOutline.classList.remove('cursor-active');
                }
            };

            window.addEventListener('mousemove', (e) => {
                lastMouseX = e.clientX;
                lastMouseY = e.clientY;

                root.style.setProperty('--cursor-x', `${lastMouseX}px`);
                root.style.setProperty('--cursor-y', `${lastMouseY}px`);

                // Only update cursor position if elements exist
                if (cursorDot && cursorOutline) {
                    cursorDot.style.left = `${lastMouseX}px`;
                    cursorDot.style.top = `${lastMouseY}px`;
                    cursorOutline.style.left = `${lastMouseX}px`;
                    cursorOutline.style.top = `${lastMouseY}px`;
                }

                updateCursorState(lastMouseX, lastMouseY);
            });

            window.addEventListener('scroll', () => {
                updateCursorState(lastMouseX, lastMouseY);
            });

            // Scroll Effects (Spotlight & Theme)
            const handleScrollEffects = () => {
                const windowHeight = window.innerHeight;
                const blogSection = document.querySelector('#blog-section');

                let opacity = 0;

                // Check if we're in blog section (for spotlight)
                if (blogSection) {
                    const blogRect = blogSection.getBoundingClientRect();
                    if (blogRect.top < windowHeight * 0.5 && blogRect.bottom > windowHeight * 0.5) {
                        // In blog section, disable spotlight
                        opacity = 0;
                        root.style.setProperty('--spotlight-opacity', opacity);
                        return;
                    }
                }

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

        });

        // Blog functionality
        const posts = ref([]);
        const currentPost = ref(null);

        // Get base path for GitHub Pages
        const getBasePath = () => {
            const path = window.location.pathname;
            // If we're at root (/), no base path needed
            if (path === '/' || path === '/index.html') {
                return '';
            }
            // If deployed to GitHub Pages with repo name, extract base path
            // e.g., /invisiblerabbit/ -> /invisiblerabbit
            // e.g., /invisiblerabbit/index.html -> /invisiblerabbit
            const match = path.match(/^\/([^\/]+)/);
            if (match && match[1] !== 'index.html') {
                return '/' + match[1];
            }
            return '';
        };

        const basePath = getBasePath();
        
        // Helper to build path
        const buildPath = (path) => {
            if (basePath) {
                return `${basePath}${path.startsWith('/') ? path : '/' + path}`;
            }
            return path;
        };

        // Load posts
        fetch(buildPath('posts.json') + '?t=' + new Date().getTime())
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                posts.value = data;
            })
            .catch(error => {
                console.error('Error loading posts:', error);
                // Try fallback path without base
                fetch('posts.json?t=' + new Date().getTime())
                    .then(response => response.json())
                    .then(data => {
                        posts.value = data;
                    })
                    .catch(err => console.error('Fallback also failed:', err));
            });

        // Helper function to process markdown content
        const processMarkdownContent = (content) => {
            // Parse markdown
            let htmlContent = marked.parse(content);

            // Fix relative image paths
            // Images in blog_image/ or images/ are in root, others might be relative to posts/
            // Ignores absolute paths (http://, https://, /)
            htmlContent = htmlContent.replace(/src="([^"]+)"/g, (match, src) => {
                if (src.startsWith('http') || src.startsWith('/') || src.startsWith('data:')) {
                    return match;
                }
                // If image is in blog_image/ or images/, it's in root directory
                if (src.startsWith('blog_image/') || src.startsWith('images/')) {
                    return `src="${buildPath(src)}"`;
                }
                // Otherwise, assume it's relative to posts/
                const imagePath = buildPath(`posts/${src}`);
                return `src="${imagePath}"`;
            });

            // Fix relative links in markdown
            htmlContent = htmlContent.replace(/href="([^"]+)"/g, (match, href) => {
                if (href.startsWith('http') || href.startsWith('/') || href.startsWith('#')) {
                    return match;
                }
                // If link is in blog_image/ or images/, it's in root directory
                if (href.startsWith('blog_image/') || href.startsWith('images/')) {
                    return `href="${buildPath(href)}"`;
                }
                // Otherwise, assume it's relative to posts/
                const linkPath = buildPath(`posts/${href}`);
                return `href="${linkPath}"`;
            });

            return htmlContent;
        };

        // Open post
        const openPost = (post) => {
            // If post content is already embedded in posts.json, use it directly
            if (post.content) {
                const htmlContent = processMarkdownContent(post.content);
                currentPost.value = {
                    ...post,
                    content: htmlContent
                };
                return;
            }

            // Otherwise, try to load from file (fallback for backwards compatibility)
            const postUrl = buildPath(`posts/${post.filename}`) + '?t=' + new Date().getTime();
            
            fetch(postUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(text => {
                    // Remove frontmatter
                    const content = text.replace(/^---[\s\S]*?---/, '').trim();
                    const htmlContent = processMarkdownContent(content);
                    currentPost.value = {
                        ...post,
                        content: htmlContent
                    };
                })
                .catch(error => {
                    console.error('Error loading post from file:', error);
                    // If file loading fails and no embedded content, show error
                    alert('无法加载文章内容，请稍后重试。');
                });
        };

        // Close post
        const closePost = () => {
            currentPost.value = null;
        };

        return {
            posts,
            currentPost,
            openPost,
            closePost
        };
    }
}).mount('#app');
