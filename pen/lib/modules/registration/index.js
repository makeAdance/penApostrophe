module.exports = {
    construct: function(self, options) {

        self.addUser = function(req, firstName, lastName, username, email ,password, groupname, callback) {
            // find the group
            return self.apos.groups.find(req, { title: groupname }).permission(false).toObject(function(err, group) {
                if (err) {
                    return callback(err);
                }
                if (!group) {
                    return callback('That group does not exist.');
                }
                return self.apos.users.insert(req, {
                    username: username,
                    password: password,
                    title: username,
                    email: email,
                    lastName: lastName,
                    firstName: firstName,
                    groupIds: [ group._id ]
                }, { permissions: false }, callback);
            });
        };

        console.log("Module up");

        self.apos.app.post('/register', function(req, res) {

            //console.log(req.body);

            console.log("Attempting to add user");

            self.addUser(req,req.body.firstName,req.body.lastName,req.body.username,req.body.email,req.body.password1,'penUser',function (err) {
                if(err){
                    console.log("Error:",err);
                }else{
                    console.log("User added");
                }


            });



        })





    }
};