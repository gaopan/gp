import shared from '@/shared.js'
import CommonUtils from '@/utils/common-utils.js'

const EventHub = shared.eventHub

export default {
  data(){
    return {
      items: null
    }
  },
  watch: {
    '$route.path': {
      handler(val){
        this.reactWhenRouteChange();
      }
    }
  },
  created(){
    EventHub.$on('replace-id-with-name-on-breadcrumb', this.onReplaceIdWithName);
  },
  methods: {
    reactWhenRouteChange(){
      let currentPath = null;
      if(!this.$route.matched || this.$route.matched.length < 1) return;
      currentPath = this.$route.matched[0].path;
      if(currentPath == '') return;
      let items = [], menus = CommonUtils.clone(shared.menus);
      let fnFindMatched = function(_menus){
        let foundMatched = false;
        _menus.every(_menu => {
          if(_menu.href == currentPath) {
            _menu.active = true;
            items.push(_menu);
            foundMatched = true;
            return false;
          } else if(_menu.children) {
            let foundInChildren = fnFindMatched(_menu.children);
            if(foundInChildren) {
              foundMatched = foundInChildren;
              items.push(_menu);
              return false;
            }
          }
          return true;
        });
        return foundMatched;
      };
      fnFindMatched(menus);
      items.push(menus[0]);
      this.items = items.reverse();
    },
    onReplaceIdWithName(args){
      if(!this.items) return;

      this.items.forEach(item => {
        if(item.breadcrumb && item.breadcrumb.replaceTextWithName) {
          item.text = args[item.name];
        }
      });
    }
  },
  beforeDestroy(){
    EventHub.$off('replace-id-with-name-on-breadcrumb', this.onReplaceIdWithName);
  }
}