'use strict';

const path = require('path');
const express = require('express');
const Vue = require('vue/dist/vue.runtime.common.js');
const VueRender = require('vue-server-renderer').createRenderer();

const App = {
	template: '<div>{{test}}</div>',
	computed: {
		"test": function () {
			throw 'erro happened';
			return 1;
		}
	}
}
const vm = new Vue(App);

VueRender.renderToString(vm, function (error, html) {
	if (error) {
		console.log('error happened', error)
	} else {
		console.log(html);
	}
})