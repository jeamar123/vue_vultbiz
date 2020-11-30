<template>
	<form class="location-container">
		<div class="header-title">
			<p>Drag marker to set your location</p>
		</div>
		<div>
			<div class="form-div">
				<div class="map-location-wrapper" ref="googleMap">
				</div>
				<!-- <p class="marker-note">*Drag marker to set location</p> -->
			</div>
			<div class="form-div">
				<div class="dp-flex">
					<div class="flex-1 mg-rgt-10">
						<label>Latitude</label >
						<input type="text" name="" v-model="user_details.latitude" readonly>
					</div>
					<div class="flex-1 mg-lft-10">
						<label>Longitude</label >
						<input type="text" name="" v-model="user_details.longitude" readonly>
					</div>
				</div>
			</div>
		</div>
		<div class="form-div btn-container txt-right mg-top-10">
			<button class="btn btn-submit" v-on:click="updateLocation( user_details )">Update</button>
		</div>
	</form>
</template>

<script>
	import Location from './function.vue'
	export default Location
</script>
