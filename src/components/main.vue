<script>
	import axios from 'axios'

	var main = {
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

	export default main
</script>