import os
import subprocess

CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

PAGES = [
    ("home", "http://localhost:8765/"),
    ("about", "http://localhost:8765/about/"),
    ("process", "http://localhost:8765/process/"),
    ("skills", "http://localhost:8765/skills/"),
    ("prototypes", "http://localhost:8765/prototypes/"),
    ("experience", "http://localhost:8765/experience/"),
    ("testimonials", "http://localhost:8765/testimonials/"),
    ("contact", "http://localhost:8765/contact/"),
]

VIEWPORTS = [
    ("desktop", 1440, 900),
    ("laptop", 1200, 800),
    ("tablet", 768, 1024),
    ("mobile", 375, 812),
]

def capture(url, out_path, width=1440, height=900):
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    cmd = [
        CHROME_BIN,
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        f"--screenshot={out_path}",
        f"--window-size={width},{height}",
        "--hide-scrollbars",
        url
    ]
    try:
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=15)
        if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
            print(f"Captured: {out_path} ({os.path.getsize(out_path)} bytes)")
            return True
        else:
            print(f"Failed or empty: {out_path}")
            return False
    except Exception as e:
        print(f"Error capturing {url}: {e}")
        return False

def main():
    print("=== CAPTURING REDESIGNED SITE SCREENSHOTS ACROSS 4 VIEWPORTS ===")
    count = 0
    for page_name, url in PAGES:
        for vp_name, w, h in VIEWPORTS:
            out_file = f"screenshots/redesign/{page_name}_{vp_name}_{w}x{h}.png"
            if capture(url, out_file, w, h):
                count += 1
    print(f"REDESIGN SCREENSHOTS CAPTURED: {count}")

if __name__ == "__main__":
    main()

