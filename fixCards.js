const fs = require('fs');
const path = require('path');

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  
  // A robust regex to find bg-white ... rounded-3xl that lacks p-8 or p-10
  content = content.replace(/className="bg-white border border-gray-100 shadow-xl rounded-3xl\s*"/g, 
    'className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"');

  content = content.replace(/className="bg-white border border-gray-100 shadow-xl rounded-3xl\s+mb-8"/g, 
    'className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 mb-8"');
    
  // For PublicVoice.tsx that has hover:shadow-2xl transition-all duration-300 p-8 rounded-3xl
  content = content.replace(/className="bg-white border border-gray-100 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 p-8 rounded-3xl"/g, 
    'className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"');

  content = content.replace(/className="bg-white border border-gray-100 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 p-8"/g, 
    'className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"');
    
  fs.writeFileSync(path.join(pagesDir, file), content, 'utf8');
}
console.log('Cards fixed globally');
