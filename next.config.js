const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  future: {
    webpack5: true,
  },
  assetPrefix: ghPages ? '/insantoshmahto.github.io/' : '' 
};
