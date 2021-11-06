const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* by default config  option Read For More Options
	here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
});

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
