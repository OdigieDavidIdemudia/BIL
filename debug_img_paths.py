
import re

try:
    with open('out/index.html', 'r', encoding='utf-8') as f:
        content = f.read()
        
    imgs = re.findall(r'<img[^>]+src="([^"]+)"', content)
    for src in imgs:
        print(f"FOUND IMG SRC: {src}")

except Exception as e:
    print(f"Error: {e}")
