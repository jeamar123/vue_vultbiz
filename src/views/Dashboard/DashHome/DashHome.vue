<template>
	<div class="home-container" >
		
		<div class="box-item-container">
			<div class="box-items">
				<p class="box-title">
					Profile Views 
				</p>
				<div class="chart-container">
					<profileViewsChart :chartData="profileViewsChartData"></profileViewsChart>
				</div>
				<dateFilter></dateFilter>
			</div>
			<div class="box-items">
				<p class="box-title">
					Daily Sales
				</p>
				<div class="chart-container">
					<dailySalesChart :chartData="dailySalesChartData"></dailySalesChart>
				</div>
				<dateFilter></dateFilter>
			</div>
			<!-- <div class="box-items">
				<p class="box-title">
					
				</p>
			</div> -->
		</div>

		<div class="box-item-container">
			<div class="box-items recent-visitors">
				<div class="box-title">
					<p>
						Recent Visitors
					</p>
					<router-link :to="{ name : 'UserList' }">
						<div class="icon-box">
		  				<i class="fa fa-caret-right"></i>
		  			</div>
		  		</router-link>
				</div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Date</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="list in [1,2,3,4,5]" :key="list">
							<td>Jhon Doe</td>
							<td>jhon.doe@gmail.com</td>
							<td>22/09/2019 04:34 PM</td>
							<td>
								<div class="icon-box">
									<img :src="'../assets/img/black icons/002-search.png'">
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="flex-0-5"></div>
		</div>

		<!-- <div class="box-item-container">
			<div class="box-items">
			</div>
		</div> -->

  </div>
  
</template>

<script>
	import DashHome from './function.vue'
	export default DashHome
</script>
