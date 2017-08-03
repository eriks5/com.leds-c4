'use strict';

const formenteraCommandLabels = require('./drivers/formentera/commands').labels;

module.exports = {
  deviceClasses: {
    pt2260: {
      signal: require('./drivers/pt2260/signal.js')
    },
    formentera_triggers: {
      triggers: [
        {
          id: 'received',
          title: '433_generator.generic.button_pressed',
          args: [
            {
              name: 'command.name',
              type: 'dropdown',
              values: formenteraCommandLabels
            }
          ]
        }
      ]
    },
    formentera_actions: {
      actions: [
        {
          id: 'send',
          title: {
            "en": "Send command",
            "nl": "Stuur commando"
          },
          args: [
            {
              name: 'command.name',
              type: 'dropdown',
              values: formenteraCommandLabels
            }
          ]
        }
      ]
    },
    formentera: {
      driver: './drivers/formentera/driver.js'
    },
    dipswitch_remote: {
      extends: ['generic_remote', 'pt2260'],
    },
    ceiling_fan: {
      extends: ['generic_dipswitch_switch', 'pt2260'],
      class: 'fan',
      capabilities: ['onoff', 'dim'],
      capabilitiesOptions: {
        dim: {
          decimals: 1,
          min: 0,
          max: 1,
          title: 'deviceClasses.ceiling_fan.capabilitiesOptions.dim.title'
        }
      },
      pair: {
        viewOptions: {
          generic_choice: {
            buttons: [{
              name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_imitate',
              view: 'generic_imitate',
              svg: '#'
              // svg: fs.readFileSync(path.join(__dirname, './assets/AB440R/icon.svg')).toString(),
            }, {
              name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
              view: 'generic_info',
              svg: '#'
              // svg: fs.readFileSync(path.join(__dirname, './assets/AB440SC/dipswitches.svg')).toString(),
            }],
          },
          generic_dipswitch: {
            dipswitchList: [1, 2, 3, 4],
          },
          generic_test_switch: {
            title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
            body: 'deviceClasses.ceiling_fan.views.generic_test_switch.body',
          },
          generic_test_switch_2: {
            title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
            body: 'deviceClasses.ceiling_fan.views.generic_test_switch_2.body',
          },
        }
      }
    }
  },
  devices: {
    formentera_fan: {
      logLevel: 2,
      extends: ['ceiling_fan', 'formentera', 'formentera_triggers', 'formentera_actions'],
      name: 'devices.formentera_fan.name',
      icon: '#',
      pair: {
        viewOptions: {
          generic_info: {
            svg: '#'
          },
          generic_imitate: {
            svg: '#'
          },
        }
      },
    },
    formentera_remote: {
      logLevel: 2,
      extends: ['dipswitch_remote', 'formentera', 'formentera_triggers'],
      name: 'devices.formentera_remote.name',
      icon: '#',
      pair: {
        viewOptions: {
          generic_imitate: {
            svg: '#'
          },
          generic_test_remote: {
            svg: '#'
          }
        }
      }
    }
  },
};
