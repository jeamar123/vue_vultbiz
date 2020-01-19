<script>
	import axios from 'axios'

	var login = {
		data() {
			return {
				showLoader : false,
				formData : {},
			}
		},
		created() {
			console.log( localStorage.user_id );
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
      submitLogin( formData ){
      	if( !formData.email ){
      		this.$swal( 'Error!', 'Email is required.', 'error');
      		return false;
      	}
      	if( !formData.password ){
      		this.$swal( 'Error!', 'Password is required.', 'error');
      		return false;
      	}
      	var data = {
      		email : formData.email,
      		password : formData.password,
      	}
      	this.showLoading();
      	axios.post( axios.defaults.serverUrl + '/api/login', data )
					.then(res => {
						console.log( res );
						this.hideLoading();
						if( res.data.status ){
							localStorage.user_id = res.data.user.id;
							if( res.data.user.activated == 0 ){
								this.$router.push({ name: 'Settings' });
							}else{
								this.$router.push({ name: 'Dashboard' });
							}
						}else{
							this.$swal( 'Error!', res.data.message, 'error');
						}
					})
					.catch(err => {
						console.log( err );
						this.hideLoading();
					});
      }
    }
	}

	export default login;
</script>