import Vue from 'vue';
import router from '../../router';
import * as Config from '../constant.js';
import axios from 'axios';
import moment from "moment";
import jsPDF from 'jspdf'
import 'jspdf-autotable';

const	defaultHeaders	=		{
	// 'Accept':	'application/json',
	// 'Content-Type':	'application/json',
	'Authorization':	localStorage.vue_admin_session
};
const	uploadHeaders	=		{
	// 'Accept':	'application/json',
	// 'Content-Type':	'application/json',
	'Authorization':	localStorage.vue_admin_session,
	'Content-Type': 'multipart/form-data'
};

let global_storage	=	{};

const	_axiosCall_	=	(params)	=>	{ // Axios HTTP Request
	return axios(params)
		.then(res	=>	{
			return	res;
		})
		.catch(err	=>	{
			// return _errorHandlers_( err );
			Vue.swal('Error!',	_errorHandlers_(err).data.message,	'error');
			return false;
		});
};

const	_errorHandlers_	=	(err)	=>	{ // Axios ERROR HANDLER
	// console.log(err);
	let	err_data	=	{};
	if	(err.response) {
		console.log(err.response);
		if	(err.response.status == 400 || err.response.status == 401 || err.response.status == 404 || err.response.status == 500){
			err_data	=	{status: false, message: err.response.data.message};
		}
	} else if	(err.request) {
		console.log(err.request);
		err_data	=	{status: false, message: 'Something went wrong. The request was made but no response was received.'};
	} else {
		console.log('Something happened in setting up the request that triggered an Error. ', error.message);
		err_data	=	{status: false, message: 'Something went wrong. The request was made but no response was received.'};
	}
	return {data:	err_data};
};

const _login_	=	(params) => { // ADMIN LOGIN API
	let	req	=	{
		method:	'POST',
		url:	Config.AUTH_LOGIN,
		data:	params,
		header:	defaultHeaders,
	};
	return	_axiosCall_(req);
};

const _goBack_	=	()	=>	{ // ROUTER BACK LAST STATE
	router.back();
}

const _showPageLoading_	=	()	=>{
	router.app.$children[0].$children[0].showLoading();
}

const _hidePageLoading_  =  () =>{
	router.app.$children[0].$children[0].hideLoading();
}

