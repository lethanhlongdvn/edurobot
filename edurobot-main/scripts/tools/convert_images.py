import os
from PIL import Image
import glob

IMAGE_DIR = "hinh_anh"
CODE_DIRS = ["js", "css", "index.html", "teacher.html", "teacher-toan.html", "teacher-dashboard.html"]

# 1. Convert Images
converted_files = []

for root, _, files in os.walk(IMAGE_DIR):
    for file in files:
        if file.lower().endswith('.webp'):
            base_name = os.path.splitext(file)[0]
            # Since we don't know the exact original extension, we try both commonly used ones in this project
            converted_files.append((base_name + '.png', file))
            converted_files.append((base_name + '.jpg', file))
            converted_files.append((base_name + '.jpeg', file))

print(f"Total converted: {len(converted_files)} images.")

# 2. Update References
extensions_to_update = ['.js', '.html', '.css', '.md']

for path_to_check in CODE_DIRS:
    if os.path.isfile(path_to_check):
        files_to_process = [path_to_check]
    else:
        files_to_process = []
        for ext in extensions_to_update:
            files_to_process.extend(glob.glob(os.path.join(path_to_check, f"**/*{ext}"), recursive=True))
            
    for f_path in files_to_process:
        try:
            with open(f_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old_name, new_name in converted_files:
                # Be careful, replace exactly the filename.
                new_content = new_content.replace(old_name, new_name)
                
            if new_content != content:
                with open(f_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated references in {f_path}")
        except Exception as e:
            print(f"Error updating {f_path}: {e}")

print("Done updating references.")
