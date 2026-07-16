import os
import subprocess
import sys

# Reconfigure stdout to utf-8 for Windows console
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())

def check_syntax(filepath):
    try:
        result = subprocess.run(['node', '--check', filepath], capture_output=True, text=True, encoding='utf-8')
        if result.returncode != 0:
            return result.stderr
        return None
    except Exception as e:
        return str(e)

def main():
    root_dir = 'js/data'
    error_count = 0
    checked_count = 0
    
    with open('syntax_errors.log', 'w', encoding='utf-8') as log:
        for root, dirs, files in os.walk(root_dir):
            for file in files:
                if file.endswith('.js'):
                    filepath = os.path.join(root, file)
                    error = check_syntax(filepath)
                    checked_count += 1
                    if error:
                        msg = f"ERROR: {filepath}\n{error}\n"
                        # Print to log file always
                        log.write(msg)
                        # Try printing to console
                        try:
                            print(msg)
                        except:
                            pass
                        error_count += 1
    
    summary = f"\nSummary: {checked_count} files checked, {error_count} errors found. Details in syntax_errors.log"
    print(summary)

if __name__ == '__main__':
    main()
