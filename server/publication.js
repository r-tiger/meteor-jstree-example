// Publish all items for this user_id.
Meteor.publish('nodes', function () {
  //  var user = Meteor.user();
  //  check(user._id, String);
  //  return Nodes.find({userId: user._id});
    return Nodes.find();
});