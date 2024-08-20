const { merge } = require("webpack-merge");
const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

const PurgeCSSPlugin = require('@fullhuman/postcss-purgecss');

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name].[fullhash:5].js",
    chunkFilename: "[id].[fullhash:5].css",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  PurgeCSSPlugin({
                    content: [
                      path.join(__dirname, "src/**/*.html"),
                      path.join(__dirname, "src/**/*.js"),
                      path.join(__dirname, "src/**/*.jsx"),
                      path.join(__dirname, "src/**/*.ts"),
                      path.join(__dirname, "src/**/*.tsx"),
                    ],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
        },
        exclude: /\/node_modules\//,
      }),
      new CssMinimizerPlugin(),
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash:5].css",
      chunkFilename: "[id].[fullhash:5].css"
    }),
  ],
});
