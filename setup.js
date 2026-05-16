const fs = require('fs');
const path = require('path');

const clientSrcDir = path.join(__dirname, 'client', 'src');
const pagesDir = path.join(clientSrcDir, 'pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

let imports = "import { BrowserRouter, Routes, Route } from 'react-router-dom';\n";
imports += "import NotebookLayout from './components/NotebookLayout';\n";
imports += "import LandingPage from './pages/LandingPage';\n";
for(let i=1; i<=11; i++) {
  imports += "import Question" + i + " from './pages/Question" + i + "';\n";
}

let routes = "";
for(let i=1; i<=11; i++) {
  routes += "          <Route path=\"question-" + i + "\" element={<Question" + i + " />} />\n";
}

const appCode = imports + "\n" +
"function App() {\n" +
"  return (\n" +
"    <BrowserRouter>\n" +
"      <Routes>\n" +
"        <Route path=\"/\" element={<NotebookLayout />}>\n" +
"          <Route index element={<LandingPage />} />\n" +
routes +
"        </Route>\n" +
"      </Routes>\n" +
"    </BrowserRouter>\n" +
"  );\n" +
"}\n\n" +
"export default App;\n";

fs.writeFileSync(path.join(clientSrcDir, 'App.jsx'), appCode);

for (let i = 1; i <= 11; i++) {
  const qCode = "import React from 'react';\n\n" +
  "const Question" + i + " = () => {\n" +
  "  return (\n" +
  "    <div className=\"space-y-6\">\n" +
  "      <h2 className=\"text-3xl md:text-4xl font-bold text-stone-800 border-b-2 border-stone-800/20 pb-4\">\n" +
  "        שאלה " + i + "\n" +
  "      </h2>\n" +
  "      <div className=\"text-stone-800/90 leading-relaxed space-y-4 text-lg\">\n" +
  "        <p>\n" +
  "          תוכן השאלה ימוקם כאן.\n" +
  "        </p>\n" +
  "        <p className=\"font-mono text-sm bg-black/5 p-4 rounded\" dir=\"ltr\">\n" +
  "          // English code or terms can go here\n" +
  "        </p>\n" +
  "      </div>\n" +
  "    </div>\n" +
  ");\n" +
  "};\n\n" +
  "export default Question" + i + ";\n";
  
  fs.writeFileSync(path.join(pagesDir, 'Question' + i + '.jsx'), qCode);
}
console.log('App and questions written successfully');
