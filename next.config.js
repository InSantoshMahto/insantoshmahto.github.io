const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  future: {
    webpack5: true,
  },
  assetPrefix: isGhPages ? 'https://insantoshmahto.github.io/' : '' 
};
