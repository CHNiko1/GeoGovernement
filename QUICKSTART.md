# Quick Start Guide

## First Time Setup (5 minutes)

### 1. Open Terminal/Command Prompt
Navigate to the project folder:
```
cd georgian-parliament
```

### 2. Create Virtual Environment
**Windows:**
```
python -m venv venv
venv\Scripts\activate
```

**Mac/Linux:**
```
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Flask
```
pip install flask
```

### 4. Run the Server
```
python app.py
```

### 5. Open in Browser
Visit: **http://localhost:5000**

---

## What to Try

1. **Home Page** - See featured content and priorities
2. **Search** - Press `Ctrl+K` to search
3. **Dark Mode** - Click the moon icon (🌙) in top right
4. **Responsive** - Resize your browser to see mobile view
5. **Navigation** - Explore all pages via the menu
6. **Contact Form** - Fill out and submit the contact form

---

## File Structure Overview

```
- app.py              ← Main application
- requirements.txt    ← Dependencies to install
- content/            ← JSON data files
- templates/          ← HTML pages
- static/
  - css/style.css    ← Styling & dark mode
  - js/main.js       ← Interactions
  - img/seal.svg     ← Logo
```

---

## Customizing Content

### Change the President's Name
Open `content/officials.json` and edit the first entry.

### Change the Home Page Title
Open `templates/home.html` and find `<h1 class="hero-title">`.

### Add Your Own Colors
Open `static/css/style.css` and edit the `:root` colors at the top.

---

## Stopping the Server

Press `Ctrl+C` in the terminal.

---

## Common Issues

**"ModuleNotFoundError: No module named 'flask'"**
- Make sure you activated the virtual environment
- Run: `pip install flask`

**"Port 5000 already in use"**
- Another app is using port 5000
- Either stop that app or run Flask on a different port:
  ```
  python -c "from app import app; app.run(port=5001)"
  ```

**Styles not loading**
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh the page (Ctrl+F5)

---

## Key Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` | Open search |
| `Tab` | Navigate |
| `Escape` | Close modals |

---

## Next Steps

- Read `README.md` for detailed documentation
- Explore the code in `app.py`
- Customize colors in `static/css/style.css`
- Add your own content to JSON files
- Share and enjoy! 🇬🇪

---

**Having Fun?** Check out the **100% accessible, responsive, and modern design** built with vanilla web technologies!
