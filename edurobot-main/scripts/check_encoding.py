import chardet
import os

files = [
    'edurobot5/js/data/math/144/index.js',
    'edurobot5/js/data/math/145/index.js'
]

for file in files:
    if os.path.exists(file):
        with open(file, 'rb') as f:
            rawdata = f.read()
            result = chardet.detect(rawdata)
            print(f"File: {file}")
            print(f"Encoding: {result['encoding']}")
            print(f"Confidence: {result['confidence']}")
            print(f"First 20 bytes: {rawdata[:20].hex(' ')}")
            print("-" * 20)
    else:
        print(f"File not found: {file}")
