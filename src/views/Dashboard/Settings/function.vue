<script>
	import axios from 'axios'
	import GoogleMapsApiLoader from 'google-maps-api-loader'

	var Settings = {
		data() {
			return {
				showLoader : false,
				user_details : {},
				upload_active : false,
				google: null,
				mapConfig: {
					center: {lat: -34.397, lng: 150.644},
          zoom: 15
				},
				apiKey: 'AIzaSyCOzaOYgvdwnATwVIvSpYixj32rTLbVF3k',
				infoWindow: null,
				map : null,
				marker : null,
				locations : [
					['Jollibee Divisoria', 8.477828, 124.644370],
		      ['Cafe La Tea', 8.475854, 124.645205],
		      ['Bank of the Philippine Islands', 8.478838, 124.644544],
				],
				isCustomer: null,
			}
		},
		created() {
			
		},
		async mounted() {
	    const googleMapApi = await GoogleMapsApiLoader({
	      apiKey: this.apiKey
	    })
	    this.google = googleMapApi;
	    this.getUserDetails();
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
      initializeMap() {
	      const mapContainer = this.$refs.googleMap;
	      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
	      var pos = {
          lat: 8.477828,
          lng: 124.644370
        };
	      this.marker = new this.google.maps.Marker({
	        position: new google.maps.LatLng(pos.lat, pos.lng),
	        map: this.map,
	        draggable: true
	      });

	      this.map.setCenter(pos);

      	this.google.maps.event.addListener(this.marker, 'dragend', (res) => {
      		this.user_details.latitude = res.latLng.lat();
      		this.user_details.longitude = res.latLng.lng();
      		this.$forceUpdate();
			  });
	    },
      removeUpload(){
      	this.upload_active = false;
      	this.user_details.photo = this.user_details.original_photo;
      },
      photoChanged( file ){
      	this.upload_active = true;
      	this.user_details.photo = URL.createObjectURL( file[0] );
      	this.$refs.photoUploader.value = null;
		      	// this.$parent.showLoading();
			   //  	data[0].uploading = 20;
			   //  	this.uploading_files.push( data[0] );
			   //  	let formData = new FormData();
			   //  	formData.append('file', data[0]);
			   //  	this.$refs.receiptUploader.value = null;
			   //  	this.isNextBtnDisabled = true;
						// axios.post( 
						// 	axios.defaults.serverUrl + "/employee/save/e_claim_receipt", 
						// 	formData, 
						// 	{ headers: { 'Content-Type': 'multipart/form-data' } })
						// 	.then(res => {
						// 		// console.log( res );
						// 	})
						// 	.catch(err => {
						// 		console.log( err );
						// 	});
      },
      getUserDetails(){
      	axios.get( axios.defaults.serverUrl + '/api/user/' + localStorage.user_id )
					.then(res => {
						console.log( res );
						this.hideLoading();
						if( res.data.status ){
							// this.$router.push({ name: 'Login' });
							this.user_details = res.data.user;
							this.user_details.original_photo = this.user_details.photo;
							this.isCustomer = this.user_details.user_type == 'customer' ? true : false;
							this.initializeMap();
						}else{
							this.$swal( 'Error!', res.data.message, 'error');
						}
					})
					.catch(err => {
						console.log( err );
						this.hideLoading();
					});
      },
      submitUpdateUser( formData ){
      	var data = {
      		user_id : formData.id,
      		name : formData.name,
	        email : formData.email,
	        address : formData.address,
	        contact_number : formData.contact_number,
	        photo : formData.photo,
	        nature_of_business : formData.nature_of_business,
	        category : formData.category,
	        latitude : formData.latitude,
	        longitude : formData.longitude,
      	}
      	axios.post( axios.defaults.serverUrl + '/api/user/update', data )
					.then(res => {
						console.log( res );
						this.hideLoading();
						if( res.data.status ){
							this.getUserDetails();
							this.$parent.getUserDetails();
							this.$swal( 'Success!', res.data.message, 'success');
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

	export default Settings;
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>