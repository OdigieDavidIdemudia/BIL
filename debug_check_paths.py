
import re

try:
    with open('out/index.html', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find all stylesheet links
    links = re.findall(r'<link[^>]+rel="stylesheet"[^>]*>', content)
    for link in links:
        print(f"FOUND CSS LINK: {link}")
        
    # Also check for JS files just in case
    scripts = re.findall(r'<script[^>]+src="([^"]+)"', content)
    for script in scripts:
        print(f"FOUND SCRIPT SRC: {script}")

except Exception as e:
    print(f"Error: {e}")
