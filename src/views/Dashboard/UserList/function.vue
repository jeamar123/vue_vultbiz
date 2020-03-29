<script>
	import axios from 'axios'

	var UserList = {
		data() {
			return {
				showLoader : false,
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
				},1000);
      },
    }
	}

	export default UserList;
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>