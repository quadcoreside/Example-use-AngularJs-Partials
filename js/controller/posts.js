app.controller('PostsCtrl', function($scope, PostService) {
	$scope.loading = true;
	$scope.posts = PostService.getPosts().then(function(posts){
		$scope.loading = false;
		$scope.posts = posts;
	}, function(msg){
		alert(msg);
	});

});