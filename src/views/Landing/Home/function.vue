<script>
  import Modal from "../../../common/components/modal";

  let Home = {
    components: {
      Modal
    },
    data() {
      return {
        empSelectorActive: {
          value: 0,
          text: ""
        },
       // global_isLoginRegisterModalShow: false,
       // global_isRegisterTextShow: false,
       // global_isLoginTextShow: true,
      };
    },
    created(){
      // this.corporateViewStatus = this.$route.name;
    },
    methods: {
      // ___showLoginRegisterModal() {
      //   this.global_isLoginRegisterModalShow  = this.global_isLoginRegisterModalShow  ==  false ? true : false;
      // },
      // ___showLoginRegText( type ) {
      //   if ( type == 'register') {
      //     this.global_isRegisterTextShow = true;
      //     this.global_isLoginTextShow = false;
      //   }

      //   if ( type == 'sign-in' ) {
      //     this.global_isLoginTextShow = true;
      //     this.global_isRegisterTextShow = false;
      //   }
        
      // }
    }
  }
  
  export default Home
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>
