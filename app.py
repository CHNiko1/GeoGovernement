from flask import Flask, render_template, request, jsonify, redirect, url_for
from datetime import datetime
import json
import re
from pathlib import Path

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

# Load content from JSON files
def load_json(filename):
    path = Path(__file__).parent / 'content' / filename
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def slugify(text):
    """Convert text to URL-friendly slug"""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text

def get_official_by_slug(slug):
    """Find official by URL slug"""
    officials = load_json('officials.json')
    for official in officials:
        if slugify(official['name']) == slug:
            return official
    return None

def get_ministry_by_slug(slug):
    """Find ministry by URL slug"""
    ministries = load_json('ministries.json')
    for ministry in ministries:
        if slugify(ministry['name']) == slug:
            return ministry
    return None

def get_news_by_slug(slug):
    """Find news article by URL slug"""
    news = load_json('news.json')
    for article in news:
        if slugify(article['title']) == slug:
            return article
    return None

def search_news(query):
    """Search news by title or content"""
    news = load_json('news.json')
    query = query.lower()
    results = [n for n in news if query in n['title'].lower() or query in n['content'].lower()]
    return results

def search_services(query):
    """Search services by name or description"""
    services = load_json('services.json')
    query = query.lower()
    results = [s for s in services if query in s['name'].lower() or query in s['description'].lower()]
    return results

def filter_news_by_category(category):
    """Filter news by category"""
    news = load_json('news.json')
    return [n for n in news if category.lower() in [c.lower() for c in n['categories']]]

# Template filters
@app.template_filter('slugify')
def slugify_filter(text):
    return slugify(text)

@app.template_filter('date_format')
def date_format(date_str):
    """Format date string to readable format"""
    try:
        date = datetime.strptime(date_str, '%Y-%m-%d')
        return date.strftime('%B %d, %Y')
    except:
        return date_str

# Routes
@app.route('/')
def home():
    news = load_json('news.json')[:3]  # Latest 3 news
    services = load_json('services.json')[:6]  # Popular services
    return render_template('home.html', latest_news=news, popular_services=services)

@app.route('/government')
def government():
    return render_template('government.html')

@app.route('/officials')
def officials():
    officials = load_json('officials.json')
    return render_template('officials.html', officials=officials)

@app.route('/officials/<slug>')
def official_detail(slug):
    official = get_official_by_slug(slug)
    if not official:
        return redirect(url_for('officials'))
    return render_template('official_detail.html', official=official)

@app.route('/ministries')
def ministries():
    ministries = load_json('ministries.json')
    return render_template('ministries.html', ministries=ministries)

@app.route('/ministries/<slug>')
def ministry_detail(slug):
    ministry = get_ministry_by_slug(slug)
    if not ministry:
        return redirect(url_for('ministries'))
    officials = load_json('officials.json')
    leader = None
    for official in officials:
        if official['id'] == ministry.get('leader_id'):
            leader = official
            break
    return render_template('ministry_detail.html', ministry=ministry, leader=leader)

@app.route('/news')
def news():
    category = request.args.get('category', '')
    if category:
        news_items = filter_news_by_category(category)
    else:
        news_items = load_json('news.json')
    
    categories = set()
    all_news = load_json('news.json')
    for article in all_news:
        categories.update(article['categories'])
    
    return render_template('news.html', news=news_items, categories=sorted(list(categories)), selected_category=category)

@app.route('/news/<slug>')
def news_detail(slug):
    article = get_news_by_slug(slug)
    if not article:
        return redirect(url_for('news'))
    
    all_news = load_json('news.json')
    related = [n for n in all_news if n['id'] != article['id'] and 
               any(c in n['categories'] for c in article['categories'])][:3]
    
    return render_template('news_detail.html', article=article, related_news=related)

@app.route('/services')
def services():
    services = load_json('services.json')
    categories = sorted(list(set(s['category'] for s in services)))
    return render_template('services.html', services=services, categories=categories)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Validate form
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip()
        subject = request.form.get('subject', '').strip()
        message = request.form.get('message', '').strip()
        
        if not name or not email or not subject or not message:
            return render_template('contact.html', error='All fields are required'), 400
        
        if not re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
            return render_template('contact.html', error='Invalid email address'), 400
        
        if len(message) < 10:
            return render_template('contact.html', error='Message must be at least 10 characters'), 400
        
        # In production, send email here
        return render_template('contact.html', success=True)
    
    return render_template('contact.html')

@app.route('/accessibility')
def accessibility():
    return render_template('accessibility.html')

@app.route('/api/search')
def api_search():
    """API endpoint for search functionality"""
    query = request.args.get('q', '').strip()
    if len(query) < 2:
        return jsonify({'results': []})
    
    news_results = search_news(query)
    services_results = search_services(query)
    
    results = {
        'news': [{'title': n['title'], 'slug': slugify(n['title']), 'type': 'news'} for n in news_results[:5]],
        'services': [{'name': s['name'], 'slug': slugify(s['name']), 'type': 'service'} for s in services_results[:5]]
    }
    
    return jsonify(results)

@app.route('/api/officials/<slug>')
def api_official(slug):
    """API endpoint for official data (for modal)"""
    official = get_official_by_slug(slug)
    if not official:
        return jsonify({'error': 'Not found'}), 404
    return jsonify(official)

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def server_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
