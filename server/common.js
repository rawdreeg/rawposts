/**
 * Created by rawdreeg on 2015/12/26.
 */

Meteor.publish("posts", function(){
    return Posts.find();
});

Meteor.publish("ProfileImages", function(){
    return ProfileImages.find();
});

Meteor.publish("UserImages", function(){
    return UserImages.find();
});
