<template>
	<div id="main-content" >
		<section class="block-container landing-container">
		  <div class="navbar dp-flex-ai">
		  	<router-link tag="div" :to="{ name: 'Home' }" class="bizmode-logo flex-1">
		  		Bizmode
		  	</router-link>
		  	<ul class="navbar-right">
		  		<li>
		  			<a>
		  				About us
		  			</a>
		  		</li>
		  		<li>
		  			<a>
		  				Services
		  			</a>
		  		</li>
		  		<router-link tag="li" :to="{ name: 'Login' }">
		  			<a>
		  				Login
		  			</a>
		  		</router-link>
		  		<router-link tag="li" :to="{ name: 'Register' }">
		  			<a>
		  				Register
		  			</a>
		  		</router-link>
		  	</ul>
		  	<div @click="_toggleMenuBar_()" class="menu-bar-right">
			    <button class="menu-bar-wrapper">
			      <div class="icon-bar"></div>
			      <div class="icon-bar"></div>
			      <div class="icon-bar"></div>
			    </button>
			  </div>
			  <div v-if="global_isShowNavbarCollapse" class="navbar-collapse">
		    	<ul>
		    		<li>
		    			<a href="" @click="_hideBarCollapse_()">About us</a>
		    		</li>
		    		<li>
		    			<a href="" @click="_hideBarCollapse_()">Services</a>
		    		</li>
		    		<router-link tag="li" :to="{ name: 'Login' }">
			  			<a @click="_hideBarCollapse_()">
			  				Login
			  			</a>
			  		</router-link>
		    		<router-link tag="li" :to="{ name: 'Register' }">
			  			<a @click="_hideBarCollapse_()">
			  				Register
			  			</a>
			  		</router-link>
		    	</ul>
		    </div>
		  </div>

		  <router-view></router-view>
	  </section>
  </div>
  
</template>

<script>
	import Main from './function'
	export default Main
</script>
