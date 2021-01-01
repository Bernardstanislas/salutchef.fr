module.exports = function (config) {
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  // Static assets to pass through
  config.addPassthroughCopy("./src/fonts");
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./src/favicon.ico");
  config.addPassthroughCopy("./src/manifest.json");
  config.addPassthroughCopy("./src/robots.txt");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
