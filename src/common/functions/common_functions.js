import Vue from 'vue';
import router from '../../router';
import * as Config from '../constants.js';
import axios from 'axios';
import moment from "moment";
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

const	defaultHeaders	=		{
	// 'Accept':	'application/json',
	// 'Content-Type':	'application/json',
	'Authorization':	localStorage.company_session
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

const _register_	=	(params) => { // ADMIN LOGIN API
	let	req	=	{
		method:	'POST',
		url:	Config.AUTH_REGISTER,
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
	if (formData.hasOwnProperty('company_name') && !formData.company_name) {
		error_checkForm.push("Company Name is required");
	}
	if (formData.hasOwnProperty('mobile') && !formData.mobile) {
		error_checkForm.push("Mobile is required");
	}
	if (formData.hasOwnProperty('email') && !formData.email) {
		error_checkForm.push("Email is required");
	}
	if (formData.hasOwnProperty('password') && !formData.password) {
		error_checkForm.push("Password is required");
	}
	if (formData.hasOwnProperty('confirm_password') && !formData.confirm_password) {
		error_checkForm.push("Confirm Password is required");
	}
	if (formData.hasOwnProperty('confirm_password') && formData.confirm_password) {
		if (formData.password != formData.confirm_password) {
			error_checkForm.push("Passwords do not match");
		}
	}
	
	
	if (!error_checkForm.length) {
		return true;
	} else {
		console.log(error_checkForm);
		let _newError = [];
		error_checkForm.map(value => {
			_newError.push(`<li class="form-error-li">${value}</li>`);
		});
		Vue.swal( 'Error!', `<ul class="swal-form-errors-container">${ _newError.join('\n\n') }</ul>`, 'warning' );
		return false;
	}
}



export	{
	_login_,
	_register_,
	_goBack_,
	_showPageLoading_,
	_hidePageLoading_,
	_validateEmail_,
	_globalStorage_,
  _formChecker_,
}