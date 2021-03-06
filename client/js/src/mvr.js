define([
  "jquery",
  "Backbone",
], function( $, Backbone ) {

  var Model = Backbone.Model,

  Collection = Backbone.Collection,

  View = Backbone.View.extend({
    initialize: function() {
      Backbone.View.prototype.initialize.call( this );
      this.$el = $(this.el);
    },
    cleanup: function() {
    },
    remove: function() {
      this.cleanup();
      Backbone.View.prototype.remove.call(this);
    }
  }),

  Router = Backbone.Router;

  return {
    Model: Model,
    View: View,
    Collection: Collection,
    Router: Router
  };

});
