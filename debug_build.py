
import os

try:
    with open('out/index.html', 'r', encoding='utf-8') as f:
        content = f.read(1500) # Read first 1500 chars to cover head
        print("--- INDEX.HTML HEAD ---")
        print(content)
        print("--- END ---")
except Exception as e:
    print(f"Error reading index.html: {e}")

if os.path.exists('out/.nojekyll'):
    print("out/.nojekyll EXISTS")
else:
    print("out/.nojekyll MISSING")
