<template>
	<div id="main-content" >
		<section class="block-container landing-container">
		  <div class="navbar dp-flex-ai">
		  	<router-link tag="div" :to="{ name: 'home' }" class="bizmode-logo flex-1">
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
		  </div>

		  <router-view></router-view>
	  </section>
  </div>
  
</template>

<script>
	import main from '@/components/main'
	export default main
</script>
