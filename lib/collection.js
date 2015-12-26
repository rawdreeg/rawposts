/**
 * Created by rawdreeg on 2015/12/26.
 */

//Profile images collection

ProfileImages = new FS.Collection("ProfileImages",{
    stores: [new FS.Store.GridFS("ProfileImages")]
});

UserImages = new Mongo.Collection("UserImages");
