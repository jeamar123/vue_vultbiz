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
	import login from '@/components/login'
	export default login
</script>
