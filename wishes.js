// Music control
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = musicToggle.querySelector('.music-icon');

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.classList.add('playing');
        musicIcon.textContent = '🎵';
        localStorage.setItem('musicPlaying', 'true');
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicIcon.textContent = '🔇';
        localStorage.setItem('musicPlaying', 'false');
    }
}

musicToggle.addEventListener('click', toggleMusic);

// Check if music was playing on previous page
if (localStorage.getItem('musicPlaying') === 'true') {
    bgMusic.play().then(() => {
        musicToggle.classList.add('playing');
        musicIcon.textContent = '🎵';
    }).catch(() => {
        musicIcon.textContent = '🔇';
    });
}

// ===== CUSTOMIZE: Add your reasons here! =====
// Each reason has:
// - text: The message to display
// - emoji: An emoji shown before the text
// - gif: Animation file to show (optional, use animation-1.gif or animation-2.gif)
const reasons = [
    {
        text: "Because you always know how to make me smile! 💖",
        emoji: "✨",
        gif: "animation-1.gif"
    },
    {
        text: "Because you're the best listener I know! 🌸",
        emoji: "💫",
        gif: "animation-2.gif"
    },
    {
        text: "Because your laugh is contagious! ✨",
        emoji: "🌟",
        gif: "animation-1.gif"
    },
    {
        text: "Because you make every moment special! 🎂",
        emoji: "💖",
        gif: "animation-2.gif"
    },
    {
        text: "Because you're simply amazing! Here's to another wonderful year! 🎉",
        emoji: "🎊",
        gif: "animation-1.gif"
    }
    // Add more reasons as needed!
];

// State management
let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

// Create reason card with gif
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';

    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `${reason.emoji} ${reason.text}`;

    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Celebration">`;

    card.appendChild(text);
    card.appendChild(gifOverlay);

    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back.out"
    });

    return card;
}

// Display new reason
function displayNewReason() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);

        // Update counter
        reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;

        currentReasonIndex++;

        // Check if we should transform the button
        if (currentReasonIndex === reasons.length) {
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    // CUSTOMIZE: Change button text
                    shuffleButton.textContent = "Continue to Timeline 💫";
                    shuffleButton.classList.add('story-mode');
                    shuffleButton.addEventListener('click', () => {
                        gsap.to('body', {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => {
                                window.location.href = 'timeline.html';
                            }
                        });
                    });
                }
            });
        }

        // Create floating elements
        createFloatingElement();

        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    } else {
        window.location.href = "timeline.html";
    }
}

// Initialize button click
shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    displayNewReason();
});

// Floating elements function
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

// Custom cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});

// Create initial floating elements
setInterval(createFloatingElement, 2000);
