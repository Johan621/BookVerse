const fs = require('fs');
const path = require('path');

const walk = (dir, ext) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file, ext));
    } else {
      if (file.endsWith(ext)) results.push(file);
    }
  });
  return results;
};

const tsxFiles = walk('src', '.tsx');
const audit = {
  hrefs: [],
  buttons: []
};

tsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Find hrefs
  const hrefRegex = /href=["'{]([^"'{}]+)["'}]/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    audit.hrefs.push({ file, link: match[1] });
  }

  // Find buttons (crude regex for Button and MagneticButton)
  const buttonRegex = /<(Button|MagneticButton)[^>]*>/g;
  while ((match = buttonRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const hasOnClick = fullTag.includes('onClick');
    const hasAsChild = fullTag.includes('asChild');
    const isSubmit = fullTag.includes('type="submit"');
    audit.buttons.push({ file, tag: match[1], hasOnClick, hasAsChild, isSubmit, fullTag });
  }
});

fs.writeFileSync('audit_results.json', JSON.stringify(audit, null, 2));
