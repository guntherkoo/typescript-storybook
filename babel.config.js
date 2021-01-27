module.exports = {
  "env": {
    "development": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current",
            },
            "useBuiltIns": "usage",
            "corejs": 3,
            "debug": true
          }
        ],
        "@babel/preset-react",
      ],
      "plugins": [
        [
          "module-resolver",
          {
            "root": ["./"],
            "alias": {
              "components": "./components",
            },
          },
        ],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from",
        "inline-react-svg",
      ]
    },
    "test": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current",
            },
            "useBuiltIns": "usage",
            "corejs": 3,
            "debug": true
          }
        ],
        "@babel/preset-react",
      ],
      "plugins": [
        [
          "module-resolver",
          {
            "root": ["./"],
            "alias": {
              "components": "./components",
            },
          },
        ],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from",
        "inline-react-svg",
      ]
    },
    "dist": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current",
            },
            "useBuiltIns": "usage",
            "corejs": 3,
            "debug": true,
            "modules": false,
          },
        ],
        "@babel/preset-react",
      ],
      "plugins": [
        [
          "css-modules-transform",
          {
            "preprocessCss": "./module-exporting.js",
            "keepImport": true,
            "devMode": false,
            "generateScopedName": "[name]__[local]___[hash:base64:5]",
            "extensions": [".scss"],
            "extractCss": {
              "dir": "./dist",
              "relativeRoot": "./components",
              "filename": "[path]/[name].scss",
            },
          }
        ],
        [
          "module-resolver",
          {
            "root": ["./"],
            "alias": {
              "components": "./components",
            },
          }
        ],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from",
        "inline-react-svg",
      ]
    },
  },
};
