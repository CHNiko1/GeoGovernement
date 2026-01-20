# 📋 Complete Project File Index

## Georgian Government Demo Website - Full File Listing

### Root Directory Files

| File | Purpose | Size |
|------|---------|------|
| **app.py** | Flask application, routes, and helpers | ~400 lines |
| **requirements.txt** | Python dependencies | 2 lines |
| **.gitignore** | Git configuration | 40 lines |
| **run.bat** | Windows startup script | Auto-runs with venv |
| **run.sh** | macOS/Linux startup script | Auto-runs with venv |
| **README.md** | Complete documentation | ~400 lines |
| **QUICKSTART.md** | Quick start guide | ~100 lines |
| **PROJECT_SUMMARY.md** | Project completion summary | ~200 lines |

### Data Files (content/)

| File | Contents | Records |
|------|----------|---------|
| **officials.json** | Government officials data | 8 officials |
| **ministries.json** | Ministry information | 6 ministries |
| **news.json** | News articles | 8 articles |
| **services.json** | Citizen services | 10 services |

### HTML Templates (templates/)

| File | Purpose | Type |
|------|---------|------|
| **base.html** | Master layout template | Layout |
| **home.html** | Home page | Page |
| **government.html** | Government structure | Page |
| **officials.html** | Officials listing | Page |
| **official_detail.html** | Official profile | Page |
| **ministries.html** | Ministries listing | Page |
| **ministry_detail.html** | Ministry detail | Page |
| **news.html** | News listing | Page |
| **news_detail.html** | News article | Page |
| **services.html** | Services hub | Page |
| **contact.html** | Contact form | Page |
| **accessibility.html** | Accessibility info | Page |
| **404.html** | Not found error | Error |
| **500.html** | Server error | Error |

### Static Assets

#### CSS (static/css/)
- **style.css** - 1500+ lines
  - CSS custom properties (variables)
  - Light mode styling
  - Dark mode styles
  - Responsive breakpoints
  - Animation keyframes
  - Utility classes
  - Print styles

#### JavaScript (static/js/)
- **main.js** - 400+ lines
  - Theme management
  - Language switching
  - Search functionality
  - Mobile menu toggle
  - Toast notifications
  - Form handling
  - Modal management
  - Accessibility helpers
  - Animation initialization

#### Images (static/img/)
- **seal.svg** - Government seal (SVG format)

---

## Routes & URLs

### Public Routes

| Route | Template | Description |
|-------|----------|-------------|
| `/` | home.html | Home page |
| `/government` | government.html | Government overview |
| `/officials` | officials.html | Officials listing |
| `/officials/<slug>` | official_detail.html | Official profile |
| `/ministries` | ministries.html | Ministries listing |
| `/ministries/<slug>` | ministry_detail.html | Ministry detail |
| `/news` | news.html | News listing (filterable) |
| `/news/<slug>` | news_detail.html | News article |
| `/services` | services.html | Services hub |
| `/contact` | contact.html | Contact form |
| `/accessibility` | accessibility.html | Accessibility statement |

### API Routes

| Route | Method | Returns |
|-------|--------|---------|
| `/api/search` | GET | JSON search results |
| `/api/officials/<slug>` | GET | JSON official data |

### Error Routes

| Code | Template | Trigger |
|------|----------|---------|
| 404 | 404.html | Not found |
| 500 | 500.html | Server error |

---

## Flask Application Structure

### Key Components in app.py

```
app.py
├── Imports & Setup
├── Configuration
├── Helper Functions
│   ├── load_json()
│   ├── slugify()
│   ├── get_official_by_slug()
│   ├── get_ministry_by_slug()
│   ├── get_news_by_slug()
│   ├── search_news()
│   ├── search_services()
│   └── filter_news_by_category()
├── Template Filters
│   ├── slugify filter
│   └── date_format filter
├── Routes (13 routes)
│   ├── / (home)
│   ├── /government
│   ├── /officials
│   ├── /officials/<slug>
│   ├── /ministries
│   ├── /ministries/<slug>
│   ├── /news
│   ├── /news/<slug>
│   ├── /services
│   ├── /contact
│   ├── /accessibility
│   ├── /api/search
│   └── /api/officials/<slug>
├── Error Handlers
│   ├── 404 handler
│   └── 500 handler
└── Main Entry
```

---

## Template Structure Hierarchy

```
base.html (Master Template)
│
├── Header
│   ├── Announcement Bar
│   ├── Theme/Language Toggle
│   ├── Logo
│   ├── Main Navigation
│   └── Search Toggle
│
├── Search Overlay
│
├── Breadcrumb Navigation
│
├── Main Content
│   ├── home.html (Hero, News, Services, Priorities)
│   ├── government.html (Structure, Principles, Leaders)
│   ├── officials.html (Grid of official cards)
│   ├── official_detail.html (Full profile, priorities, contact)
│   ├── ministries.html (Grid of ministry cards)
│   ├── ministry_detail.html (Detail, leadership, programs)
│   ├── news.html (List with filters and search)
│   ├── news_detail.html (Full article, related news)
│   ├── services.html (Cards with categories)
│   ├── contact.html (Form with validation)
│   ├── accessibility.html (Comprehensive statement)
│   ├── 404.html (Not found error)
│   └── 500.html (Server error)
│
├── Footer
│   ├── Links sections
│   ├── Social links
│   └── Copyright
│
└── Toast Container (notifications)
```

---

## CSS Organization

### Variable Categories in style.css

