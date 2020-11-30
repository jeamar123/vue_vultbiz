<template>
	<div class="auth-container">
		<form>
			<p class="auth-title">Register</p>
			<div class="form-div">
				<label>Company Name</label>
				<input type="text" name="" v-model="formData.company_name">
			</div>
			<div class="form-div">
				<label>Email Address</label>
				<input type="text" name="" v-model="formData.email">
			</div>
			<div class="form-div">
				<label>Contact Number</label>
				<input type="text" name="" v-model="formData.mobile">
			</div>
			<div class="form-div">
				<label>Password</label>
				<input type="password" name="" v-model="formData.password">
			</div>
			<div class="form-div">
				<label>Confirm Password</label>
				<input type="password" name="" v-model="formData.confirm_password">
			</div>
			<div class="form-div btn-container txt-right">
				<button class="btn btn-submit" v-on:click="submitRegister( formData )">Submit</button>
			</div>
		</form>
  </div>
</template>

<script>
	import { 
		_showPageLoading_,
		_hidePageLoading_,
		_register_,
		_formChecker_,
	} from '../common/functions/common_functions';

	var vultbizHome = {
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
      submitRegister( formData ){
				let params = {
      		company_name : formData.company_name,
      		email : formData.email,
      		mobile : formData.mobile,
      		password : formData.password,
      		confirm_password : formData.confirm_password,
				}
				if( _formChecker_(params) == false ){
					return false;
				}
				_showPageLoading_();
				_register_(params)
					.then((res)	=>	{
						console.log(res);
						_hidePageLoading_();
						if( res.data.status ){
							this.$swal( 'Success!', res.data.message, 'success');
						}else{
							this.$swal( 'Error!', res.data.message, 'error');
						}
					});
			},

    }
	}

	export default vultbizHome;
</script>