const _validateEmail_	=	(email)	=>	{ // For validtaion with RegEx
	let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

const _globalStorage_	=	{ // CUSTOM LOCAL STORAGE
	getStorage: ( key )	=>	{
		if( key ){
			if(global_storage.hasOwnProperty(key)){
				return global_storage[ key ];
			}else{
				return null;
			}
		}
		return global_storage;
	},
	setStorage: ( key, value )	=>	{
		global_storage[key] = value;
	},
}

const _formChecker_	=	(formData)	=>	{
	let error_checkForm = [];
	console.log(formData);
	if (formData.hasOwnProperty('fullname') && !formData.fullname) {
		error_checkForm.push("Name.");
	}
	if (formData.hasOwnProperty('phone_code') && !formData.phone_code) {
		error_checkForm.push("Area Code.");
	}
	if (formData.hasOwnProperty('phone_no') && !formData.phone_no) {
		error_checkForm.push("Mobile Number.");
	}
	if (formData.hasOwnProperty('phone') && !formData.phone) {
		error_checkForm.push("Phone Number.");
	}
	if (formData.hasOwnProperty('job_title') && !formData.job_title) {
		error_checkForm.push("Job Title.");
	}
	if (formData.hasOwnProperty('dob') && !formData.dob) {
		error_checkForm.push("Date of Birth.");
	}
	if (formData.hasOwnProperty('email') && !formData.email) {
		error_checkForm.push('Email.');
	} else if (formData.hasOwnProperty('email')) {
		if( !_validateEmail_(formData.email) ){
			error_checkForm.push('Valid email.');
		}
	}
	if (formData.hasOwnProperty('plan_start') && !formData.plan_start) {
		error_checkForm.push("Plan Start.");
	}
	if (formData.hasOwnProperty('postal_code') && !formData.postal_code) {
		error_checkForm.push("Postal Code.");
	}
	if (formData.hasOwnProperty('relationship') && !formData.relationship) {
		error_checkForm.push("Relationship.");
	}
	if (formData.hasOwnProperty('employees') && formData.employees === undefined) {
		error_checkForm.push("Employees.");
	}else if( formData.hasOwnProperty('employees') ){
		if( formData.employees < 3 ){
			error_checkForm.push("Employees should be at least 3.");
		}
	}
	if (formData.hasOwnProperty('account_type') && !formData.account_type) {
		error_checkForm.push("Account Type.");
	}
	if (formData.hasOwnProperty('payment_status') && formData.payment_status === undefined) {
		error_checkForm.push("Payment Status.");
	}
	if (formData.hasOwnProperty('medical_credits') && formData.medical_credits === undefined)	{
		error_checkForm.push('Medical Credits.');
	}
	if (formData.hasOwnProperty('wellness_credits') && formData.wellness_credits === undefined)	{
		error_checkForm.push('Wellness Credits.');
	}
	if (formData.hasOwnProperty('medical_allocation') && formData.medical_allocation === undefined)	{
		error_checkForm.push('Medical Credits.');
	}
	if (formData.hasOwnProperty('wellness_allocation') && formData.wellness_allocation === undefined)	{
		error_checkForm.push('Wellness Credits.');
	}

	if (formData.hasOwnProperty('company_name') && !formData.company_name)	{
		error_checkForm.push('Company Name.');
	}
	if (formData.hasOwnProperty('company_address') && !formData.company_address)	{
		error_checkForm.push('Company Address.');
	}
	if (formData.hasOwnProperty('first_name') && !formData.first_name)	{
		error_checkForm.push('First Name.');
	}
	if (formData.hasOwnProperty('last_name') && !formData.last_name)	{
		error_checkForm.push('Last Name.');
	}
	if (formData.hasOwnProperty('billing_first_name') && !formData.billing_first_name)	{
		error_checkForm.push('Billing First Name.');
	}
	if (formData.hasOwnProperty('billing_last_name') && !formData.billing_last_name)	{
		error_checkForm.push('Billing Last Name.');
	}
	if (formData.hasOwnProperty('billing_email') && !formData.billing_email)	{
		error_checkForm.push('Billing Email.');
	}
	if (formData.hasOwnProperty('billing_phone') && !formData.billing_phone)	{
		error_checkForm.push('Billing Phone Number.');
	}
	if (formData.hasOwnProperty('companyContacts'))	{
		formData.companyContacts.map((value, key)	=>	{
			if (value.hasOwnProperty('first_name') && !value.first_name)	{
				error_checkForm.push('Contact First Name.');
			}
			if (value.hasOwnProperty('last_name') && !value.last_name)	{
				error_checkForm.push('Contact Last Name.');
			}
			if (value.hasOwnProperty('email') && !value.email)	{
				error_checkForm.push('Contact Email.');
			}
			if (value.hasOwnProperty('phone') && !value.phone)	{
				error_checkForm.push('Contact Phone Number.');
			}
		});
	}

	if (formData.hasOwnProperty('paid_amount') && !formData.paid_amount)	{
		error_checkForm.push('Paid Amount.');
	}
	if (formData.hasOwnProperty('transaction_date') && !formData.transaction_date)	{
		error_checkForm.push('Date Received.');
	}
	if (formData.hasOwnProperty('invoice_due_date') && !formData.invoice_due_date)	{
		error_checkForm.push('Invoice Due Date.');
	}
	if (formData.hasOwnProperty('invoice_date') && !formData.invoice_date)	{
		error_checkForm.push('Invoice Date.');
	}
	if (formData.hasOwnProperty('individual_price') && !formData.individual_price)	{
		error_checkForm.push('Individual Price.');
	}
	if (formData.hasOwnProperty('duration') && !formData.duration)	{
		error_checkForm.push('Duration.');
	}
	if (formData.hasOwnProperty('payment_status') && formData.payment_status == undefined)	{
		error_checkForm.push('Payment Status.');
	}
	
	
	if (!error_checkForm.length) {
		return true;
	} else {
		console.log(error_checkForm);
		let _newError = [];
		error_checkForm.map(value => {
			_newError.push(`<span class="block p-1 text-red-500 text-center w-1/2 mx-auto my-0">${value}</span>`);
		});
		Vue.swal( 'Required', _newError.join('\n\n'), 'warning' );
		return false;
	}
}



export	{
	_login_,
	_goBack_,
	_showPageLoading_,
	_hidePageLoading_,
	_validateEmail_,
	_globalStorage_,
  _childGetStorage_,
  _formChecker_,
}