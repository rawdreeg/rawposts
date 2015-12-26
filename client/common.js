/**
 * Created by rawdreeg on 2015/12/26.
 */

Meteor.startup(function () {
    AccountsEntry.config({
        homeRoute: '/' ,                   // mandatory - path to redirect to after sign-out
        dashboardRoute: '/'      // mandatory - path to redirect to after successful sign-in

    });
});
