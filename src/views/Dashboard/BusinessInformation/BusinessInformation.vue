<template>
	
	<form class="business-inforimation-container"> 
		<div class="dp-flex">
			<div class="flex-1 mg-rgt-30">
				<p class="form-header-text">Company Details <span></span></p>

				<div class="form-div">
					<label>Company Name</label>
					<input type="text" name="" v-model="user_details.company_name">
				</div>
				<div class="form-div">
					<label>Company Address</label>
					<input type="text" name="" v-model="user_details.company_address">
				</div>
				<div v-show="!isCustomer" class="form-div">
					<label>Nature of Business</label>
					<select v-model="user_details.nature_of_business">
						<option>A</option>
						<option>B</option>
						<option>C</option>
						<option>D</option>
						<option>E</option>
					</select>
				</div>
				<div class="form-div">
					<label>Description</label>
					<textarea cols="5" rows="5" style="resize: none;height: 100px;"></textarea>
				</div>
				
			</div>
			<div class="flex-1 mg-rgt-30">
				<p class="form-header-text">Contact Details <span></span></p>
				<div class="form-div">
					<label>Full name</label>
					<input type="text" name="" v-model="user_details.name">
				</div>
				<div class="form-div">
					<label>Contact Email</label>
					<input type="text" name="" v-model="user_details.email">
				</div>
				<div class="form-div">
					<label>Contact Phone Number</label >
					<input type="text" name="" v-model="user_details.contact_number">
				</div>
				<div class="form-div">
					<label>Contact Address</label>
					<input type="text" name="" v-model="user_details.address">
				</div>
				
			</div>
			<div class="flex-1">
				<p class="form-header-text">Verification <span></span></p>

				<div class="form-div">
					<label>ID Photo</label>

					<div class="upload-photo-wrapper">
						<img :src="'assets/img/no-image.png'">
						<input ref="photoUploader" type="file" v-on:change="photoChanged( $event.target.files )">
						<p>Change photo</p>
					</div>
					<p v-show="upload_active" class="remove-photo" v-on:click="removeUpload()">Remove</p>
				</div>

				<div class="form-div">
					<label>ID type</label>
					<select>
						<option></option>
						<option>UMID</option>
						<option>TIN ID</option>
						<option>Philhealth Card</option>
						<option>Driver's License</option>
						<option>Passport</option>
						<option>Student's ID</option>
						<option>Voter's ID</option>
					</select>
				</div>
				<div class="form-div">
					<label>ID Number</label>
					<input type="text" name="">
				</div>
			</div>
		</div>
		<div class="dp-flex">
			<div class="flex-1">
				<div class="verification-status-wrapper">
					<div v-show="user_details.verified == 0" class="not-verified">
						<i class="fa fa-times-circle-o"></i>
						<p>Not Verified</p>
					</div>

					<div v-show="user_details.verified == 2" class="in-progress">
						<i class="fa fa-exclamation-circle"></i>
						<p>On Review</p>
					</div>

					<div v-show="user_details.verified == 1" class="verified">
						<i class="fa fa-check-circle-o"></i>
						<p>Verified</p>
					</div>
				</div>
			</div>
		</div>
		<div class="form-div btn-container txt-right mg-top-10">
			<button class="btn btn-submit" v-on:click="submitUpdateUser( user_details )">Submit</button>
		</div>
	</form>
  
</template>

<script>
	import BusinessInformation from './function.vue'
	export default BusinessInformation
</script>
