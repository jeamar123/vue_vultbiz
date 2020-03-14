<template>
  <div class="biz-home-wrapper">
    <div>
      <div class="biz-header-nav">
        <span>
          <a class="bizmode-logo"><span>Biz</span>mode</a>
          <!-- <a><img :src="'../assets/img/Free_Sample_By_Wix (1).jpeg'"></a> -->
        </span>
        <ul>
          <li>
            <a>ABOUT US</a>
          </li>
          <li>
            <a>SERVICES</a>
          </li>
          <li>
            <a @click="___showLoginRegisterModal()">SIGN UP/SIGN IN</a>
          </li>
        </ul>
      </div>
      <div class="future-img">
        
      </div>
    </div>
    <div class="about-us-info">
      <h1>ABOUT US</h1>
      <p><span class="biz-blue-bold">Bizmode</span> is an application that would help businesses in monitoring, advertising and planning for your next move. </p>
      <p>The app offers Sales monitoring, Basic financial system, Inventory system, peak hours monitoring, and advertising.</p> 
      <p>Our product would ensure that everything that comes in and out of your business will be monitored and as well as forecasting of future events and capacity that your business may experience.</p>
    </div>
    <div class="services-container">
      <h1>SERVICES</h1>
      <div>
        <h4>App</h4>
        <div class="services-app-container dp-flex">
          <div>
            <img :src="'../assets/img/bizhome icons/shop.png'">
            <h4>Nearest Shop</h4>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div>
            <img :src="'../assets/img/bizhome icons/laptop.png'">
            <h4>Reservation</h4>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Tenant</h4>
        <div class="services-tenant-container dp-flex">
          <div>
            <img :src="'../assets/img/bizhome icons/sales-monitoring.png'">
            <h4>Sales Monitoring</h4>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div>
            <img :src="'../assets/img/bizhome icons/inventory-system.png'">
            <h4>Inventory System</h4>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div>
            <img :src="'../assets/img/bizhome icons/financial-statement.png'">
            <h4>Basic Financial Statement</h4>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div>
            <img :src="'../assets/img/bizhome icons/monitor.png'">
            <h4>Peak Hours Monitoring</h4>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div>
            <img :src="'../assets/img/bizhome icons/social-media-marketing.png'">
            <h4>Advertising</h4>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div>
        <h1>LET'S <span class="biz-blue">WORK</span> TOGETHER</h1>
        <span class="bizmode-email">bizmode<span class="biz-blue">@gmail.com</span></span>
      </div>
      <div class="social-container dp-flex ">
        WE'RE ON:
        <div class="dp-flex">
          <div>
            <i class="fa fa-facebook-square"></i>
          </div>
          <div>
            <i class="fa fa-instagram"></i>
          </div>
          <div>
            <i class="fa fa-twitter"></i>
          </div>
        </div>
      </div>
      <span>©2020 Bizmode. All rights reserved.</span>
    </div>

    <Modal v-if="global_isLoginRegisterModalShow" class="login-register-modal">
      <div slot="header">
        <div>
          <h2 v-if="true">Login</h2>
          <h2 v-if="false">Register</h2>
        </div>
        <div>
          <i @click="___showLoginRegisterModal()" class="fa fa-times"></i>
        </div>
      </div>
      <div slot="body">
        <div v-if="global_isLoginTextShow">
          <div class="login-reg-input-wrapper">
            <label>Username</label>
            <input type="text">
          </div>
          <div class="login-reg-input-wrapper">
            <label>Password</label>
            <input type="password">
          </div>
        </div>
        <div v-if="global_isRegisterTextShow">
          <div class="login-reg-input-wrapper">
            <label>Full Name</label>
            <input type="text">
          </div>
          <div class="login-reg-input-wrapper">
            <label>User Name</label>
            <input type="text">
          </div>
          <div class="login-reg-input-wrapper">
            <label>Password</label>
            <input type="password">
          </div>
          <div class="login-reg-input-wrapper">
            <label>Confirm Password</label>
            <input type="password">
          </div>
          <div class="login-reg-input-wrapper">
            <label>Contact Number</label>
            <input type="text">
          </div>
          <div class="login-reg-input-wrapper">
            <label>Email</label>
            <input type="text">
          </div>
        </div>
        <div class="btn-container">
          <button v-if="!global_isRegisterTextShow" class="btn-login">Log in</button>
          <button @click="___showLoginRegText('sign-in')" v-if="global_isRegisterTextShow" class="btn-login">Sign in</button>
          <button @click="___showLoginRegText('register')" class="btn-register">Register</button>
        </div>
      </div>
      <div slot="footer">
        
      </div>
    </Modal>
  </div>
</template>

<script>
	import bizHome from '@/components/biz/home'
	export default bizHome
</script>