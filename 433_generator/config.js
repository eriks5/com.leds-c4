'use strict';

const fs = require('fs');
const path = require('path');

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
              name: 'command',
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
              name: 'command',
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
              svg: fs.readFileSync(path.join(__dirname, './assets/formentera_remote/icon.svg')).toString(),
            }, {
              name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
              view: 'generic_info',
              svg: fs.readFileSync(path.join(__dirname, './assets/formentera_remote/dipswitch.svg')).toString(),
            }],
          },
          generic_dipswitch: {
            dipswitchList: [1, 2, 3, 4],
          },
          generic_test_switch: {
            title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
            svg: './assets/formentera_fan/test.svg',
            body: 'deviceClasses.ceiling_fan.views.generic_test_switch.body',
          },
          generic_test_switch_2: {
            title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
            svg: './assets/formentera_fan/test.svg',
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
      icon: './assets/formentera_fan/icon.svg',
      pair: {
        viewOptions: {
          generic_info: {
            svg: './assets/formentera_remote/dipswitch.svg'
          },
          generic_imitate: {
            svg: './assets/formentera_remote/icon.svg'
          },
        }
      },
    },
    formentera_remote: {
      logLevel: 2,
      extends: ['dipswitch_remote', 'formentera', 'formentera_triggers'],
      name: 'devices.formentera_remote.name',
      icon: './assets/formentera_remote/icon.svg',
      pair: {
        viewOptions: {
          generic_imitate: {
            svg: './assets/formentera_remote/pair.svg'
          },
          generic_test_remote: {
            svg: './assets/formentera_remote/icon.svg'
          }
        }
      }
    }
  },
};
