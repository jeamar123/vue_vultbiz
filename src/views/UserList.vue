<template>
	<div class="user-list-container" >
		<div class="header-container">
			<div class="header-title">
				<p>List of Visitors</p>
			</div>
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
  
</template>

<script>
	import userList from '@/components/userList'
	export default userList
</script>
