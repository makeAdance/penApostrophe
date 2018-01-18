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
            contextual: true
        },

        {
            name: 'authorName',
            label: 'Author Username',
            type: 'string',
            contextual: true
        }
    ],

    construct: function (self, options) {
        self.beforeSave = function (req, piece, options, callback) {

            console.log(req.user);


            piece._author = req.user["_id"];
            piece.authorName = req.user.username;

            console.log(piece);


            return callback();
        };
    }

};
