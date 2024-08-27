module.exports = {
  "extends": [
    "next/core-web-vitals",
    "plugin:import/recommended",
    "prettier"
  ],
  "rules": {
    "newline-before-return": "off",
    "jsx-a11y/alt-text": "off",
    "react/display-name": "off",
    "react/no-children-prop": "off",
    "@next/next/no-img-element": "off",
    "@next/next/no-page-custom-font": "off",
    "lines-around-comment": [
      "error",
      {
        "beforeBlockComment": true,
        "beforeLineComment": true,
        "allowBlockStart": true,
        "allowObjectStart": true,
        "allowArrayStart": true
      }
    ],
    "padding-line-between-statements": "off",
  
    "import/newline-after-import": [
      "error",
      {
        "count": 1
      }
    ],
   
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/parsers": {},
    "import/resolver": {
      "node": {},
      "typescript": {
        "project": "./jsconfig.json"
      }
    }
  },
  "overrides": []
};