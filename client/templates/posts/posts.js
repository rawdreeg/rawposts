/**
 * Created by rawdreeg on 2015/12/26.
 */

Template.posts.helpers({
    posts: function(){
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});