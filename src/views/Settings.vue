<template>
	<div class="settings-container">
		<div class="update-info-container">
			<div class="header-container">
				<div class="header-title">
					<p>Update your Information</p>
				</div>
			</div>

			<form>
				<div class="dp-flex">
					<div class="flex-1 mg-rgt-10">
						<!-- <div class="form-div">
							<label>{{ isCustomer ? 'Photo' : 'Logo' }}</label>
							<div class="upload-photo-wrapper">
								<img :src="user_details.photo">
								<input ref="photoUploader" type="file" v-on:change="photoChanged( $event.target.files )">
								<p>Change photo</p>
							</div>
							<p v-show="upload_active" class="remove-photo" v-on:click="removeUpload()">Remove</p>
						</div> -->
						<div class="form-div">
							<label>{{ isCustomer ? 'Full name' : 'Company Name' }}</label>
							<input type="text" name="" v-model="user_details.name">
						</div>
						<div class="form-div">
							<label>Email</label>
							<input type="text" name="" v-model="user_details.email">
						</div>
						<div class="form-div">
							<label>Contact Number</label >
							<input type="text" name="" v-model="user_details.contact_number">
						</div>
						<div class="form-div">
							<label>Date of Birth</label >
							<input type="text" name="" v-model="user_details.dob">
						</div>
						<div v-show="isCustomer" class="form-div">
							<label>Gender</label>
							<!-- <input type="text" name="" > -->
							<select v-model="user_details.gender">
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>
						<div v-show="!isCustomer" class="form-div">
							<label>Nature of Business</label>
							<!-- <input type="text" name="" > -->
							<select v-model="user_details.nature_of_business">
								<option>A</option>
								<option>B</option>
								<option>C</option>
								<option>D</option>
								<option>E</option>
							</select>
						</div>
						<div class="form-div">
							<label>Address</label>
							<input type="text" name="" v-model="user_details.address">
						</div>
						<div class="form-div">
							<label>{{ isCustomer ? 'Say Something About yourself' : 'Description' }}</label>
							<textarea cols="5" rows="5" style="resize: none;height: 100px;"></textarea>
						</div>

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
					<div v-bind:class="{'flex-1-5': !isCustomer, 'flex-1': isCustomer}" class=" mg-lft-10">
						<span v-show="isCustomer == false">
							<div class="form-div">
								<label>Location</label>
								<div class="map-location-wrapper" ref="googleMap">
								</div>
								<p class="marker-note">*Drag marker to set location</p>
							</div>
							<div v-show="!isCustomer" class="form-div">
								<div class="dp-flex">
									<div class="flex-1 mg-rgt-10">
										<label>Latitude</label >
										<input type="text" name="" v-model="user_details.latitude">
									</div>
									<div class="flex-1 mg-lft-10">
										<label>Longitude</label >
										<input type="text" name="" v-model="user_details.longitude">
									</div>
								</div>
							</div>
						</span>

						<span v-show="isCustomer == true">
							<p class="id-header-text">Verification <span></span></p>
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

							<div class="form-div">
								<label>ID Photo</label>

								<div class="upload-photo-wrapper">
									<img :src="'assets/img/no-image.png'">
									<input ref="photoUploader" type="file" v-on:change="photoChanged( $event.target.files )">
									<p>Change photo</p>
								</div>
								<p v-show="upload_active" class="remove-photo" v-on:click="removeUpload()">Remove</p>
							</div>

						</span>
					</div>
				</div>
				<div class="form-div btn-container txt-right mg-top-10">
					<button class="btn btn-submit" v-on:click="submitUpdateUser( user_details )">Submit</button>
				</div>
			</form>

		</div>
  </div>
  
</template>

<script>
	import settings from '@/components/settings'
	export default settings
</script>
