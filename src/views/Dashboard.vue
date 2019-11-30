<template>
	<div id="main-content" >
		<section class="block-container">
		  <div class="navbar">
		  	<ul class="navbar-right">
		  		<router-link tag="li" to="/dashboard/home">
		  			<a>
		  				<i class="fa fa-power-off"></i> 
		  			</a>
		  		</router-link>
		  	</ul>
		  </div>
		  <div class="dashboard-container">
			  <div class="side-menu-content">
			  	<div class="side-menu-container">
			  		
			  		<div class="profile-container">
			  			<!-- <a href="javascript:void(0)"><i class="fa fa-power-off"></i></a> -->
			  			<div class="img-wrapper">
			  				<img :src="'../assets/img/avatar2.png'">
			  			</div>
			  			<p class="user-name">Auto Repair Shop</p>
			  			<p class="greeting">Good Evening!</p>
			  		</div>

			  		<div class="menu-links-container">
			  			<div class="menu-link-item active">
			  				<div class="item-icon">
			  					<img :src="'../assets/img/white icons/011-dashboard-1.png'">
			  				</div>
			  				<div class="item-name">Dashboard</div>
			  			</div>
			  			<div class="menu-link-item">
			  				<div class="item-icon">
			  					<img :src="'../assets/img/white icons/010-document.png'">
			  				</div>
			  				<div class="item-name">User List</div>
			  			</div>
			  			<div class="menu-link-item">
			  				<div class="item-icon">
			  					<img :src="'../assets/img/white icons/008-settings-gears.png'">
			  				</div>
			  				<div class="item-name">Settings</div>
			  			</div>
			  		</div>

			  	</div>
			  </div>

			  <div class="child-content">
			  	<router-view></router-view>
			  </div>
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
