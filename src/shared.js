import Vue from 'vue'
export default {
  eventHub: new Vue(),
  menus: [{
    name: 'Index',
    href: '/',
    text: '首页'
  }, {
    name: 'Tech',
    href: '/tech',
    text: '技术与分享',
    children: [{
      name: 'Tech Post',
      href: '/post/tech/:postId',
      text: '',
      breadcrumb: {
        replaceTextWithName: true
      }
    }]
  }, {
    name: 'Life',
    href: '/life',
    text: '生活与创作',
    children: [{
      name: 'Life Post',
      href: '/post/life/:postId',
      text: '',
      breadcrumb: {
        replaceTextWithName: true
      }
    }]
  }]
}