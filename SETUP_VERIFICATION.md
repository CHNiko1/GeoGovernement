# 🚀 Setup Verification & Testing Guide

## Pre-Launch Checklist

### File Structure Verification

Run this command to verify all files are present:

```bash
# Windows
dir /s

# macOS/Linux
find . -type f
```

You should see:
- ✅ `app.py` (main application)
- ✅ `requirements.txt`
- ✅ 4 JSON files in `content/` folder
- ✅ 14 HTML templates in `templates/` folder
- ✅ `style.css` in `static/css/`
- ✅ `main.js` in `static/js/`
- ✅ `seal.svg` in `static/img/`

---

## Installation Verification

### Step 1: Python Installation
```bash
python --version
# or
python3 --version
```
Should show: **Python 3.8 or higher**

### Step 2: Virtual Environment
```bash
# Windows
venv\Scripts\activate
@echo %VIRTUAL_ENV%

# macOS/Linux
source venv/bin/activate
echo $VIRTUAL_ENV
```
Should show path to venv folder

### Step 3: Flask Installation
```bash
pip list | grep -i flask
# or
pip show flask
```
Should show: **Flask 2.3.3 or higher**

---

## Running the Application

### Method 1: Automated Script (Easiest)
```bash
# Windows
run.bat

# macOS/Linux
chmod +x run.sh
./run.sh
```

### Method 2: Manual Start
```bash
# Activate virtual environment
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run application
python app.py
```

### Method 3: Direct Python
```bash
# Without virtual environment (not recommended)
python -m pip install flask
python app.py
```

---

## Testing the Website

### 1. Home Page Test
- [ ] Navigate to `http://localhost:5000`
- [ ] Hero section displays correctly
- [ ] Latest news cards visible
- [ ] Popular services cards visible
- [ ] Government priorities section visible
- [ ] All colors and fonts render properly

### 2. Navigation Test
- [ ] Click all navigation menu items
- [ ] Each page loads without errors
- [ ] Breadcrumb navigation visible (except home)
- [ ] Sticky header stays visible while scrolling
- [ ] Mega-menu dropdown appears on hover

### 3. Search Functionality Test
- [ ] Press `Ctrl+K` to open search
- [ ] Type "news" in search box
- [ ] Results appear in search overlay
- [ ] Click result navigates to article
- [ ] Press `Escape` closes search
- [ ] Click search close button works

### 4. Theme Toggle Test
- [ ] Click moon icon (🌙) in header
- [ ] Page switches to dark mode
- [ ] All colors change appropriately
- [ ] Click again switches back to light mode
- [ ] Refresh page - theme persists
- [ ] Sun icon (☀️) shows in dark mode

### 5. Language Toggle Test
- [ ] Click "English" button
- [ ] Page English selected indicator shows
- [ ] Click "ქართული" button
- [ ] Georgian selected indicator shows
- [ ] Refresh page - language persists

### 6. Officials Page Test
- [ ] All 8 officials display as cards
- [ ] Each card shows name, title, bio, priorities
- [ ] Contact links are visible
- [ ] Click official name - goes to detail page
- [ ] Detail page shows full information
- [ ] Back button returns to list

### 7. Ministries Page Test
- [ ] All 6 ministries display
- [ ] Each card shows mission and responsibilities
- [ ] Click ministry - opens detail page
- [ ] Detail page shows leader information
- [ ] Website link opens in new tab

### 8. News Page Test
- [ ] All 8 news articles display
- [ ] Category filters visible
- [ ] Click category - filters articles
- [ ] "All News" button shows all articles
- [ ] Click article - opens detail page
- [ ] Related news shows at bottom

### 9. Services Page Test
- [ ] All 10 services display
- [ ] Category tabs visible
- [ ] Services organized by category
- [ ] Click "Get Started" - opens modal
- [ ] Modal shows service details
- [ ] Close modal with button or Escape

### 10. Contact Form Test
- [ ] Form fields visible
- [ ] Submit empty form - shows error
- [ ] Enter invalid email - shows error
- [ ] Enter valid data - form submits
- [ ] Success message appears
- [ ] Toast notification displays

### 11. Responsive Design Test
- [ ] Resize browser to 1200px - desktop layout
- [ ] Resize to 768px - tablet layout
- [ ] Resize to 480px - mobile layout
- [ ] Hamburger menu appears on mobile
- [ ] Click hamburger - menu opens
- [ ] All content readable on all sizes

