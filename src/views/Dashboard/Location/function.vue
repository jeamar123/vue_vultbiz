<script>
	import axios from 'axios'
	import GoogleMapsApiLoader from 'google-maps-api-loader'

	var Location = {
		data() {
			return {
				showLoader : false,
				google: null,
				user_details: {},
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
			}
		},
		async created() {
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
				},100);
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
			getUserDetails(){
      	axios.get( axios.defaults.serverUrl + '/api/user/' + localStorage.user_id )
					.then(res => {
						console.log( res );
						this.hideLoading();
						if( res.data.status ){
							// this.$router.push({ name: 'Login' });
							this.user_details = res.data.user;
							this.user_details.original_photo = this.user_details.photo;
							// this.isCustomer = this.user_details.user_type == 'customer' ? true : false;
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
    }
	}

	export default Location;
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>