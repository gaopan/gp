import PostApi from '@/api/post.js'
export default {
  data(){
    return {
      pagination: {
        pageSize: 10,
        currentPage: 1,
        pageCount: 3
      },
      posts: null
    };
  },
  created(){
    PostApi.getPostCountByCategory('tech').then(res => {
      this.pagination.total = res.data;

      this.pagination.pageCount = Math.ceil(this.pagination.total / this.pagination.pageSize);
      this.pagination.currentPage = 1;
    });
  },
  watch: {
    'pagination': {
      handler(){
        this.getOnePageData();
      },
      deep: true
    }
  },
  methods: {
    toViewPost(post){
      this.$router.push(`/post/life/${post.id}`);
    },
    imgUrl(image){
      var images = require.context('@/assets/images/', false, /\.png|jpeg|jpg$/);
      return images('./' + image);
    },
    getOnePageData(){
      PostApi.getPostsByCategory('life', {
        pageSize: this.pagination.pageSize,
        pageIndex: this.pagination.currentPage
      }).then(res => {
        this.posts = res.data;
      });
    },
    prePage(){
      if(this.pagination.currentPage > 1) {
        this.pagination.currentPage--;
      }
    },
    nextPage(){
      if(this.pagination.currentPage < this.pagination.pageCount) {
        this.pagination.currentPage++;
      }
    },
    gotoPage(pageIndex){
      this.pagination.currentPage = pageIndex;
    }
  }
}