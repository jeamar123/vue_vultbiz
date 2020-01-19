<template>
	<div id="main-content" >
		<section class="block-container landing-container">
		  <div class="navbar">
		  	<ul class="navbar-right">
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
		  </div>

		  <router-view></router-view>
	  </section>
  </div>
  
</template>

<script>
	import main from '@/components/main'
	export default main
</script>
