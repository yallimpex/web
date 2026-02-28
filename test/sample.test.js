const fs = require('fs');
const path = require('path');

test('index.html contains company name and aggregator/import India text', () => {
  const file = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8');
  expect(file).toMatch(/Yall Impex/);
  expect(file.toLowerCase()).toMatch(/aggregator/);
  expect(file.toLowerCase()).toMatch(/india/);
});
