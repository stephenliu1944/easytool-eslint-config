module.exports = {
  extends: ['./common/react', './common/typescript', './common/dev'].map(require.resolve)
};