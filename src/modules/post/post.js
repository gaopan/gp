import PostApi from '@/api/post.js'
import shared from '@/shared.js'

const EventHub = shared.eventHub

export default {
  data(){
    return {
      postId: null,
      post: {}
    };
  },
  created(){
    this.postId = this.$route.params.postId;

    PostApi.getPost(this.postId).then(res => {
      this.post = res.data;

      let eventBundle = {};
      eventBundle[this.$route.name] = this.post.title;
      EventHub.$emit('replace-id-with-name-on-breadcrumb', eventBundle);
    });
  },
  methods: {
    imgUrl(image){
      var images = require.context('@/assets/images/', false, /\.png|jpeg|jpg$/);
      return images('./' + image);
    }
  }
}