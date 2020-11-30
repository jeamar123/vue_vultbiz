<script>
	import axios from 'axios'

	var BusinessHours = {
		data() {
			return {
				showLoader : false,
				weekDaysData	:	[
					{
						name: 'Monday',
						start: '07:00 am',
						end: '08:00 pm',
						isShowStartDrop: false,
						isShowEndDrop: false,
						enable: true,
					},
					{
						name: 'Tuesday',
						start: '07:00 am',
						end: '08:00 pm',
						isShowStartDrop: false,
						isShowEndDrop: false,
						enable: false,
					},
					{
						name: 'Wednesday',
						start: '07:00 am',
						end: '08:00 pm',
						isShowStartDrop: false,
						isShowEndDrop: false,
						enable: false,
					},
					{
						name: 'Thursday',
						start: '07:00 am',
						end: '08:00 pm',
						isShowStartDrop: false,
						isShowEndDrop: false,
						enable: false,
					},
					{
						name: 'Friday',
						start: '07:00 am',
						end: '08:00 pm',
						isShowStartDrop: false,
						isShowEndDrop: false,
						enable: false,
					},
					{
						name: 'Saturday',
						start: '07:00 am',
						end: '08:00 pm',
						isShowStartDrop: false,
						isShowEndDrop: false,
						enable: false,
					},
					{
						name: 'Sunday',
						start: '07:00 am',
						end: '08:00 pm',
						isShowStartDrop: false,
						isShowEndDrop: false,
						enable: false,
					},
				],
			}
		},
		created() {
			
		},
		methods: {
      showLoading() {
      	this.showLoader = true;
      },
      hideLoading() {
      	setTimeout(()=>{
				  this.showLoader = false;
				},100);
			},
			toggleTimePickerDrop(type, index){
				this.closeAllDropdown();
				if(type == 'start'){
					this.weekDaysData[index].isShowStartDrop = true;
				}
				if(type == 'end'){
					this.weekDaysData[index].isShowEndDrop = true;
				}
			},
			clickedOutsideDrops(e){
				if ($(e.target).parents(".hour-select-container").length === 0) {
					this.closeAllDropdown();
				}
			},
			closeAllDropdown(){
				this.weekDaysData.map((value,key)	=>	{
					value.isShowStartDrop = false;
					value.isShowEndDrop = false;
				});
			},
			toggleDayStatus(index, opt){
				this.weekDaysData[index].enable = opt;
			},
			setTimePicker(type, index, value){
				if(type == 'start'){
					this.weekDaysData[index].start = value; 
				}
				if(type == 'end'){
					this.weekDaysData[index].end = value;
				}
				this.closeAllDropdown();
			},
    }
	}

	export default BusinessHours;
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>