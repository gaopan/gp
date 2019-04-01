

let routerTable = {
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Index',
    components: {
      default: () =>
        import('@/modules/index/Index.vue')
    }
  }, {
    path: '/tech',
    name: 'Tech',
    components: {
      default: () =>
        import('@/modules/tech/Tech.vue')
    }
  }, {
    path: '/life',
    name: 'Life',
    components: {
      default: () =>
        import('@/modules/life/Life.vue')
    }
  }, {
    path: '/post/tech/:postId',
    name: 'Tech Post',
    components: {
      default: () => import('@/modules/post/Post.vue')
    }
  }, {
    path: '/post/life/:postId',
    name: 'Life Post',
    components: {
      default: () => import('@/modules/post/Post.vue')
    }
  }]
}

export default routerTable