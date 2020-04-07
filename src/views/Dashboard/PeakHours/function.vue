<script>
	var PeakHours = {
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
				},100);
      },
      
    }
	}

	export default PeakHours;
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>