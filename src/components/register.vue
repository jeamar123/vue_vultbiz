<script>
	import axios from 'axios'

	var register = {
		data() {
			return {
				showLoader : false,
				formData : {
					user_type: 'customer',
				},
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
      submitRegister( formData ){
      	if( !formData.name ){
      		this.$swal( 'Error!', 'Fullname is required.', 'error');
      		return false;
      	}
      	if( !formData.email ){
      		this.$swal( 'Error!', 'Email is required.', 'error');
      		return false;
      	}
      	if( !formData.mobile ){
      		this.$swal( 'Error!', 'Mobile is required.', 'error');
      		return false;
      	}
      	if( !formData.password ){
      		this.$swal( 'Error!', 'Password is required.', 'error');
      		return false;
      	}else{
      		if( formData.password != formData.confirm_password ){
      			this.$swal( 'Error!', 'Password did not match.', 'error');
      			return false;
      		}
      	}
      	var data = {
      		user_type : formData.user_type,
      		name : formData.name,
      		email : formData.email,
      		mobile : formData.mobile,
      		password : formData.password,
      	}
      	this.showLoading();
      	axios.post( axios.defaults.serverUrl + '/api/signup', data )
					.then(res => {
						console.log( res );
						this.hideLoading();
						if( res.data.status ){
							this.$router.push({ name: 'Login' });
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

	export default register;
</script>