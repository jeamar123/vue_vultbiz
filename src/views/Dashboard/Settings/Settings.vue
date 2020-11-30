<template>
	<div class="settings-container">
		<!-- <div class="header-container">
			<div class="header-title">
				<p>Update your Information</p>
			</div>
		</div> -->

		<div class="setting-tab-container">
			<div class="tab" v-bind:class="{'active' : selectedTab == 'BusinessInformation'}" v-on:click="selectTab('BusinessInformation')">
				Information
			</div>
			<div class="tab" v-bind:class="{'active' : selectedTab == 'BusinessHours'}" v-on:click="selectTab('BusinessHours')">
				Business Hours
			</div>
			<div class="tab" v-bind:class="{'active' : selectedTab == 'Location'}" v-on:click="selectTab('Location')">
				Location
			</div>
		</div>

		<div class="scroll-container">
			<router-view name="settings-child"></router-view>
		</div>
  </div>
  
</template>

<script>
	import Settings from './function.vue'
	export default Settings
</script>
