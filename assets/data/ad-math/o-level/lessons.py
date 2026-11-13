import glob
import html
import json
import os
from pathlib import Path
import re

# Define the target output directory path
OUTPUT_DIR = Path("../../../../o-level/additional-math/chapter-10-permutations-and-combinations")

# Updated Master Production Blueprint Layout Template Integration
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>

    <!-- Custom CSS File Framework -->
    <link
      href="/assets/css/style.min.css"
      media="print"
      onload="
        this.media = 'all';
        this.onload = null;
      "
      rel="stylesheet"
    />
    <noscript>
      <link href="/assets/css/style.min.css" rel="stylesheet" />
    </noscript>

    <!-- MathJax Configuration and Script engine for rendering LaTeX -->
    <script>
    MathJax = {{
    tex: {{
      inlineMath: [['\\\\(', '\\\\)']],
      displayMath: [['\\\\[', '\\\\]']],
      processEscapes: true
    }},
    options: {{
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }}
    }};
    </script>
    <script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <header>
      <div class="bar">
        <a class="brand" href="/" aria-label="Quotient home"
          >Quotient<i>.</i></a
        >
        <nav aria-label="Main">
          <ul>
            <li><a href="#topics">Topics</a></li>
            <li>
              <a href="/o-level/additional-math/solution-manual.html"
                >Add Math</a
              >
            </li>
            <li><a href="/o-level/math-d/solution-manual.html">Math D</a></li>
            <li>
              <a
                class="btn"
                href="/o-level/additional-math/chapter-9-trigonometry.html"
                >Start learning</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- Dynamic Content Hero Banner Area Section Module Block -->
      <div class="wrap hero">
        <div>
          <div class="crumbs">
            <a href="/">Home</a> /
            <a href="/o-level/additional-math/solution-manual.html"
              >Additional Mathematics /</a
            >
            <a href="/o-level/additional-math/chapter-10-permutations-and-combinations.html"
              >Chapter 10</a
            >
          </div>
          <h1>{title}</h1>
          <h2>{hero_subtitle}</h2>
          <p>
            {hero_description}
          </p>
          <div class="cta">
            <a class="btn" href="#topics">Browse topics</a>
            <a class="btn alt" href="#example">See a lesson</a>
          </div>
        </div>
        <div class="plot" aria-label="Interactive unit circle showing quadrant and trigonometric ratios">
          <div class="eq">
            <span id="eq">θ = 45°</span><small></small>
          </div>
          <svg id="unitCircleSvg" viewBox="-1.35 -1.35 2.7 2.7" role="img" aria-label="Unit circle with angle and projections">
            <!-- grid -->
            <g stroke="#ede6de" stroke-width="0.005" stroke-dasharray="0.02 0.02">
              <line x1="-1.3" y1="-0.5" x2="1.3" y2="-0.5" />
              <line x1="-1.3" y1="0.5" x2="1.3" y2="0.5" />
              <line x1="-0.5" y1="-1.3" x2="-0.5" y2="1.3" />
              <line x1="0.5" y1="-1.3" x2="0.5" y2="1.3" />
            </g>

            <!-- quadrant tints -->
            <rect x="0" y="-1.25" width="1.25" height="1.25" fill="#fd4239" fill-opacity="0.03" />
            <rect x="-1.25" y="-1.25" width="1.25" height="1.25" fill="#39a8fd" fill-opacity="0.03" />
            <rect x="-1.25" y="0" width="1.25" height="1.25" fill="#c9a227" fill-opacity="0.03" />
            <rect x="0" y="0" width="1.25" height="1.25" fill="#3aa86b" fill-opacity="0.03" />

            <g font-family="STIX Two Text, serif" font-size="0.22" font-weight="600" fill="#5c4e4d" opacity="0.35" text-anchor="middle" dominant-baseline="middle">
              <text x="0.65" y="-0.65">All</text>
              <text x="-0.65" y="-0.65">Sin</text>
              <text x="-0.65" y="0.65">Tan</text>
              <text x="0.65" y="0.65">Cos</text>
            </g>

            <!-- axes -->
            <g stroke="#1a1514" stroke-width="0.015">
              <line x1="-1.25" y1="0" x2="1.25" y2="0" />
              <line x1="0" y1="1.25" x2="0" y2="-1.25" />
            </g>

            <!-- unit circle -->
            <circle cx="0" cy="0" r="1" fill="none" stroke="#1a1514" stroke-width="0.012" />

            <!-- ticks -->
            <g font-family="STIX Two Text, serif" font-size="0.07" fill="#5c4e4d" text-anchor="middle">
              <text x="1.1" y="0.13">1</text>
              <text x="-1.1" y="0.13">−1</text>
              <text x="-0.1" y="-1.06">1</text>
              <text x="-0.1" y="1.14">−1</text>
              <text x="1.28" y="-0.04" font-size="0.08">0 / 2π</text>
              <text x="0" y="-1.3" font-size="0.08">½π</text>
              <text x="-1.3" y="-0.04" font-size="0.08">π</text>
              <text x="0" y="1.34" font-size="0.08">1.5π</text>
            </g>

            <!-- angle sector -->
            <path id="angleArc" fill="rgba(253,66,57,0.12)" stroke="#fd4239" stroke-width="0.01" />

            <!-- projections -->
            <line id="cosLine" x1="0" y1="0" x2="1" y2="0" stroke="#39a8fd" stroke-width="0.022" stroke-linecap="round" />
            <line id="sinLine" x1="1" y1="0" x2="1" y2="-1" stroke="#3aa86b" stroke-width="0.022" stroke-linecap="round" />
            <line id="hypLine" x1="0" y1="0" x2="1" y2="-1" stroke="#1a1514" stroke-width="0.014" />

            <!-- moving point -->
            <g id="pt">
              <circle id="pointP" cx="1" cy="0" r="0.045" fill="#39a8fd" stroke="#1a1514" stroke-width="0.015" />
              <text id="pointLabel" x="1.08" y="-0.08" font-family="STIX Two Text, serif" font-style="italic" font-size="0.075" fill="#1a1514">P(1.00, 0.00)</text>
            </g>

            <text id="angleArcText" x="0.25" y="-0.1" font-family="STIX Two Text, serif" font-size="0.075" fill="#fd4239" font-style="italic">θ</text>
          </svg>

          <div class="ctrl">
            <label for="angleSlider">θ</label>
            <input id="angleSlider" type="range" min="0" max="360" step="1" value="45" />
            <output id="angleDisplay">45°</output>

            <label for="unitToggle" style="margin-left:auto">unit</label>
            <select id="unitToggle" style="font-family:inherit;font-size:14px;background:transparent;border:1px solid var(--grid);border-radius:6px;padding:2px 6px;color:var(--ink)">
              <option value="deg">deg</option>
              <option value="rad">rad</option>
            </select>
          </div>
        </div>
      </div>

    <!-- Primary Content Grid Flow Block Container -->
    <main>
        <div class="study-area">{content}</div>
    </main>

    <!-- Permanent Brand Site Footer Area Component -->
    <footer>
      <div class="footer-container">
        <div class="footer-column">
          <a aria-label="Japanify Home" href="/"
            ><img
              alt="Japanify - Learn Japanese Online"
              class="footer-image"
              height="33"
              src="/assets/images/logo.svg"
              width="105"
          /></a>
          <div class="always-open" style="padding: 0">
            Learn Japanese Online.
          </div>
          <div class="accordion-content">
            <p class="description">
              Master Japanese through short lessons &amp; culture bites.
            </p>
          </div>
        </div>
        <div class="footer-column">
          <div class="accordion">
            学 Learn
            <svg aria-hidden="true" class="arrow" height="20" width="20">
              <use href="#icon-chevron-down"></use>
            </svg>
          </div>
          <div class="accordion-content">
            <ul>
              <li>
                <a href="/pages/Japanese-full-lessons-jlpt-jft-online.html"
                  >人 Full Lessons</a
                >
              </li>
              <li>
                <a href="/pages/complete-japanese-kanji-for-n5-n4-n3.html"
                  >字 Kanji Library</a
                >
              </li>
              <li>
                <a
                  href="/pages/complete-japanese-grammar-for-jlpt-jft-exam.html"
                  >法 Grammar Rules</a
                >
              </li>
              <li>
                <a
                  href="/pages/complete-japanese-jlpt-jft-vocabulary-and-conversation.html"
                  >語 Vocabulary Library</a
                >
              </li>
              <li>
                <a href="/pages/japanese-hiragana-katakana-lessons.html"
                  >あ Hiragana &amp; Katakana</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-column">
          <div class="accordion">
            練 Practice
            <svg aria-hidden="true" class="arrow" height="20" width="20">
              <use href="#icon-chevron-down"></use>
            </svg>
          </div>
          <div class="accordion-content">
            <ul>
              <li>
                <a href="/pages/japanese-kanji-shortlisted-quiz.html"
                  >字 Kanji Practice</a
                >
              </li>
              <li>
                <a href="/pages/japanese-reading-practice.html"
                  >書 Reading Practice</a
                >
              </li>
              <li>
                <a href="/pages/complete-japanese-kanji-for-n5-n4-n3.html"
                  >あ Alphabet Practice</a
                >
              </li>
              <li>
                <a href="/pages/japanese-grammar-quiz.html"
                  >会 Grammar Practice</a
                >
              </li>
              <li>
                <a href="/pages/japanese-vocabulary-quiz.html"
                  >語 Vocabulary Practice</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-column">
          <div class="accordion">
            技 Tips &amp; Tricks
            <svg aria-hidden="true" class="arrow" height="20" width="20">
              <use href="#icon-chevron-down"></use>
            </svg>
          </div>
          <div class="accordion-content">
            <ul>
              <li>
                <a href="/pages/japanese-study-plans.html">計 Study Plans</a>
              </li>
              <li>
                <a href="/pages/kanji-memory-hacks.html">記 Life in Japan</a>
              </li>
              <li>
                <a href="/pages/japanese-pronunciation-tips.html"
                  >列 Study Materials</a
                >
              </li>
              <li>
                <a href="/pages/japanese-pronunciation-tips.html"
                  >音 Pronunciation Tips</a
                >
              </li>
              <li>
                <a href="/pages/kanji-memory-hacks.html"
                  >記 Kanji Memory Hacks</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-column">
          <div class="accordion">
            隨 Follow Us
            <svg aria-hidden="true" class="arrow" height="20" width="20">
              <use href="#icon-chevron-down"></use>
            </svg>
          </div>
          <div class="accordion-content">
            <ul>
              <li>
                <a
                  class="social-link"
                  href="mailto:japanify.bd@gmail.com"
                  target="_blank"
                  ><svg
                    aria-hidden="true"
                    class="footer-icon"
                    height="24"
                    width="24"
                  >
                    <use href="#icon-mail"></use>
                  </svg>
                  E-mail</a
                >
              </li>
              <li>
                <a class="social-link" href="/pages/about.html"
                  ><svg
                    aria-hidden="true"
                    class="footer-icon"
                    height="24"
                    width="24"
                  >
                    <use href="#icon-info"></use>
                  </svg>
                  About Us</a
                >
              </li>
              <li>
                <a
                  class="social-link"
                  href="https://www.facebook.com/@japanify"
                  rel="noopener me"
                  target="_blank"
                  ><svg
                    aria-hidden="true"
                    class="footer-icon"
                    height="24"
                    width="24"
                  >
                    <use href="#icon-facebook"></use>
                  </svg>
                  Facebook</a
                >
              </li>
              <li>
                <a
                  class="social-link"
                  href="https://www.instagram.com/japanify.bd"
                  rel="noopener me"
                  target="_blank"
                  ><svg
                    aria-hidden="true"
                    class="footer-icon"
                    height="24"
                    width="24"
                  >
                    <use href="#icon-instagram"></use>
                  </svg>
                  Instagram</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <span> © Japanify 2026 | All Rights Reserved | </span
        ><a href="/pages/credits.html">Credits </a>
      </div>
    </footer>

    <!-- Global JavaScript Entry Point -->
    <script
      nonce="&lt;?= $csp_nonce ?&gt;"
      src="/assets/javascripts/main.js"
      type="module"
    ></script>
    <script
      nonce="&lt;?= $csp_nonce ?&gt;"
      src="/assets/javascripts/circle.js"
      type="module"
    ></script>
