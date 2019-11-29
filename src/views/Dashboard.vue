<template>
	<div id="main-content" >
		<section class="block-container">
		  <div class="navbar">
		  	<ul class="navbar-right">
		  		<router-link tag="li" to="/dashboard/home">
		  			<a>
		  				<i class="fa fa-search"></i> 
		  			</a>
		  		</router-link>
		  	</ul>
		  </div>

		  <div class="side-menu-content">
		  	<div class="side-menu-container">
		  		
		  		<div class="profile-container">
		  			<div class="img-wrapper">
		  				<img :src="'../assets/img/avatar2.png'">
		  			</div>
		  		</div>

		  	</div>
		  </div>

		  <div class="child-content">
		  	<router-view></router-view>
		  </div>
	  </section>

	  <transition name="fade">		
		  <div v-if="showLoader" class="main-loader">
				<div class="circle-loader">
					<div class="preloader-container">
						<div class="preloader-wrapper big active">
					    <div class="spinner-layer spinner-blue-only">
					      <div class="circle-clipper left">
					        <div class="circle"></div>
					      </div><div class="gap-patch">
					        <div class="circle"></div>
					      </div><div class="circle-clipper right">
					        <div class="circle"></div>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		</transition>
  </div>
  
</template>

<script>
	import dashboard from '@/components/dashboard'
	export default dashboard
</script>
