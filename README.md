# Happy Birthday Website Template

Create a beautiful, personalized birthday website for your loved one! This template includes animated pages, a countdown timer, photo galleries, and heartfelt messages.

## Live Demo
[View Demo](https://your-demo-link-here.com)

## Features

- Countdown timer to the birthday
- Animated homepage with custom greetings
- "Reasons I Love You" interactive page
- Photo memories gallery
- Timeline of your relationship
- Background music support
- Fully responsive design
- Confetti celebrations
- Share functionality

---

## Quick Start

### Step 1: Fork or Clone This Repository

```bash
git clone https://github.com/YOUR_USERNAME/happy-birthday-template.git
cd happy-birthday-template
```

### Step 2: Gather Your Information

Before you start customizing, collect the following:

---

## Information Checklist

### Required Information

| Item | Description | Example |
|------|-------------|---------|
| **Their Name** | The birthday person's name | "Sarah", "John" |
| **Their Age** | The age they're turning | 22, 25, 30 |
| **Birthday Date** | Their birthday (for countdown) | "January 25, 2025" |
| **Your Name** | Your name (the creator) | "Alex" |

### Photos Needed

| Photo | Description | Filename |
|-------|-------------|----------|
| **Photo 1** | A photo of them or you together | `photo-1.jpg` |
| **Photo 2** | Another memorable photo | `photo-2.jpg` |
| **Photo 3** | Birthday/celebration photo | `photo-3.jpg` |
| **Favicon** | Small icon for browser tab (optional) | `favicon.png` |

### Personalization Details

| Item | Description | Where It's Used |
|------|-------------|-----------------|
| **Nicknames** | Pet names for each other | Homepage greeting |
| **Relationship** | Friend/Partner/Family | Messages & titles |
| **How You Met** | Story of how you met | Memories page |
| **Special Memories** | 3-5 memorable moments | Photo captions |
| **Wishes/Messages** | Birthday wishes (5-10 reasons you love them) | Wishes page |

### Optional Extras

| Item | Description |
|------|-------------|
| **Background Music** | An MP3 file (birthday song, favorite song) |
| **Custom GIFs** | Animated backgrounds or decorations |
| **Timeline Events** | Key dates in your relationship |

---

## File Structure

```
template/
├── index.html          # Homepage with countdown
├── wishes.html         # "Reasons I Love You" page
├── memories.html       # Photo gallery
├── timeline.html       # Relationship timeline
├── home.css            # Homepage styles
├── home.js             # Homepage scripts
├── wishes.css          # Wishes page styles
├── wishes.js           # Wishes page scripts
├── photos/             # Your photos folder
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── photo-3.jpg
├── hbd.mp3            # Background music (optional)
└── README.md          # This file
```

---

## Customization Guide

### Step 3: Update the Birthday Date

Open `home.js` and find the countdown configuration:

```javascript
// Change this to their birthday
const birthdayDate = new Date('January 25, 2025 00:00:00');
```

### Step 4: Update Names and Messages

#### In `index.html`:
```html
<!-- Change the name -->
<h1>Happy Birthday [THEIR NAME]</h1>

<!-- Change the greeting -->
<p class="nickname-text">To my favorite [NICKNAME]</p>

<!-- Change your signature -->
<p class="from-text">- From [YOUR NAME]</p>

<!-- Change the age -->
<div class="level-up-badge">Level [AGE] Unlocked!</div>
```

#### In `wishes.html`:
Update the title and name:
```html
<h1>Happy Birthday [THEIR NAME]</h1>
```

#### In `memories.html`:
Update the final message section:
```html
<h2>Happy [AGE]th Birthday, [THEIR NAME]!</h2>
<p class="signature">- [YOUR NAME]</p>
```

### Step 5: Add Your Photos

1. Add your photos to the `photos/` folder
2. Rename them to match the template:
   - `photo-1.jpg`
   - `photo-2.jpg`
   - `photo-3.jpg`
3. Or update the image paths in HTML files

### Step 6: Customize Photo Captions

In `memories.html`, update the memory cards:

```html
<div class="memory-card">
    <img src="./photos/photo-1.jpg" alt="Description" class="memory-img">
    <div class="memory-date">[DATE OR TITLE]</div>
    <div class="memory-caption">[YOUR CAPTION HERE]</div>
</div>
```

### Step 7: Add Birthday Wishes/Reasons

In `wishes.js`, update the reasons array:

```javascript
const reasons = [
    "Because your smile lights up my day",
    "Because you always know how to make me laugh",
    "Because you're the best listener",
    "Because you give the warmest hugs",
    "Because you believe in me",
    // Add more reasons...
];
```

### Step 8: Add Background Music (Optional)

1. Add your MP3 file to the root folder as `hbd.mp3`
2. The music toggle button will appear automatically

---

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Push your code to GitHub
2. Go to Repository Settings > Pages
3. Select "main" branch and save
4. Your site will be live at `https://username.github.io/repo-name`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Get a free URL instantly

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

---

## Color Customization

The default theme uses pink/purple colors. To change:

### In CSS files, find and replace:

| Current Color | Description |
|---------------|-------------|
| `#ff69b4` | Hot Pink (primary) |
| `#ff99cc` | Light Pink |
| `#da70d6` | Orchid |
| `#ffd1dc` | Pale Pink |

### Example: Blue Theme

Replace:
- `#ff69b4` → `#4169e1` (Royal Blue)
- `#ff99cc` → `#87ceeb` (Sky Blue)
- `#da70d6` → `#6495ed` (Cornflower Blue)

---

## Troubleshooting

### Music Not Playing?
Modern browsers block autoplay. The music toggle button lets users enable it manually.

### Images Not Loading?
- Check file names match exactly (case-sensitive)
- Ensure images are in the correct folder
- Use lowercase extensions (.jpg, not .JPG)

### Countdown Shows Wrong Time?
- Make sure the date format is correct: `'Month Day, Year HH:MM:SS'`
- Check your timezone considerations

---

## Tips for the Best Experience

1. **Use high-quality photos** - They'll be displayed prominently
2. **Write personal messages** - Generic wishes are forgettable
3. **Test on mobile** - Many people will view on phones
4. **Send the link privately** - Makes it more special
5. **Time it right** - Send at midnight or morning of their birthday

---

## Credits

- GSAP Animation Library
- Google Fonts (Dancing Script, Quicksand)
- Made with love for someone special

---

## License

MIT License - Feel free to use, modify, and share!

---

## Show Your Creation!

Tag us on social media with #HappyBirthdayTemplate and show us your creation!

Made with love for your loved ones.
