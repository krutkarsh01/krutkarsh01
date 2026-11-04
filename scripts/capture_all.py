import os
import subprocess
import time

CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

PAGES = [
    ("home", "http://localhost:3000/"),
    ("about", "http://localhost:3000/about/"),
    ("process", "http://localhost:3000/process/"),
    ("skills", "http://localhost:3000/skills/"),
    ("prototypes", "http://localhost:3000/prototypes/"),
    ("experience", "http://localhost:3000/experience/"),
    ("testimonials", "http://localhost:3000/testimonials/"),
    ("contact", "http://localhost:3000/contact/"),
]

VIEWPORTS = [
    ("desktop", 1440, 900),
    ("laptop", 1200, 800),
    ("tablet", 768, 1024),
    ("mobile", 375, 812),
]

PROTOTYPES = [
    ("meax_website", "https://meaxwebsiteprototype.oneapp.dev/"),
    ("meax_admin", "https://meaxadminpanelprototype.oneapp.dev/"),
    ("meax_driver", "https://meaxdriverappprototype.oneapp.dev/"),
    ("veterinarios_guest", "https://112veterinarios-guestvisitor.oneapp.dev/"),
    ("veterinarios_clinic", "https://112veterinarios-clinicowner.oneapp.dev/"),
    ("elmanantial_admin", "https://tsrs_admin_may2026.oneapp.dev/"),
    ("elmanantial_resident", "https://elmantial_resident_may.oneapp.dev/"),
    ("team1display_customer", "https://team1displayservicesnet-customer.oneapp.dev/"),
    ("team1display_admin", "https://team1displayservicesnet-admin.oneapp.dev/"),
    ("kelioniukryptis_customer", "https://kelioniukryptislt-customer.oneapp.dev/"),
    ("kelioniukryptis_admin", "https://kelioniukryptislt-admin.oneapp.dev/"),
    ("stealthmanager_builder", "https://mobrilzcombuilder-page.oneapp.dev/"),
    ("ovella_calc", "https://ovella-v7.netlify.app/"),
    ("harmonykids_app", "https://harmonykids.oneapp.dev/"),
    ("melodycare_app", "https://melodycare.vercel.app/"),
    ("msvtechnologies_services", "https://msvtechnologiescom.oneapp.dev/"),
    ("msvtechnologies_brandshop", "https://msvtechnologiescom.netlify.app/"),
    ("leatherindia_portal", "https://leatherindiaorg.netlify.app/"),
]

def capture(url, out_path, width=1440, height=900, delay=2):
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
    print("=== CAPTURING 32 SITE SCREENSHOTS ACROSS 4 VIEWPORTS ===")
    site_count = 0
    for page_name, url in PAGES:
        for vp_name, w, h in VIEWPORTS:
            out_file = f"screenshots/audit/site/{page_name}_{vp_name}_{w}x{h}.png"
            if capture(url, out_file, w, h):
                site_count += 1

    print(f"\n=== SITE SCREENSHOTS DONE: {site_count} ===")

    print("\n=== CAPTURING 18+ LIVE PROTOTYPE SCREENSHOTS ===")
    proto_count = 0
    for proto_name, url in PROTOTYPES:
        out_file = f"screenshots/audit/prototypes/{proto_name}_1440x900.png"
        if capture(url, out_file, 1440, 900):
            proto_count += 1

    print(f"\n=== PROTOTYPE SCREENSHOTS DONE: {proto_count} ===")
    print(f"TOTAL SCREENSHOTS CAPTURED: {site_count + proto_count}")

if __name__ == "__main__":
    main()

