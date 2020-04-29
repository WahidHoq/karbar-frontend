module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{json,ico,html,png,js,txt,css,jpg,svg}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/serviceWorker.js",
  "injectionPoint": '[[{}],[{}]]'
};