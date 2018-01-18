// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default:

module.exports = {
  stylesheets: [
    //{
    //  name: 'site'
    //},
    {
      name: 'bootstrap'
    },
    {
      name: 'navbar'
    },
    {
      name: 'footer'
    },
    {
      name: 'projects'
    },
    {
      name: 'styles'
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
