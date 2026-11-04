import subprocess
import os
import shutil

PROTOTYPE_MAP = [
    ("meax", "screenshots/audit/prototypes/meax_website_1440x900.png", "meax.jpg"),
    ("veterinarios", "screenshots/audit/prototypes/veterinarios_guest_1440x900.png", "veterinarios.jpg"),
    ("elmanantial", "screenshots/audit/prototypes/elmanantial_admin_1440x900.png", "elmanantial.jpg"),
    ("team1display", "screenshots/audit/prototypes/team1display_customer_1440x900.png", "team1display.jpg"),
    ("kelioniukryptis", "screenshots/audit/prototypes/kelioniukryptis_customer_1440x900.png", "kelioniukryptis.jpg"),
    ("stealthmanager", "screenshots/audit/prototypes/stealthmanager_builder_1440x900.png", "stealthmanager.jpg"),
    ("ovella", "screenshots/audit/prototypes/ovella_calc_1440x900.png", "ovella.jpg"),
    ("harmonykids", "screenshots/audit/prototypes/harmonykids_app_1440x900.png", "harmonykids.jpg"),
    ("msvtechnologies", "screenshots/audit/prototypes/msvtechnologies_services_1440x900.png", "msvtechnologies.jpg"),
    ("leatherindia", "screenshots/audit/prototypes/leatherindia_portal_1440x900.png", "leatherindia.jpg"),
]

def process_image(src, dest_name):
    if not os.path.exists(src):
        print(f"Source not found: {src}")
        return
    
    # 1. Convert and resize to 1200x675 (16:9) using sips
    temp_jpg = f"/tmp/{dest_name}"
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "85", "--resampleWidth", "1200", src, "--out", temp_jpg], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    
    # Target 1: images/<dest_name>
    target_img = os.path.join("images", dest_name)
    shutil.copyfile(temp_jpg, target_img)
    print(f"Updated {target_img} ({os.path.getsize(target_img)} bytes)")
    
    # Target 2: root <dest_name> if it exists
    if os.path.exists(dest_name):
        shutil.copyfile(temp_jpg, dest_name)
        print(f"Updated root {dest_name}")

def main():
    print("=== REPLACING PROTOTYPE IMAGES WITH REAL LIVE SCREENSHOTS ===")
    for name, src, dest in PROTOTYPE_MAP:
        process_image(src, dest)
    
    # Also check if harmonykids.svg was used in prototypes/index.html - let's make sure it can use harmonykids.jpg or create a high-res SVG wrapper
    # Let's inspect prototypes/index.html to see how harmonykids is referenced
    print("Done processing prototype images.")

if __name__ == "__main__":
    main()

