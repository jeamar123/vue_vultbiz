<template>
	<div id="main-content" >
		<section class="block-container">
		  <div class="navbar">
		  	<ul class="navbar-right">
		  		<router-link tag="li" to="Login">
		  			<a>
		  				Login
		  			</a>
		  		</router-link>
		  		<router-link tag="li" to="Register">
		  			<a>
		  				Register
		  			</a>
		  		</router-link>
		  	</ul>
		  </div>
	  </section>
  </div>
  
</template>

<script>
	import main from '@/components/main'
	export default main
</script>
