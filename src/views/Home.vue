<template>
	<div class="home-container" >
		
		<div class="box-item-container">
			<div class="box-items">
				<p class="box-title">
					Profile Views 
				</p>
				<div class="chart-container">
					<canvas id="profile-views-chart"></canvas>
				</div>
			</div>
			<div class="box-items">
				<p class="box-title">
					Daily Sales
				</p>
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
					<div class="icon-box">
						<i class="fa fa-caret-right"></i>
					</div>
				</div>
				<table>
					<tbody>
						<tr v-for="list in [1,2,3]" :key="list">
							<td>Jhon Doe</td>
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

			<div class="flex-1-5"></div>
		</div>

		<!-- <div class="box-item-container">
			<div class="box-items">
			</div>
		</div> -->

  </div>
  
</template>

<script>
	import home from '@/components/home'
	export default home
</script>
