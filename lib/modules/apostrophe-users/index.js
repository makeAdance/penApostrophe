// This configures the apostrophe-users module to add an admin-level
// group by default:

module.exports = {
  // groups: [
  //   {
  //     title: 'guest',
  //     permissions: []
  //   },
  //   {
  //     title: 'admin',
  //     permissions: ['admin']
  //   },
  
  
  //   {
  //     title: 'penUser',
  //     permissions: ['edit']
  //   }
  // ],


    //
    // beforeConstruct: function(self, options) {
    //     options.addFields = [
    //         {
    //             type: 'joinByOne',
    //             name: '_profile',
    //             label: 'Profile',
    //             idField: 'profileId',
    //             withType: 'profile'
    //         }
    //     ].concat(options.addFields || []);
    //
    // },
    //
    // construct: function (self,options) {
    //
    //     self.beforeSave = function (req, piece, options, callback) {
    //
    //
    //         console.log("Test before save");
    //
    //
    //         self.apos.modules['profiles'].generate(1);
    //
    //         //
    //         // self.insert({},
    //         //     { disabled: false,
    //         //     trash: false,
    //         //     type: 'profile',
    //         //     firstName: piece.firstName,
    //         //     lastName: piece.lastName,
    //         //     title: piece.username,
    //         //         slug:piece.slug+"-profile"
    //         //
    //         //     },{permissions:false},function (result,err) {
    //         //     if(err) console.log(err);
    //         //     console.log("profile insert done");
    //         //         console.log(result);
    //         // });
    //
    //         return callback();
    //     }
    //
    // }


};
