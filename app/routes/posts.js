import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    return Ember.RSVP.hash({
      content: store.findAll('post')
    });
  },

  setupController: function(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    createPost: function() {
      this.controllerFor('post').set('globals.isEditing', true);
      var newPost = this.store.createRecord('post');
      this.transitionTo('post', newPost.save());
    },

    savePost: function() {
      this.modelFor('post').save();
    },

    deletePost: function() {
      this.modelFor('post').destroyRecord().then(function() {
        this.transitionTo('posts');
      }.bind(this));
    }
  }
});
