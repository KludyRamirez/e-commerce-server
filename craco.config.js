const mime = require("mime");

module.exports = {
  devServer: {
    mimeTypes: {
      typeMap: {
        "application/javascript": ["js"],
        "text/css": ["css"],
      },
      force: true,
    },
  },
};
