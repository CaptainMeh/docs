// Minimal Sanity CLI config so `npx sanity dataset import` knows the target
// project/dataset for the Kardion test import. Uses your `sanity login` creds.
// No token is stored here.
module.exports = {
  api: {
    projectId: 'r59cxxkd',
    dataset: 'production',
  },
}
