module.exports = require("babel-jest").createTransformer(
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "corejs": 3,
          "debug": false,
          "useBuiltIns": "usage"
        }
      ],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    "plugins": [
      [
        "babel-plugin-root-import",
        {
          "paths": [
            {
              "rootPathSuffix": ".",
              "rootPathPrefix": "^"
            },
            {
              "rootPathSuffix": ".Webpack",
              "rootPathPrefix": "!"
            },
            {
              "rootPathSuffix": "src",
              "rootPathPrefix": "~"
            }
          ]
        }
      ],
      [
        "module-resolver",
        {
          "root": [
            "./project/src",
            "./project/assets",
            "./project/content"
          ]
        }
      ],
      [
        "transform-class-properties",
        {
          "spec": true
        }
      ],
      [
        "react-css-modules",
        {
          "webpackHotModuleReloading": true
        }
      ],
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-private-methods",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-export-extensions",
      "@babel/transform-runtime",
      "add-module-exports",
      "transform-export-extensions",
      "react-hot-loader/babel"
    ]
  }
);
