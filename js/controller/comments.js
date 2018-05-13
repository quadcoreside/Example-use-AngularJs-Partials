app.controller('CommentsCtrl', function($scope, PostService, $routeParams) {
	$scope.loading = true;
	var post = PostService.getPost($routeParams.id).then(function(post){
		$scope.loading = false;
		$scope.title = post.name;
		$scope.comments = post.comments;
	}, function(msg){
		alert(msg);
	});
});