</body>
</html>
"""


def parse_js_file(file_path):
    """
    Extracts the JSON-like object from a JS file using a
    string-aware character scanner so that LaTeX contents such as
    '\\text{Amplitude: }' or URLs like 'http://x' are never corrupted.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    start_idx = content.find('{')
    end_idx = content.rfind('}')
    if start_idx == -1 or end_idx == -1:
        raise ValueError(f"Could not find JSON object in {file_path}")

    js = content[start_idx:end_idx + 1]
    out = []
    i, n = 0, len(js)

    while i < n:
        ch = js[i]

        # ---------- string literal: copy verbatim, normalise to double quotes ----------
        if ch in ('"', "'"):
            q = ch
            out.append('"')
            i += 1
            while i < n:
                c = js[i]
                if c == '\\':                       # keep escape pair as-is
                    out.append(js[i:i + 2])
                    i += 2
                    continue
                if c == q:                          # end of string
                    out.append('"')
                    i += 1
                    break
                if c == '"':
                    out.append('\\"')
                elif c == '\n':
                    out.append('\\n')
                elif c == '\r':
                    out.append('\\r')
                elif c == '\t':
                    out.append('\\t')
                else:
                    out.append(c)
                i += 1
            continue

        # ---------- line comment (only outside strings) ----------
        if ch == '/' and i + 1 < n and js[i + 1] == '/':
            while i < n and js[i] != '\n':
                i += 1
            continue

        # ---------- block comment ----------
        if ch == '/' and i + 1 < n and js[i + 1] == '*':
            i += 2
            while i + 1 < n and not (js[i] == '*' and js[i + 1] == '/'):
                i += 1
            i += 2
            continue

        # ---------- unquoted key detection:   { word :   or   , word : ----------
        if ch in '{,':
            j = i + 1
            while j < n and js[j].isspace():
                j += 1
            k = j
            while k < n and (js[k].isalnum() or js[k] in '_$'):
                k += 1
            m = k
            while m < n and js[m].isspace():
                m += 1
            if k > j and m < n and js[m] == ':':
                out.append(ch)                       # { or ,
                out.append(js[i + 1:j])              # whitespace after { or ,
                out.append('"' + js[j:k] + '"')      # quoted key
                out.append(js[k:m + 1])              # whitespace + colon
                i = m + 1
                continue

        out.append(ch)
        i += 1

    cleaned = ''.join(out)
    cleaned = re.sub(r',(\s*[\]}])', r'\1', cleaned)   # strip trailing commas

    try:
        return json.loads(cleaned)
    except json.JSONDecodeError as e:
        pos = e.pos
        print(f"Error parsing {file_path}: {e}")
        print(f"  Context: ...{cleaned[max(0, pos - 60):pos]}|>>|{cleaned[pos:pos + 60]}...")
        raise


