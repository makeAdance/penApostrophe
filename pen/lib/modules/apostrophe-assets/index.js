// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default:

module.exports = {
  stylesheets: [
    //{
    //  name: 'site'
    //},
    {
      name: 'bootstrap.min'
    }
  ],
  scripts: [
    {
      name: 'site'
    },
    {
      name: 'bootstrap.min'
    }
  ]
};
