/**
 * Created by rawdreeg on 2015/12/26.
 */

//Profile images collection

ProfileImages = new FS.Collection("ProfileImages",{
    stores: [new FS.Store.GridFS("ProfileImages")]
});

ProfileImages.allow({
    insert: function(userId, doc){
        return true;
    },
    update: function(userId, doc, fields, modifier){
        return true;
    },
    download: function(){
        return true;
    }
});

UserImages = new Mongo.Collection("UserImages");

Posts = new Mongo.Collection("Post");

Posts.attachSchema(new SimpleSchema({
    body:{
        type: String,
        max: 500
    },
    userId:{
        type: String,
        autoValue: function(){
            return Meteor.userId()}
    },
    username:{
        type: String,
        autoValue: function(){
            return Meteor.users.findOne({_id: this.userId}).username}
    },
    createdAt:{
        type: Date,
        autoValue: function(){
            return new Date();
        }
    }
}));

Posts.allow({
    insert: function(userId, doc){
        return true;
    },

});