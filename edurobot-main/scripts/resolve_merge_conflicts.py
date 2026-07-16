import os
import re

def resolve_conflicts(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    in_conflict = False
    side = None # 0: before =======, 1: after =======
    
    current_conflict_block = []
    head_content = []
    other_content = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith('<<<<<<<'):
            in_conflict = True
            head_content = []
            other_content = []
            side = 0
            i += 1
            continue
        
        if line.startswith('======='):
            side = 1
            i += 1
            continue
            
        if line.startswith('>>>>>>>'):
            # RESOLUTION: Pick HEAD content (side 0)
            # However, check if HEAD content is empty but the other is not.
            # In this project, usually HEAD is the standardized one.
            if head_content:
                new_lines.extend(head_content)
            else:
                new_lines.extend(other_content)
            
            in_conflict = False
            i += 1
            continue
            
        if in_conflict:
            if side == 0:
                head_content.append(line)
            else:
                other_content.append(line)
        else:
            new_lines.append(line)
        i += 1
        
    content = "".join(lines)
    new_content = "".join(new_lines)
    
    if content != new_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    root_dir = 'js/data'
    fixed_count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.js'):
                filepath = os.path.join(root, file)
                if resolve_conflicts(filepath):
                    print(f"Resolved conflicts in: {filepath}")
                    fixed_count += 1
    print(f"Total files resolved: {fixed_count}")

if __name__ == '__main__':
    main()