def generate_html(data, output_path):
    """Generates the HTML file with Hero Header sections and stylized layout conversions."""
    content_html = ""

    for section in data.get('sections', []):
        section_num = section.get('sectionNumber', '')
        instruction = section.get('instruction', '')

        content_html += f'<section class="problem-section">\n'
        content_html += f'  <h2 class="section-heading">{section_num}. {html.escape(str(instruction))}</h2>\n'

        for problem in section.get('problems', []):
            prob_id = problem.get('id', '')
            question = problem.get('question', '')
            steps = problem.get('steps', [])

            content_html += f'  <div class="problem" id="p-{section_num}-{html.escape(str(prob_id))}">\n'
            content_html += f'    <p class="question">{html.escape(str(prob_id))}. \\( {question} \\)</p>\n'

            if steps:
                content_html += '    <div class="m-steps">\n'
                for step in steps:
                    step_str = step.strip()
                    # 1. Starting pattern: "LHS = ..." or "RHS = ..."
                    start_match = re.match(r'^([LR]HS)\s*=\s*(.*)', step_str)
                    # 2. Ending pattern:   "... = RHS" or "... = LHS"
                    end_match = re.search(r'(.?)\s=\s*([LR]HS)(?:\s*\[a-zA-Z]+)\s$', step_str)

                    if start_match:
                        side_label = start_match.group(1)
                        math_expression = start_match.group(2)
                        content_html += (
                            f'      <div class="m-step">'
                            f'<span class="step-side-label">{side_label}</span>'
                            f'\\[ = {math_expression} \\]'
                            f'</div>\n'
                        )
                    elif end_match:
                        math_expression = end_match.group(1)
                        side_label = end_match.group(2)
                        if math_expression.startswith('='):
                            display_math = f'\\[ {math_expression} \\]'
                        else:
                            display_math = f'\\[ = {math_expression} \\]'
                        content_html += (
                            f'      <div class="m-step">'
                            f'{display_math}'
                            f'<span class="step-side-label step-side-label-end">{side_label}</span>'
                            f'</div>\n'
                        )
                    else:
                        content_html += f'      <div class="m-step">\\[ {step_str} \\]</div>\n'
                content_html += '    </div>\n'

            content_html += '  </div>\n'
        content_html += '</section>\n'

    # Build Hero block content conditionally based on dataset variables safely
    subtitle_raw = data.get('subtitle', '')
    desc_raw = data.get('description', '')
    subtitle_html = f'<h2>{html.escape(subtitle_raw)}</h2>' if subtitle_raw else ''
    desc_html = f'<p>{html.escape(desc_raw)}</p>' if desc_raw else ''

    # Inject layout mapping properties into master schema output block
    final_html = HTML_TEMPLATE.format(
        title=html.escape(data.get('title', 'Math Solutions')),
        hero_subtitle=subtitle_html,
        hero_description=desc_html,
        content=content_html
    )

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_html)
    print(f"✅ Generated: {output_path}")


