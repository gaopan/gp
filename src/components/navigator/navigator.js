import shared from '@/shared.js'
import CommonUtils from '@/utils/common-utils.js'

const Menus = CommonUtils.clone(shared.menus)

export default {
  name: 'navigator',
  data(){
    return {
      menus: Menus,
      isSticky: false,
      isShort: false
    };
  },
  mounted(){
    let vm = this;
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      vm.isSticky = st > 10;
    });
  },
  watch: {
    '$route.path': {
      handler(path){
        this.isShort = path != '/';
      }
    }
  },
  methods: {
    isCurrent(menu){
      return (this.$route.path === menu.href) ? true : false;
    },
    navTo(menu){
      this.$router.push({name: menu.name});
    },
    scrollOnePage(){
      $('html, body').animate({
        scrollTop: $(this.$refs.header).height() - $(this.$refs.navbar).height()
      });
    }
  }
}