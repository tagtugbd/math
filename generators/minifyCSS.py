import os
import re

def bundle_css(input_file):
    """Combines all @import files into one string."""
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found.")
        return ""

    base_path = os.path.dirname(input_file)
    combined_css = ""

    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()

        import_pattern = r'@import\s+(?:url\s*\()?\s*["\'](.+?\.css)["\']\s*\)?\s*;'
        imports = re.findall(import_pattern, content)

        if not imports:
            return content

        for css_import in imports:
            import_path = os.path.normpath(os.path.join(base_path, css_import))
            if os.path.exists(import_path):
                print(f"  [+] Adding: {css_import}")
                with open(import_path, 'r', encoding='utf-8') as f_import:
                    combined_css += f_import.read() + "\n"
            else:
                print(f"  [!] Missing: {import_path}")
        
        return combined_css
    except Exception as e:
        print(f"Error: {e}")
        return ""

def minify_css(css):
    """Advanced safe minification."""
    # 1. Remove comments
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.DOTALL)
    
    # 2. Remove whitespace
    css = re.sub(r'\s+', ' ', css)
    
    # 3. Remove spaces around structural symbols
    css = re.sub(r'\s*([\{\};:,])\s*', r'\1', css)
    
    # 4. Remove last semicolon before closing brace
    css = re.sub(r';}', '}', css)
    
    # 5. Shorten 0px to 0
    css = re.sub(r'\b0px\b', '0', css)
    css = re.sub(r'\b0rem\b', '0', css)
    css = re.sub(r'\b0em\b', '0', css)
    
    # 6. Shorten hex colors when possible (#ffffff -> #fff)
    css = re.sub(r'#([0-9a-fA-F])\1([0-9a-fA-F])\2([0-9a-fA-F])\3', r'#\1\2\3', css)
    
    # 7. Shorten decimals (0.5 -> .5)
    css = re.sub(r'\b0\.(\d+)', r'.\1', css)
    
    # 8. Remove spaces around + and fix negatives
    css = css.replace('+', ' + ')
    css = re.sub(r'\s+', ' ', css)
    css = css.replace(':- ', ':-').replace(',- ', ',-').replace('(- ', '(-')
    
    # 9. Remove trailing semicolons (safe)
    css = re.sub(r';}', '}', css)
    
    return css.strip()

def get_file_size(css):
    """Returns file size in KB."""
    return len(css.encode('utf-8')) / 1024

def run():
    SOURCE_FILE = '../assets/css/global.css'  
    OUTPUT_FILE = '../assets/css/style.min.css'
    
    raw_css = bundle_css(SOURCE_FILE)
    
    if raw_css:
        original_size = get_file_size(raw_css)
        print(f"Original size: {original_size:.2f} KB")
        
        print("Minifying with advanced safe compression...")
        final_css = minify_css(raw_css)
        
        final_size = get_file_size(final_css)
        saved = original_size - final_size
        percentage = (saved / original_size) * 100
        
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(final_css)
        
        print(f"\n✅ Success! Saved to {OUTPUT_FILE}")
        print(f"📊 Final size: {final_size:.2f} KB")
        print(f"💾 Saved: {saved:.2f} KB ({percentage:.1f}% reduction)")
        
        if " + " in final_css:
            print("✅ Math operator integrity: Spaces present around '+'")
    else:
        print("Failed: No CSS content found.")

if __name__ == "__main__":
    run()