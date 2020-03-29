<script>
  import Modal from "../../views/modal/Modal.vue";

  let bizHome = {
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
  
  export default bizHome
</script>

<style lang="scss" scoped>
	@import "./src/assets/css/bizStyle.scss";
</style>
