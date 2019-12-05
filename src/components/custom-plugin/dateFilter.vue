<template>
  <div class="chart-filter">
    <div class="chart-wrapper" v-click-outside="hideAllFilter">
      <div class="filter-btn" v-on:click="showFilter()"><span>{{ dateFilter }}</span> <i class="fa fa-caret-down"></i></div>

      <transition name="fade">
        <div v-show="isShowFilterDrop" class="filter-drop" >
          <div v-show="isShowMainFilter" class="main-filter">
            <div class="filter" v-on:click="selectFilter('Last 7 days')">Last 7 days</div>
            <div class="filter" v-on:click="selectFilter('by Month')">by Month</div>
            <div class="filter" v-on:click="selectFilter('by Year')">by Year</div>
            <div class="filter filter-custom" v-on:click="selectFilter('Custom')">Custom</div>
          </div>

          <div v-show="isShowMonthFilter" class="month-filter">
            <div class="month-wrapper">
              <div class="filter" v-for="list in ['January','February','March','April','May','June','July','August','September','October','November','December']" v-on:click="selectMonth( list )" :key="list">{{ list }}</div>
            </div>
            <div class="cancel-btn" v-on:click="hideMonthFilter()">Cancel</div>
          </div>

          <div v-show="isShowYearFilter" class="year-filter" >
            <div class="year-wrapper">
              <div class="filter" v-for="list in generateYears(20)" v-on:click="selectYear( list )" :key="list">{{ list }}</div>
            </div>
            <div class="cancel-btn" v-on:click="hideYearFilter()">Cancel</div>
          </div>

          <!-- <div v-if="isShowCustomFilter" class="custom-date-filter" >
            <v-date-picker 
              mode='range' 
              popoverDirection="bottom" 
              popoverVisibility="focus"
              :formats="formats"
              v-model='start_date' 
              is-inline
            >
            </v-date-picker>
          </div> -->
        </div>
      </transition>

      <div v-show="isShowCustomFilter" class="custom-date-filter" >
        <v-date-picker 
          @input="customDateSelect"
          mode="range" 
          popoverDirection="bottom" 
          popoverVisibility="focus"
          :popoverKeepVisibleOnInput="false"
          :formats="formats"
          v-model="custom_date_filter" 
          is-inline
        >
        </v-date-picker>
        <div class="cancel-btn" v-on:click="hideCustomFilter()">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {

  data() {
    return {
      formats: {
        input: ['MMMM DD, YYYY'], 
        data: ['MMMM DD, YYYY']
      },
      custom_date_filter : {
        start : moment().subtract( 6, 'days' ),
        end : moment(),
      },
      start_date : moment().subtract( 6, 'days' ),
      end_date : moment(),
      selectedMonth : null,
      dateFilter : 'Last 7 days',
      filterName : 'Last 7 days',
      filterValue : null,
      isShowFilterDrop: false,
      isShowMainFilter: true,
      isShowCustomFilter: false,
      isShowMonthFilter: false,
      isShowYearFilter: false,
    };
  },
  created() {
    this.pushFilterValues();
  },
  methods: {
  	pushFilterValues(){
  		// this.$parent.setDateFilter( this.custom_date_filter );
  		this.$emit('filterChanged', { filter : this.custom_date_filter, value : this.filterValue });
  	},
  	showFilter(){
      this.resetFilterViews();
      this.isShowFilterDrop = true;
      this.isShowMainFilter = true;
    },
    hideAllFilter(){
      this.isShowFilterDrop = false;
      this.isShowCustomFilter = false;
    },
    hideFilter(){
      this.isShowFilterDrop = false;
    },
    generateYears( num ){
      var year = new Date().getFullYear();
      var range = [];
      range.push(year);
      for (var i = 1; i < num; i++) {
        range.push(year - i);
      }
      return range;
    },
    customDateSelect( date ){
      this.start_date = moment( date.start ).format( "MMM DD YYYY" );
      this.end_date = moment( date.end ).format( "MMM DD YYYY" );
      this.custom_date_filter = {
        start : this.start_date,
        end : this.end_date,
      }
      this.dateFilter = moment(this.start_date).format('MMM DD') + " - " + this.end_date;
      this.hideCustomFilter();
      this.hideFilter();
      this.pushFilterValues();
      this.filterName = 'Custom';
      this.filterValue = {
        start : this.start_date,
        end : this.end_date,
      }
    },
    selectFilter( opt ){
      this.isShowMainFilter = false;
      if( opt == 'Custom' ){
        this.hideFilter();
        this.isShowCustomFilter = true;
      }else if( opt == 'by Month' ){
        this.isShowMonthFilter = true;
      }else if( opt == 'by Year' ){
        this.isShowYearFilter = true;
      }else if( opt == 'Last 7 days' ){ 
        this.dateFilter = opt;
        this.filterName = opt;
        this.custom_date_filter = {
	        start : moment().subtract( 6, 'days' ).format('YYYY-MM-DD'),
	        end : moment().format('YYYY-MM-DD'),
	      }
        this.pushFilterValues();
        this.hideFilter();
      }
    },
    selectMonth( month ){
      var yearNow = moment().format('YYYY');
      this.filterName = 'by Month';
      this.filterValue = month + " " + yearNow;
      this.dateFilter = "Month : " + month + " " + yearNow;
      this.hideFilter();
      this.custom_date_filter = {
        start : moment( month + " " + yearNow, 'MMMM YYYY' ).startOf('month').format('YYYY-MM-DD'),
        end : moment( month + " " + yearNow, 'MMMM YYYY' ).endOf('month').format('YYYY-MM-DD'),
      }
      this.pushFilterValues();
    },
    hideMonthFilter(){
      this.isShowMonthFilter = false;
      this.isShowMainFilter = true;
    },
    selectYear( year ){
      this.filterName = 'by Year';
      this.filterValue = year;
      this.dateFilter = "Year : " + year;
      this.hideFilter();
      this.custom_date_filter = {
        start : moment( year, 'YYYY' ).startOf('year').format('YYYY-MM-DD'),
        end : moment( year, 'YYYY' ).endOf('year').format('YYYY-MM-DD'),
      }
      this.pushFilterValues();
    },
    hideYearFilter(){
      this.isShowYearFilter = false;
      this.isShowMainFilter = true;
    },
    hideCustomFilter(){
      this.isShowCustomFilter = false;
      this.showFilter();
    },
    resetFilterViews(){
      this.isShowMainFilter = false;
      this.isShowCustomFilter = false;
      this.isShowMonthFilter = false;
      this.isShowYearFilter = false;
    },
  }
};
</script>


