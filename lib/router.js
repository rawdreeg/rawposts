/**
 * Created by rawdreeg on 2015/12/26.
 */

Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    //posts route
    this.route('posts',{
        path: '/',
        template: 'posts'
    });

    //about route
    this.route('about');

    //profile route
    this.route('profile');
});