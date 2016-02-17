
Router.configure({
    layoutTemplate:  'ApplicationLayout',
    loadingTemplate: 'loading'
});

Router.map(function(){
    this.route("showtree",{
        path:"/",
        template:"showtree",
        waitOn: function(){
            return Meteor.subscribe('nodes');},

        data:function(){
            // this will be used as the current data context in your template
            return '';
        }
    });
});