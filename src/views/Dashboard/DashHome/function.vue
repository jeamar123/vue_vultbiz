<script>
	import axios from 'axios';
	import moment from "moment";

	import dateFilter from '@/components/custom-plugin/dateFilter';

	import profileViewsChart from '@/components/graphs/profileViewsChart';
	import dailySalesChart from '@/components/graphs/dailySalesChart';

	var DashHome = {
		components: {
			profileViewsChart,
			dailySalesChart,
			dateFilter,
		},
		data() {
			return {
				showLoader : false,
				profileViewsChartData : {},
				dailySalesChartData : {},
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
				},1000);
      },
    }
	}

	export default DashHome
</script>

<style lang="scss" scoped>
	@import "./style.scss";
</style>