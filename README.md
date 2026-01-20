# Georgian Government Demo Website

A modern, professional government portal website built with Flask, Jinja2 templates, and vanilla JavaScript. This is a **fictional demo project** showcasing best practices in government website design.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.8%2B-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.0%2B-green.svg)

## Features

### 🏛️ Government Structure
- **Home Page** with hero section, latest news, popular services, and government priorities
- **Government Overview** showing structure and key principles
- **Officials Directory** with profiles and contact information
- **Ministries** listing with detailed information and leadership
- **News Section** with filtering and search capabilities
- **Services Hub** for citizen services
- **Contact Page** with form validation and feedback
- **Accessibility Statement** with comprehensive guidelines

### 🎨 Design & UX
- **Modern Aesthetic** - Clean, professional government portal design
- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Mode** - Theme toggle with localStorage persistence
- **Accessibility** - WCAG 2.1 AA compliance, keyboard navigation, ARIA labels
- **Animations** - Smooth transitions and micro-interactions
- **Progressive Enhancement** - Works without JavaScript, enhanced with JS

### 🔍 Features
- **Advanced Search** - Press Ctrl+K to search news and services
- **Search Overlay** - Beautiful modal search interface
- **Filter & Sort** - News filtering by category
- **Toast Notifications** - User feedback notifications
- **Modal Dialogs** - Service quick-view modals
- **Sticky Header** - With mega-menu dropdown navigation
- **Breadcrumb Navigation** - Easy page tracking
- **404/500 Error Pages** - User-friendly error handling

### 🌐 Internationalization
- **Bilingual Support** - English and Georgian (Georgian UI labels)
- **Language Toggle** - Easy switching between languages
- **localStorage Persistence** - Remember user's language choice

### 📱 Responsive Breakpoints
- **Desktop** - 1200px and above
- **Tablet** - 768px to 1200px
- **Mobile** - Below 768px

## Project Structure

```
georgian-parliament/
├── app.py                      # Flask application & routes
├── requirements.txt            # Python dependencies
├── README.md                   # This file
├── content/                    # JSON data files
│   ├── officials.json         # Government officials
│   ├── ministries.json        # Ministry information
│   ├── news.json              # News articles
│   └── services.json          # Citizen services
├── templates/                  # Jinja2 templates
│   ├── base.html              # Base layout template
│   ├── home.html              # Home page
│   ├── government.html        # Government overview
│   ├── officials.html         # Officials list
│   ├── official_detail.html   # Official profile
│   ├── ministries.html        # Ministries list
│   ├── ministry_detail.html   # Ministry detail
│   ├── news.html              # News listing
│   ├── news_detail.html       # News article
│   ├── services.html          # Services hub
│   ├── contact.html           # Contact form
│   ├── accessibility.html     # Accessibility statement
│   ├── 404.html               # 404 error page
│   └── 500.html               # 500 error page
└── static/                     # Static assets
    ├── css/
    │   └── style.css          # Main stylesheet (with dark mode)
    ├── js/
    │   └── main.js            # JavaScript interactions
    └── img/
        └── seal.svg           # Government seal
```

## Installation & Setup

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)
- Virtual environment (recommended)

### Step 1: Clone or Download
```bash
cd georgian-parliament
```

### Step 2: Create Virtual Environment
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install flask
```

Or install all requirements:
```bash
pip install -r requirements.txt
```

### Step 4: Run the Application
```bash
# On Windows
python app.py

# On macOS/Linux
python3 app.py
```

The application will start at: `http://localhost:5000`

## Usage

### Viewing Pages
Navigate to different sections using the header menu:
- Home: `/`
- Government: `/government`
- Officials: `/officials`
- Ministries: `/ministries`
- News: `/news`
- Services: `/services`
- Contact: `/contact`
- Accessibility: `/accessibility`

### Search
Press `Ctrl+K` (or `Cmd+K` on Mac) to open the search overlay and search for news articles and services.

### Theme Switching
Click the moon/sun icon in the header to toggle between light and dark modes.

### Language Switching
Click the language buttons (English/ქართული) in the top right to switch languages.

### Form Submission
The contact form validates on the client and server. Success/error messages appear as toast notifications.

## Content Management

### Adding Content

