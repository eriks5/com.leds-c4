'use strict';
/* eslint-disable */
const config = {
	class: 'other',
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_remote', 'generic_done'],
		views: [{
				template: '../lib/pair/imitate.html',
				options: {
					title: 'deviceClasses.generic_remote.views.generic_imitate.title',
					body: 'deviceClasses.generic_remote.views.generic_imitate.body',
					prepend: [],
					append: [],
					svg: '../../433_generator/assets/fan_remote/pair.svg',
					svgWidth: '80vw',
					svgHeight: '70vh',
					initWithDeviceData: false,
					previous: true,
					next: false
				},
				prepend: ['../../assets/433_generator/css/styles.css',
					'../../assets/433_generator/css/svg.css',
					'../../assets/433_generator/js/svghighlighter.js'
				],
				append: [],
				id: 'generic_imitate'
			},
			{
				template: '../lib/pair/test_remote.html',
				options: {
					svg: '../../433_generator/assets/fan_remote/icon.svg',
					prepend: [],
					append: [],
					title: 'views.generic_test_remote.title',
					body: 'views.generic_test_remote.body',
					svgWidth: '80vw',
					svgHeight: '70vh',
					initWithDeviceData: false,
					previous: true,
					next: true
				},
				prepend: ['../../assets/433_generator/css/styles.css',
					'../../assets/433_generator/css/svg.css',
					'../../assets/433_generator/js/svghighlighter.js'
				],
				append: [],
				id: 'generic_test_remote'
			},
			{
				template: '../lib/pair/done.html',
				options: {
					title: 'views.generic_done.title',
					prepend: '',
					append: ''
				},
				prepend: [],
				append: [],
				id: 'generic_done'
			}
		]
	},
	images: {
		small: '../../433_generator/assets/fan_remote/images/small.jpg',
		large: '../../433_generator/assets/fan_remote/images/large.jpg'
	},
	id: 'fan_remote',
	signal: 'pt2260',
	driver: '../../433_generator/drivers/fan_control/driver.js',
	triggers: [{
		id: 'fan_remote:received',
		title: '433_generator.generic.button_pressed',
		args: [{
				name: 'command',
				type: 'dropdown',
				values: [{
						id: '0010',
						label: 'command.stop'
					},
					{
						id: '0001',
						label: 'command.hi'
					},
					{
						id: '0100',
						label: 'command.med'
					},
					{
						id: '1000',
						label: 'command.low'
					},
					{
						id: '0110',
						label: 'command.light'
					},
					{
						id: '1010',
						label: 'command.stop1h'
					},
					{
						id: '1001',
						label: 'command.stop2h'
					},
					{
						id: '1100',
						label: 'command.stop4h'
					},
					{
						id: '0011',
						label: 'command.stop8h'
					}
				]
			},
			{
				name: 'device',
				type: 'device',
				filter: 'driver_id=fan_remote'
			}
		]
	}],
	name: 'devices.fan_remote.name',
	icon: '../../433_generator/assets/fan_remote/icon.svg'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