def slugify(text):
    """Turn 'Trigonometric Graphs and Absolute Values' →
       'trigonometric-graphs-and-absolute-values'.
       Dots also become hyphens, so '9.5' → '9-5'."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s.-]', '', text)   # keep letters/digits/dot/hyphen
    text = re.sub(r'[\s_.]+', '-', text)    # spaces, underscores, AND dots → hyphen
    text = re.sub(r'-{2,}', '-', text)      # collapse repeated hyphens
    return text.strip('-')


def make_output_filename(js_file, title):
    """
    Build the output filename from the JS filename prefix + slugified title,
    combined with the target OUTPUT_DIR path.
    """
    # Numeric prefix comes from the JS filename — always unique per file.
    base_raw = re.sub(r'-data\.js$', '', js_file, flags=re.I).strip()
    base = slugify(base_raw)

    # Strip any leading "9.5:", "9.7 -", "12." etc. from the title text
    title_body = re.sub(r'^\s*[\d.]+\s*[:\-–—.]?\s*', '', title or '')
    slug = slugify(title_body)

    if base and slug:
        filename = f"{base}-{slug}.html"
    elif base:
        filename = f"{base}.html"
    elif slug:
        filename = f"{slug}.html"
    else:
        filename = "untitled.html"

    return OUTPUT_DIR / filename


def main():
    # Ensure the output directory structure exists before writing files
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    js_files = sorted(glob.glob('*-data.js'))
    if not js_files:
        print("❌ No files matching '*-data.js' found in the current directory.")
        return

    print(f"🔍 Found {len(js_files)} data files. Processing...\n")

    seen_outputs = {}
    for js_file in js_files:
        try:
            data = parse_js_file(js_file)
            title = data.get('title', 'untitled')
            output_file = make_output_filename(js_file, title)

            # Diagnostic — shows exactly what was parsed from each file
            print(f"📄 {js_file}")
            print(f"   parsed title : {title!r}")
            print(f"   output file  : {output_file}")

            if output_file in seen_outputs:
                print(f"   ⚠️  collision: {output_file} already written by {seen_outputs[output_file]}")
            seen_outputs[output_file] = js_file

            # Convert output_file Path object to string for file writing
            generate_html(data, str(output_file))
        except Exception as e:
            print(f"❌ Failed to process {js_file}: {e}")


if __name__ == "__main__":
    main()