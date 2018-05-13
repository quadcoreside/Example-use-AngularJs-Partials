app.service('PostService', function($http, $q, $timeout) {

	var factory = {
		posts : false,

		getPosts : function(){
			var deferred = $q.defer();
			if (factory.posts !== false) {
				deferred.resolve(factory.posts);
			}else{
				$http.get('posts.json')
					.success(function(data, status){
						factory.posts = data;
						$timeout(function(){
							deferred.resolve(factory.posts);
						}, 2000)
					}).error(function(data, status){
						deferred.reject('Impossible de recuperer les articles');
					});
			}
			return deferred.promise;
		},
		getPost : function(id){
			var deferred = $q.defer();
			var post = {};
			var posts = factory.getPosts().then(function(posts){
				angular.forEach(factory.posts, function(value, key){
					if (value.id == id) {
						post = value;
					}
				});
				deferred.resolve(post);
			}, function(msg){
				deferred.reject(msg);
			})
			return deferred.promise;
		},
	};
	return factory;
});