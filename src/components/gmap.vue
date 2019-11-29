<script>
	import axios from 'axios'
	import GoogleMapsApiLoader from 'google-maps-api-loader'
	import * as config from '@/config';

	var gmap = {
		data() {
			return {
				showLoader : false,
				google: null,
				mapConfig: {
					center: {lat: -34.397, lng: 150.644},
          zoom: 17
				},
				apiKey: config.gmapApiKey,
				infoWindow: null,
				map : null,
				marker : null,
				locations : [
					['Jollibee Divisoria', 8.477828, 124.644370],
		      ['Cafe La Tea', 8.475854, 124.645205],
		      ['Bank of the Philippine Islands', 8.478838, 124.644544],
				]
			}
		},
		async mounted() {
	    const googleMapApi = await GoogleMapsApiLoader({
	      apiKey: this.apiKey
	    })
	    this.google = googleMapApi;
	    
	    this.initializeMap();
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
				},1000);
      },
      initializeMap() {
	      const mapContainer = this.$refs.googleMap;
	      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
      	this.getGeoLocation();
	    },
	    getGeoLocation(){
	    	console.log( this.map );
	    	var infoWindow = [];
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

					  this.marker = new this.google.maps.Marker({
			        position: new google.maps.LatLng(pos.lat, pos.lng),
			        map: this.map
			      });
			      this.google.maps.event.addListener(this.marker, 'click', ((marker, i) => {
			        return () => {
			          infoWindow[0].setContent('I am here.');
			          infoWindow[0].open(this.map, marker);
			        }
			      })(this.marker, i));
			      infoWindow[0] = new google.maps.InfoWindow;
			      infoWindow[0].setContent('I am here.');
			      infoWindow[0].open(this.map, this.marker);

				    var i;

				    for (i = 0; i < this.locations.length; i++) {  
				      this.marker = new this.google.maps.Marker({
				        position: new google.maps.LatLng(this.locations[i][1], this.locations[i][2]),
				        map: this.map
				      });

				      this.google.maps.event.addListener(this.marker, 'click', ((marker, i) => {
				        return () => {
				          infoWindow[i + 1].setContent(this.locations[i][0]);
				          infoWindow[i + 1].open(this.map, marker);
				        }
				      })(this.marker, i));
				      infoWindow[i + 1] = new google.maps.InfoWindow;
				      infoWindow[i + 1].setContent(this.locations[i][0]);
				      infoWindow[i + 1].open(this.map, this.marker);
				    }


            this.map.setCenter(pos);
            
          },() => {
            this.handleLocationError(true, infoWindow, this.map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          this.handleLocationError(false, infoWindow, this.map.getCenter());
        }
	    },
	    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(this.map);
      }


    }
	}

	export default gmap;
</script>