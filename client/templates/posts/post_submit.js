Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    Meteor.call('postInsert', post, function(error, result) {
      // affiche l'erreur à l'utilisateur et s'interrompt
      if (error)
      return throwError(error.reason);

      // affiche ce résultat mais 'route' tout de même
      if (result.postExists)
      throwError('This link has already been posted');
    });

    Router.go('postsList');

  }
});
