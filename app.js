(function() {
  'use strict';

  angular.module("app", [])

    .component("redditclone", {
      controller: function appController(){
        const vm = this;

        vm.$onInit = function() {
          vm.time = new Date();
          vm.posts = [
            // time: new Date()
          ];
          vm.comments = [];
        };


        vm.addPost = function(){
          vm.post.time = new Date();
          vm.post.count = 0;
          vm.posts.push(vm.post);
          delete vm.post;
        };
        // $scope.todos.push({'title':$scope.newTodo , date: new Date(), 'done':false})

        // vm.updateTime = function () {
        //   vm.time = new Date();
        // };

        vm.addComment = function(){
          vm.comments.push(vm.comment);
          delete vm.comment;
        };
//try to make a ++ for counts to fix count
        vm.noNegative = function() {
          if (vm.post.count >= 1 ) {
            vm.post.count = vm.post.count - 1;
          } else {
            vm.post.count = 0;
          }
        };

      },


      templateUrl: './main.html'

    });






}());
