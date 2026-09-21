const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');

assert(html.includes('#final-collage{'), 'Final collage container style is missing');
assert(/#final-collage\{[^}]*height:clamp\(260px,58vh,420px\)/s.test(html), 'Final collage needs a responsive clamp height');
assert(html.includes('const cols = wide ? 3 : 2;'), 'Adaptive grid column count is missing');
assert(html.includes('const rows = Math.ceil(photos.length / cols);'), 'Adaptive grid row count is missing');
assert(html.includes('const gridWidth = cols * cardWidth + (cols - 1) * gap;'), 'Grid width calculation is missing');
assert(html.includes('const gridHeight = rows * cardHeight + (rows - 1) * gap;'), 'Grid height calculation is missing');
assert(html.includes('fig.style.left = Math.round(startX + col * (cardWidth + gap)) + \'px\';'), 'Grid x placement is missing');
assert(html.includes('fig.style.top = Math.round(startY + row * (cardHeight + gap)) + \'px\';'), 'Grid y placement is missing');

console.log('final-collage smoke tests passed');