```
:root CSS Variables
├── Colors (20+ variables)
│   ├── Primary colors
│   ├── Accent colors
│   ├── Success/Warning/Danger
│   └── Background/Text/Border colors
├── Spacing (8 variables)
├── Typography (8 variables)
├── Line Heights (3 variables)
├── Transitions (3 variables)
├── Shadows (5 variables)
├── Border Radius (6 variables)
└── Container widths

Sections (1500+ lines)
├── Base/Reset Styles
├── Typography
├── Layout & Containers
├── Buttons
├── Announcement Bar
├── Header & Navigation
├── Search Overlay
├── Breadcrumb
├── Hero Section
├── Cards (all variations)
├── Grids & Layouts
├── Forms
├── Alerts & Messages
├── Modals
├── Toasts
├── Footer
├── Utility Classes
├── Responsive Breakpoints
├── Article Details
├── Error Pages
├── Accessibility Pages
├── Filters & Tabs
├── News List
└── Print Styles
```

---

## JavaScript Modules in main.js

```
main.js (400+ lines)
├── Theme Management
│   ├── initTheme()
│   ├── setTheme()
│   └── toggleTheme()
├── Language Management
│   ├── setLanguage()
│   └── getLanguage()
├── Search Functionality
│   ├── initSearch()
│   ├── openSearch()
│   ├── closeSearch()
│   ├── performSearch()
│   └── renderSearchResults()
├── Mobile Menu
│   ├── initMobileMenu()
│   ├── toggleMenu()
│   └── closeMenu()
├── Toast Notifications
│   └── showToast()
├── Announcement Bar
│   ├── closeAnnouncement()
│   └── initAnnouncement()
├── Form Handling
│   ├── initForms()
│   └── handleFormSubmit()
├── Category Filtering
│   └── filterByCategory()
├── Modal Management
│   ├── openServiceModal()
│   └── closeServiceModal()
├── Animations
│   └── initAnimations()
├── Accessibility
│   └── initAccessibility()
├── Utility Functions
│   ├── debounce()
│   └── slugify()
└── Initialization
    └── DOMContentLoaded listener
```

---

## Data Structure Examples

### Official Object
```json
{
  "id": "unique-id",
  "name": "Full Name",
  "title": "Position Title",
  "bio": "Biography text",
  "email": "email@government.ge",
  "phone": "+995...",
  "priorities": ["Priority 1", "Priority 2"],
  "photo": "placeholder-type"
}
```

### Ministry Object
```json
{
  "id": "ministry-id",
  "name": "Ministry Name",
  "leader_id": "official-id",
  "mission": "Mission statement",
  "description": "Full description",
  "responsibilities": ["Responsibility 1"],
  "website": "https://...",
  "programs": ["Program 1"]
}
```

### News Object
```json
{
  "id": 1,
  "title": "Article Title",
  "date": "2026-01-20",
  "excerpt": "Short excerpt",
  "content": "Full content",
  "categories": ["Category1"],
  "image": "placeholder-id"
}
```

### Service Object
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

---

## Feature Checklist

### Pages ✅
- [x] Home page
- [x] Government overview
- [x] Officials listing
- [x] Official detail
- [x] Ministries listing
- [x] Ministry detail
- [x] News listing
- [x] News article
- [x] Services hub
- [x] Contact form
- [x] Accessibility statement
- [x] 404 page
- [x] 500 page

### Design ✅
- [x] Hero section
- [x] Navigation menu
- [x] Card components
- [x] Responsive grid
- [x] Mobile-friendly
- [x] Dark mode
- [x] Smooth animations
- [x] Professional typography

### Functionality ✅
- [x] Search with Ctrl+K
- [x] Theme toggle
- [x] Language toggle
- [x] News filtering
- [x] Service modals
- [x] Contact form
- [x] Toast notifications
- [x] Mobile menu

### Accessibility ✅
- [x] Semantic HTML
- [x] ARIA labels
- [x] Keyboard navigation
- [x] Color contrast
- [x] Alt text
- [x] Focus states
- [x] Reduced motion
- [x] Skip links

---

## File Sizes Summary

```
Total Project Size: ~500 KB (uncompressed)

Breakdown:
├── Python Files: ~25 KB
│   └── app.py: ~15 KB
├── JSON Data: ~50 KB
├── HTML Templates: ~100 KB
├── CSS: ~200 KB (style.css)
├── JavaScript: ~25 KB (main.js)
└── Other: ~100 KB (docs, SVG, etc.)
```

---

## Getting Started Quick Links

1. **First Time Users**: Read QUICKSTART.md
2. **Full Documentation**: Read README.md
3. **Project Info**: Read PROJECT_SUMMARY.md
4. **Windows Users**: Run `run.bat`
5. **Mac/Linux Users**: Run `run.sh`

---

## Development Notes

### Adding New Content
1. Add JSON object to appropriate file in `content/`
2. Slugs are auto-generated from titles/names
3. URL slugs are lowercase, hyphenated versions

### Customizing Design
1. Edit CSS variables at top of `static/css/style.css`
2. Colors, fonts, spacing all customizable
3. Dark mode variables automatically applied

### Adding New Pages
1. Create template in `templates/`
2. Add route in `app.py`
3. Update navigation in `base.html`
4. Template inherits from `base.html`

### Performance Tips
1. Images are placeholders (no file size bloat)
2. CSS is well-organized for easy caching
3. JavaScript is minimal and vanilla
4. JSON files load efficiently

---

## Support Files

- **README.md** - 400+ lines of comprehensive documentation
- **QUICKSTART.md** - 100+ lines for quick setup
- **PROJECT_SUMMARY.md** - 200+ lines project overview
- **FILE_INDEX.md** - This file (complete reference)

---

**Total Files Created**: 28
**Total Lines of Code**: 3500+
**Status**: ✅ Complete & Ready to Run

---

Last Updated: January 2026
Version: 1.0.0
