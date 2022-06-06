const path = require('path');
const fs = require('fs');
const {defineConfig} = require('vite');

// make sure vite picks up all html files in root, needed for vite build
const allHtmlEntries = fs
  .readdirSync('.')
  .filter((file) => path.extname(file) === '.html')
  .reduce((acc, file) => {
    acc[path.basename(file, '.html')] = path.resolve(__dirname, file);

    return acc;
  }, {});

// https://vitejs.dev/config/
module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: allHtmlEntries,
    },
  },
});
