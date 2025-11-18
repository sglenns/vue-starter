export default {
  "{src,tests}/**/*.{css,scss,md}": ["prettier --write"],
  "{src,tests}/**/*.{json,js,jsx}": ["prettier --write", "eslint --fix"],
  "{src,tests}/**/*.{ts,tsx,vue}": [
    "prettier --write",
    "eslint --fix",
    () => `vue-tsc -b`,
  ],
};
