const fs = require('fs');
const path = require('path');

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') && f !== 'Index.tsx' && f !== 'Books.tsx' && f !== 'Shop.tsx');

for (const file of files) {
  let content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  
  content = content.replace(/className="bg-white border border-gray-100 shadow-xl rounded-3xl\s*(mb-\d+)?\s*"/g, (match, mb) => {
    return 'className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500' + (mb ? ' ' + mb : '') + '"';
  });

  fs.writeFileSync(path.join(pagesDir, file), content, 'utf8');
}
console.log('Cards fixed globally');
