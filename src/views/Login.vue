<template>
	<div class="auth-container">
		<form>
			<p class="auth-title">Login</p>
			<div class="form-div">
				<label>Email Address</label>
				<input type="text" name="" v-model="formData.email">
			</div>
			<div class="form-div">
				<label>Password</label>
				<input type="password" name="" v-model="formData.password">
			</div>
			<div class="form-div btn-container txt-right">
				<button class="btn btn-submit" v-on:click="submitLogin( formData )">Submit</button>
			</div>
		</form>
  </div>
</template>

<script>
	import { 
		_showPageLoading_,
		_hidePageLoading_,
		_login_,
		_formChecker_,
	} from '../common/functions/common_functions';

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
      	let params = {
      		email : formData.email,
      		password : formData.password,
				}
				if( _formChecker_(params) == false ){
					return false;
				}
				_showPageLoading_();
				_login_(params)
					.then((res)	=>	{
						console.log(res);
						_hidePageLoading_();
						if( res.data.status ){
							localStorage.company_session = res.data.token;
							// if( res.data.user.activated == 0 ){
							// 	this.$router.push({ name: 'Settings' });
							// }else{
							// 	this.$router.push({ name: 'DashboardContainer' });
							// }
						}else{
							this.$swal( 'Error!', res.data.message, 'error');
						}
					});
      }
    }
	}

	export default login;
</script>
