import os
import re

FILES = [
    "index.html",
    "about/index.html",
    "process/index.html",
    "skills/index.html",
    "prototypes/index.html",
    "experience/index.html",
    "testimonials/index.html",
    "contact/index.html",
]

def update_file(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return
    
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Add shinobi-theme.css link right after site-overrides.css if not present
    if "shinobi-theme.css" not in content:
        content = re.sub(
            r'(<link rel="stylesheet" href="/css/site-overrides\.css[^>]*>)',
            r'\1<link rel="stylesheet" href="/css/shinobi-theme.css">',
            content
        )

    # 2. Add shinobi-effects.js before </head> or before </body> if not present
    if "shinobi-effects.js" not in content:
        content = content.replace("</head>", '<script src="/js/shinobi-effects.js" defer></script></head>')

    # 3. Replace harmonykids.svg with harmonykids.jpg
    content = content.replace("/images/harmonykids.svg", "/images/harmonykids.jpg")

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    
    print(f"Updated {path}")

def main():
    for f in FILES:
        update_file(f)

if __name__ == "__main__":
    main()

