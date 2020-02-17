<template>
  <div class="vult-home-wrapper">
    <div class="vult-header-nav">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Sign up</a>
        </li>
      </ul>
    </div>
    <div class="vult-body-wrapper">
      <div class="vult-body-sub-header">
        <h1>VULTBIZ</h1>
        <p class="sub-title">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <button>Get Started</button>
      </div>
      <div>
        <img :src="'../assets/img/goldengate.jpg'">
      </div>
    </div>
  </div>
</template>

<script>
	import vultbizHome from '@/components/vultbiz/home'
	export default vultbizHome
</script>