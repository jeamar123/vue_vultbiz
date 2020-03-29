<template>
	<div id="main-content" >
		<section class="block-container">
		  <div class="navbar">
		  	<ul class="navbar-right">
		  		<!-- <router-link tag="li" :to="{ name : 'Main' }"> -->
		  			<li>
			  			<a v-on:click="logout()">
			  				<i class="fa fa-power-off"></i> 
			  			</a>
		  			</li>
		  		<!-- </router-link> -->
		  	</ul>
		  </div>
		  <div class="dashboard-container">
			  <div class="side-menu-content">
			  	<div class="side-menu-container">
			  		<div class="top-logo-container">
			  			
			  		</div>
			  		<div class="profile-container">
			  			<div class="img-wrapper">
			  				<!-- <img :src="'../assets/img/avatar2.png'"> -->
			  				<img :src="user_details.photo">
			  			</div>
			  			<p class="user-name">{{ user_details.name }}</p>
			  			<p class="greeting">Good Evening!</p>
			  		</div>

			  		<div class="menu-links-container">
		  				<div class="menu-link-item" v-bind:class="{'active' : $route.name == 'DashHome'}" v-on:click="goToPage('DashHome')">
				  			<div class="item-icon">
			  					<img :src="'../assets/img/black icons/011-dashboard-1.png'">
			  				</div>
			  				<div class="item-name">Dashboard</div>
		  				</div>
			  			<div class="menu-link-item" v-bind:class="{'active' : $route.name == 'UserList'}" v-on:click="goToPage('UserList')">
				  			<div class="item-icon">
			  					<img :src="'../assets/img/black icons/010-document.png'">
			  				</div>
			  				<div class="item-name">User List</div>
			  			</div>
			  			<div class="menu-link-item" v-bind:class="{'active' : $route.name == 'Settings'}" v-on:click="goToPage('Settings')">
				  			<div class="item-icon">
			  					<img :src="'../assets/img/black icons/012-gear.png'">
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
	import Container from './function.vue'
	export default Container
</script>
