<script>
	import axios from 'axios'

	var Main = {
		data() {
			return {
				showLoader : false,
				global_isShowNavbarCollapse: false,
			}
		},
		created() {
		},
		methods: {
      showLoading() {
      	this.showLoader = true;
      },
      hideLoading() {
      	setTimeout(()=>{
				  this.showLoader = false;
				},100);
      },
      _toggleMenuBar_() {
        this.global_isShowNavbarCollapse = this.global_isShowNavbarCollapse == false ? true : false;
      },
      _hideBarCollapse_() {
      	console.log('na click');
      	this.global_isShowNavbarCollapse = false;
      }
    }
	}

	export default Main
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>