### 12. Accessibility Test
- [ ] Press Tab - navigate through page
- [ ] Focus indicators visible on all buttons
- [ ] Skip-to-content link available
- [ ] Click accessibility link - statement page shows
- [ ] Keyboard shortcuts work (Ctrl+K, Escape)
- [ ] Light text on dark backgrounds (contrast OK)

### 13. Error Pages Test
- [ ] Navigate to `/notfound` - 404 page shows
- [ ] 404 page has helpful links
- [ ] Error pages styled consistently

### 14. Footer Test
- [ ] Footer visible on all pages
- [ ] Links in footer work
- [ ] Social media icons visible
- [ ] Demo project notice displayed
- [ ] Sitemap links functional

---

## Browser Compatibility Test

Test in these browsers:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (if on macOS)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Performance Checks

### Load Time Test
Press `F12` (Dev Tools) → Network tab
- Home page should load in < 2 seconds
- CSS should be < 200 KB
- No JavaScript errors in console
- All images loading (placeholders)

### Lighthouse Score
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Generate report
- Performance: > 85
- Accessibility: > 90
- Best Practices: > 85
- SEO: > 90

### JavaScript Errors
Open DevTools Console (F12 → Console)
- [ ] No red errors
- [ ] No warnings about missing files
- [ ] Search, theme, language switches work

---

## API Endpoint Testing

### Test Search API
```bash
curl "http://localhost:5000/api/search?q=education"
```

Expected response:
```json
{
  "news": [...],
  "services": [...]
}
```

### Test Official API
```bash
curl "http://localhost:5000/api/officials/giorgi-katamadze"
```

Expected response:
```json
{
  "id": "...",
  "name": "...",
  "title": "..."
}
```

---

## Troubleshooting

### Issue: "Address already in use" on port 5000

**Solution**: Use a different port:
```bash
python -c "from app import app; app.run(port=5001)"
```

Then visit: `http://localhost:5001`

### Issue: "ModuleNotFoundError: No module named 'flask'"

**Solution**: Make sure virtual environment is activated:
```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Then install
pip install flask
```

### Issue: CSS not loading

**Solution**: Clear browser cache:
- Windows: `Ctrl+Shift+Delete`
- macOS: `Cmd+Shift+Delete`

Or hard refresh: `Ctrl+Shift+R`

### Issue: Search not working

**Solution**: Check browser console (F12):
- Look for JavaScript errors
- Check if `/api/search` endpoint works
- Try refreshing the page

### Issue: Dark mode not working

**Solution**: 
- Check browser localStorage is enabled
- Try in private/incognito mode
- Clear localStorage: `localStorage.clear()` in console

---

## Success Criteria

Your setup is successful when:

✅ All 28 files are present
✅ Python 3.8+ is installed
✅ Flask installs without errors
✅ `python app.py` starts without errors
✅ Browser loads `http://localhost:5000` without errors
✅ Home page displays with correct styling
✅ All navigation links work
✅ Search opens with Ctrl+K
✅ Theme toggle switches light/dark mode
✅ No console errors in DevTools
✅ Forms validate and submit
✅ All pages are responsive
✅ Keyboard navigation works

---

## Next Steps After Verification

1. **Customize Content** - Edit JSON files with your own data
2. **Change Colors** - Modify CSS variables in `style.css`
3. **Add New Pages** - Create templates and routes
4. **Deploy** - Follow deployment guide in README.md
5. **Share** - Share your government website!

---

## Support

If you encounter issues:

1. **Read Documentation**
   - README.md - Full documentation
   - QUICKSTART.md - Quick setup guide
   - FILE_INDEX.md - File reference

2. **Check Common Issues**
   - See troubleshooting section above
   - Check browser console (F12)
   - Check Flask output for errors

3. **Verify Installation**
   - Python version: `python --version`
   - Flask version: `pip show flask`
   - Virtual environment active: Check command prompt

---

## Quick Reference Commands

```bash
# Activate virtual environment
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Install Flask
pip install flask

# Start application
python app.py

# Run automated script
# Windows
run.bat

# macOS/Linux
./run.sh

# Deactivate virtual environment
deactivate

# Clear browser cache
Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)

# Hard refresh page
Ctrl+Shift+R (or Cmd+Shift+R on Mac)

# Open DevTools
F12 (or Cmd+Option+I on Mac)
```

---

**Last Updated**: January 2026
**Status**: ✅ Ready to Test
**Estimated Setup Time**: 5-10 minutes