#### New Official
Add to `content/officials.json`:
```json
{
  "id": "unique-id",
  "name": "Full Name",
  "title": "Position",
  "bio": "Short biography",
  "email": "email@government.ge",
  "phone": "+995...",
  "priorities": ["Priority 1", "Priority 2"],
  "photo": "placeholder-official"
}
```

#### New Ministry
Add to `content/ministries.json`:
```json
{
  "id": "ministry-id",
  "name": "Ministry Name",
  "leader_id": "official-id",
  "mission": "Ministry mission statement",
  "description": "Full description",
  "responsibilities": ["Responsibility 1"],
  "website": "https://...",
  "programs": ["Program 1"]
}
```

#### New News Article
Add to `content/news.json`:
```json
{
  "id": 1,
  "title": "Article Title",
  "date": "2026-01-20",
  "excerpt": "Short excerpt",
  "content": "Full article content",
  "categories": ["Category1", "Category2"],
  "image": "placeholder"
}
```

#### New Service
Add to `content/services.json`:
```json
{
  "id": 1,
  "name": "Service Name",
  "category": "Category",
  "description": "Short description",
  "description_full": "Full description",
  "icon": "emoji"
}
```

## Customization

### Colors & Styling
Edit `static/css/style.css` CSS variables at the top:
```css
:root {
  --color-primary: #1a1a2e;
  --color-accent: #0066cc;
  /* ... other colors ... */
}
```

### Typography
Modify font families and sizes in the CSS variables section.

### Header Navigation
Update `templates/base.html` navigation menu items.

### Footer
Modify footer content in `templates/base.html`.

## API Endpoints

### Search API
**GET** `/api/search?q=query`

Returns JSON with news and services matching the query.

```json
{
  "news": [
    {"title": "Article Title", "slug": "article-slug", "type": "news"}
  ],
  "services": [
    {"name": "Service Name", "slug": "service-slug", "type": "service"}
  ]
}
```

### Official Profile API
**GET** `/api/officials/<slug>`

Returns JSON with official details for modal display.

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

✅ Semantic HTML5
✅ ARIA labels and roles
✅ Keyboard navigation (Tab, Enter, Escape)
✅ Focus management
✅ Color contrast ratios (4.5:1 minimum)
✅ Text resizable up to 200%
✅ Alt text for images
✅ Skip-to-content links
✅ Reduced motion support
✅ Screen reader compatible

## Performance

- **Lazy loading** for images and content
- **CSS animations** respect prefers-reduced-motion
- **Minimal JavaScript** for fast load times
- **Optimized assets** for quick delivery
- Lighthouse friendly

## Security Considerations

- Form validation on client and server
- CSRF protection ready (add Flask-WTF for production)
- No sensitive data in JSON files
- Email obfuscation in contact form
- Security headers recommended for production

## Deployment

### Local Testing
```bash
python app.py
```

### Production Deployment
1. Set `debug=False` in `app.py`
2. Use a production WSGI server (Gunicorn, uWSGI)
3. Add SSL/TLS certificate
4. Configure environment variables
5. Use a reverse proxy (Nginx, Apache)

Example with Gunicorn:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## Contributing

This is a demo project. To contribute:
1. Fork the repository
2. Create a feature branch
3. Make improvements
4. Submit a pull request

## License

MIT License - feel free to use for personal and commercial projects.

## Demo Content Notice

⚠️ **Important**: This is a fictional demo project. All content, officials, ministries, and news are fabricated for demonstration purposes only. Names, titles, and information are not real.

## Acknowledgments

Built with:
- **Flask** - Web framework
- **Jinja2** - Templating engine
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling with custom properties

## Support & Questions

For questions or issues:
1. Check the code comments
2. Review the templates
3. Inspect the CSS variables
4. Test in browser dev tools

---

**Status**: ✅ Complete and ready to use
**Last Updated**: January 2026
**Version**: 1.0.0

---

## Quick Reference

| Command | Action |
|---------|--------|
| `python app.py` | Start development server |
| `Ctrl+K` | Open search |
| Click 🌙 | Toggle dark mode |
| Click 🇬🇧/🇬🇪 | Change language |
| Tab | Keyboard navigation |
| Escape | Close modals |

---

Enjoy the demo! 🇬🇪
