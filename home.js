// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ===== LOADING SCREEN =====
    const loadingScreen = document.getElementById('loading-screen');

    // Hide loading screen when everything is ready
    window.addEventListener('load', function() {
        setTimeout(function() {
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
            }
        }, 800);
    });

    // ===== CONFIGURATION - CUSTOMIZE THESE! =====
    // CUSTOMIZE: Set the birthday date (format: 'Month Day, Year HH:MM:SS')
    const birthdayDate = new Date('January 25, 2025 00:00:00').getTime();

    // CUSTOMIZE: Change this greeting message
    const greetingText = "Hey [NAME]! You're one of the most amazing people I've ever known! 💖";

    // CUSTOMIZE: Change floating elements if desired
    const floatingElements = ['💖', '✨', '🌸', '💫', '💕'];

    // ===== DOM ELEMENTS =====
    const countdownSection = document.getElementById('countdown-section');
    const birthdayContent = document.getElementById('birthday-content');
    const cursor = document.querySelector('.cursor');
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = musicToggle ? musicToggle.querySelector('.music-icon') : null;

    // ===== STATE =====
    let birthdayAnimationsStarted = false;
    let charIndex = 0;

    // ===== CURSOR =====
    if (cursor) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    // ===== MUSIC CONTROL =====
    function toggleMusic() {
        if (!bgMusic) return;

        if (bgMusic.paused) {
            bgMusic.play().then(function() {
                if (musicToggle) musicToggle.classList.add('playing');
                if (musicIcon) musicIcon.textContent = '🎵';
                localStorage.setItem('musicPlaying', 'true');
            }).catch(function(err) {
                console.log('Music play failed:', err);
            });
        } else {
            bgMusic.pause();
            if (musicToggle) musicToggle.classList.remove('playing');
            if (musicIcon) musicIcon.textContent = '🔇';
            localStorage.setItem('musicPlaying', 'false');
        }
    }

    if (musicToggle) {
        musicToggle.addEventListener('click', toggleMusic);
    }

    // Try to resume music if it was playing
    if (bgMusic && localStorage.getItem('musicPlaying') === 'true') {
        bgMusic.play().then(function() {
            if (musicToggle) musicToggle.classList.add('playing');
            if (musicIcon) musicIcon.textContent = '🎵';
        }).catch(function() {
            if (musicIcon) musicIcon.textContent = '🔇';
        });
    }

    // ===== TYPING EFFECT =====
    function typeGreeting() {
        const greetingElement = document.querySelector('#birthday-content .greeting');
        if (!greetingElement) return;

        if (charIndex < greetingText.length) {
            greetingElement.textContent += greetingText.charAt(charIndex);
            charIndex++;
            setTimeout(typeGreeting, 100);
        }
    }

    // ===== FLOATING ELEMENTS =====
    function createFloating() {
        const element = document.createElement('div');
        element.className = 'floating';
        element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        element.style.fontSize = (Math.random() * 20 + 20) + 'px';
        document.body.appendChild(element);

        gsap.to(element, {
            y: -500,
            x: Math.random() * 100 - 50,
            rotation: Math.random() * 360,
            duration: Math.random() * 5 + 5,
            opacity: 1,
            ease: "none",
            onComplete: function() { element.remove(); }
        });
    }

    // Start floating elements
    setInterval(createFloating, 1000);

    // ===== BIRTHDAY ANIMATIONS =====
    function initBirthdayAnimations() {
        // Title animation
        gsap.to('#birthday-content h1', {
            opacity: 1,
            duration: 1,
            y: 20,
            ease: "bounce.out"
        });

        // Button animation
        gsap.to('#birthday-content .cta-button', {
            opacity: 1,
            duration: 1,
            y: -20,
            ease: "back.out"
        });

        // Start typing effect
        typeGreeting();

        // Button click handler
        const ctaButton = document.querySelector('#birthday-content .cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', function() {
                // Start music on first interaction if not playing
                if (bgMusic && bgMusic.paused) {
                    bgMusic.play().catch(function() {});
                    localStorage.setItem('musicPlaying', 'true');
                }

                gsap.to('body', {
                    opacity: 0,
                    duration: 1,
                    onComplete: function() {
                        window.location.href = 'wishes.html';
                    }
                });
            });

            // Hover effects
            ctaButton.addEventListener('mouseenter', function() {
                gsap.to(ctaButton, { scale: 1.1, duration: 0.3 });
            });
            ctaButton.addEventListener('mouseleave', function() {
                gsap.to(ctaButton, { scale: 1, duration: 0.3 });
            });
        }
    }

    // ===== COUNTDOWN =====
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        if (distance <= 0) {
            // Birthday has arrived!
            if (countdownSection) countdownSection.style.display = 'none';
            if (birthdayContent) birthdayContent.style.display = 'block';

            // Only initialize animations once
            if (!birthdayAnimationsStarted) {
                birthdayAnimationsStarted = true;
                initBirthdayAnimations();
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // Run countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
