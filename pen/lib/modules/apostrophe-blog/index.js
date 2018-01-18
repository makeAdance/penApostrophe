var moment = require('moment');

module.exports = {

    alias: 'projects',
    label: 'Project',

  contextual: true,

  addFields: [
    {
      name: '_author',
      label: 'Author',
      type: 'joinByOne',
      withType: 'apostrophe-user',
      idField: 'userId',
    }
  ],

    beforeSave: function(self, options) {

        console.log(self.toString());
        console.log(options.toString());

    }
  
};
