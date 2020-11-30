<template>
	
	<div class="business-hours-container">
		<div class="header-title">
			<p>Set up your Working Hours</p>
		</div>
		<div v-for="(week, week_index) in weekDaysData" :key="week.index" class="week-row">
			
			<div class="toggle-container">
				<div class="toggle toggle-on" v-bind:class="{'active' : week.enable}" v-on:click="toggleDayStatus(week_index, true)">
					<i class="fa fa-check"></i>
				</div>
				<div class="toggle toggle-off" v-bind:class="{'active' : !week.enable}" v-on:click="toggleDayStatus(week_index, false)">
					<i class="fa fa-times"></i>
				</div>
			</div>

			<div class="day-name">{{ week.name }}</div>

			<div v-bind:class="{'disabled' : !week.enable}" class="hour-select-container" >
				<div class="time-selector start-time-select">
					<div class="time-value" v-on:click="toggleTimePickerDrop('start', week_index)" >
						<span class="time">{{ week.start }}</span>
						<span class="caret-box">
							<i class="fa fa-caret-down"></i>
						</span>
					</div>
					<div v-show="week.isShowStartDrop" class="time-picker-drop" v-click-outside="clickedOutsideDrops">
						<div class="time-option" v-on:click="setTimePicker('start', '12:00 am')">12:00 am</div>	
						<div class="time-option" :key="time.index" v-for="time in 11" v-on:click="setTimePicker('start', week_index, (time > 9 ? null : 0) + '' + time + ':00 am')">{{time > 9 ? null : 0}}{{time}}:00 am</div>	
						<div class="time-option">12:00 pm</div>	
						<div class="time-option" :key="time.index" v-for="time in 11" v-on:click="setTimePicker('start', week_index, (time > 9 ? null : 0) + '' + time + ':00 pm')">{{time > 9 ? null : 0}}{{time}}:00 pm</div>	
					</div>
				</div>

				<div class="time-selector end-time-select">
					<div class="time-value" v-on:click="toggleTimePickerDrop('end', week_index)">
						<span class="time">{{ week.end }}</span>
						<span class="caret-box">
							<i class="fa fa-caret-down"></i>
						</span>
					</div>
					<div v-show="week.isShowEndDrop" class="time-picker-drop" v-click-outside="clickedOutsideDrops">
						<div class="time-option" v-on:click="setTimePicker('start', '12:00 am')">12:00 am</div>	
						<div class="time-option" :key="time.index" v-for="time in 11" v-on:click="setTimePicker('end', week_index, (time > 9 ? null : 0) + '' + time + ':00 am')">{{time > 9 ? null : 0}}{{time}}:00 am</div>	
						<div class="time-option">12:00 pm</div>	
						<div class="time-option" :key="time.index" v-for="time in 11" v-on:click="setTimePicker('end', week_index, (time > 9 ? null : 0) + '' + time + ':00 pm')">{{time > 9 ? null : 0}}{{time}}:00 pm</div>	
					</div>
				</div>
			</div>

		</div>
	</div>
  
</template>

<script>
	import BusinessHours from './function.vue'
	export default BusinessHours
</script>
