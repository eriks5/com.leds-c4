'use strict';
/* eslint-disable */
const config = {
	capabilities: ['onoff', 'dim'],
	pair: {
		viewOrder: ['generic_choice',
			'generic_imitate',
			'generic_test_switch_2',
			'generic_info',
			'generic_dipswitch',
			'generic_test_switch',
			'generic_done'
		],
		views: [{
				template: '../lib/pair/choice.html',
				options: {
					title: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.title',
					body: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.body',
					buttons: [{
							name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_imitate',
							view: 'generic_imitate',
							svg: '#'
						},
						{
							name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
							view: 'generic_info',
							svg: '#'
						}
					],
					prepend: [],
					append: [],
					svgWidth: '80vw',
					svgHeight: '65vh'
				},
				prepend: ['../../assets/433_generator/css/styles.css',
					'../../assets/433_generator/css/svg.css',
					'../../assets/433_generator/js/svghighlighter.js'
				],
				append: [],
				id: 'generic_choice'
			},
			{
				template: '../lib/pair/imitate.html',
				options: {
					svg: '#',
					prepend: [],
					append: [],
					title: 'views.generic_imitate.title',
					body: 'views.generic_imitate.body',
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
				template: '../lib/pair/test_switch.html',
				options: {
					next: 'generic_done',
					initWithDeviceData: true,
					sendToggleOnInit: false,
					prepend: [],
					append: [],
					title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
					body: 'deviceClasses.ceiling_fan.views.generic_test_switch_2.body',
					svg: '../../assets/433_generator/images/light.svg',
					svgWidth: '80vw',
					svgHeight: '70vh',
					previous: true
				},
				prepend: ['../../assets/433_generator/css/styles.css',
					'../../assets/433_generator/css/svg.css',
					'../../assets/433_generator/js/svghighlighter.js',
					'../../assets/433_generator/css/styles.css',
					'../../assets/433_generator/css/svg.css',
					'../../assets/433_generator/js/svghighlighter.js'
				],
				append: [],
				id: 'generic_test_switch_2'
			},
			{
				template: '../lib/pair/info.html',
				options: {
					title: 'deviceClasses.generic_dipswitch_socket.views.generic_info.title',
					body: 'deviceClasses.generic_dipswitch_socket.views.generic_info.body',
					previous: 'generic_choice',
					prepend: [],
					append: [],
					svg: '#',
					svgWidth: '80vw',
					svgHeight: '70vh',
					next: true
				},
				prepend: ['../../assets/433_generator/css/styles.css',
					'../../assets/433_generator/css/svg.css',
					'../../assets/433_generator/js/svghighlighter.js'
				],
				append: [],
				id: 'generic_info'
			},
			{
				template: '../lib/pair/dipswitch.html',
				options: {
					dipswitchList: [1, 2, 3, 4],
					prepend: [],
					append: [],
					title: 'views.generic_dipswitch.title',
					body: 'views.generic_dipswitch.body',
					svgWidth: '80vw',
					svgHeight: '24vh',
					previous: true,
					next: true
				},
				prepend: ['../../assets/433_generator/css/styles.css',
					'../../assets/433_generator/css/dipswitch.css'
				],
				append: [],
				id: 'generic_dipswitch'
			},
			{
				template: '../lib/pair/test_switch.html',
				options: {
					title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
					body: 'deviceClasses.ceiling_fan.views.generic_test_switch.body',
					prepend: [],
					append: [],
					svg: '../../assets/433_generator/images/light.svg',
					svgWidth: '80vw',
					svgHeight: '70vh',
					initWithDeviceData: true,
					previous: true,
					next: true,
					sendToggleOnInit: false
				},
				prepend: ['../../assets/433_generator/css/styles.css',
					'../../assets/433_generator/css/svg.css',
					'../../assets/433_generator/js/svghighlighter.js',
					'../../assets/433_generator/css/styles.css',
					'../../assets/433_generator/css/svg.css',
					'../../assets/433_generator/js/svghighlighter.js'
				],
				append: [],
				id: 'generic_test_switch'
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
	images: {},
	id: 'formentera_fan',
	class: 'fan',
	signal: 'pt2260',
	capabilitiesOptions: {
		dim: {
			decimals: 1,
			min: 0,
			max: 1,
			title: 'deviceClasses.ceiling_fan.capabilitiesOptions.dim.title'
		}
	},
	driver: '../../433_generator/drivers/formentera/driver.js',
	triggers: [{
		id: 'formentera_fan:received',
		title: '433_generator.generic.button_pressed',
		args: [{
				name: 'command.name',
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
				filter: 'driver_id=formentera_fan'
			}
		]
	}],
	actions: [{
		id: 'formentera_fan:send',
		title: {
			en: 'Send command',
			nl: 'Stuur commando'
		},
		args: [{
				name: 'command.name',
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
				filter: 'driver_id=formentera_fan'
			}
		]
	}],
	logLevel: 2,
	name: 'devices.formentera_fan.name',
	icon: '#'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(), 
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
