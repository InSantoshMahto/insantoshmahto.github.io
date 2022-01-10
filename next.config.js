const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = {
  assetPrefix: isGhPages ? "https://insantoshmahto.github.io/" : "",
};
