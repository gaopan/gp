
import MockData from './mock/post.js'

export default {
  getPost(id){
    return new Promise((res, rej) => {
      setTimeout(() => {
        let filtered = MockData.posts.filter(d => d.id == id);
        res({
          data: filtered.length > 0 ? filtered[0] : null
        });
      }, 50);
    });
  },
  getPostsByCategory(cat, pagination){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          data: MockData.posts.filter(d => d.category == cat)
        });
      });
    });
  },
  getPostCountByCategory(cat){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          data: MockData.posts.filter(d => d.category == cat).length
        });
      });
    });
  }
}