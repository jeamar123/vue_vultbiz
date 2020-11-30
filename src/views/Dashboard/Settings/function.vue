<script>
	import axios from 'axios'

	var Settings = {
		data() {
			return {
				showLoader : false,
				selectedTab: null,
			}
		},
		created() {
			console.log(this.$route);
			this.selectedTab = this.$route.name;
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
			selectTab(opt){
				if( this.selectedTab != opt ){
					this.selectedTab = opt;
					this.$router.push({ name: opt });
				}

				// if( opt == 'location' ){
				// 	setTimeout(() => {
				// 		this.initializeMap();
				// 	}, 300);
				// }
			}
    }
	}

	export default Settings;
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>