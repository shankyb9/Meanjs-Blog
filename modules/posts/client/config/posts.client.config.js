(function () {
  'use strict';

  angular
    .module('posts')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    // menuService.addMenuItem('topbar', {
    //   title: 'Posts',
    //   state: 'posts',
    //   type: 'dropdown',
    //   roles: ['*']
    // });

    // Add the list item
    menuService.addMenuItem('topbar', {
      title: 'Latest Posts',
      state: 'posts.list',
      roles:['*']
    });

    // Add the create item
    menuService.addMenuItem('topbar', {
      title: 'Create Post',
      state: 'posts.create',
      roles: ['user']
    });
  }
}());
