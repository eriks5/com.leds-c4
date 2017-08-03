'use strict';

const fs = require('fs');
const path = require('path');

const fanCommandLabels = require('./drivers/fan_control/commands').labels;

module.exports = {
  deviceClasses: {
    pt2260: {
      signal: require('./drivers/pt2260/signal.js')
    },
    fan_triggers: {
      triggers: [
        {
          id: 'received',
          title: '433_generator.generic.button_pressed',
          args: [
            {
              name: 'command',
              type: 'dropdown',
              values: fanCommandLabels
            }
          ]
        }
      ]
    },
    fan_actions: {
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
              values: fanCommandLabels
            }
          ]
        }
      ]
    },
    fan_control: {
      driver: './drivers/fan_control/driver.js'
    },
    generic_fan_remote: {
      extends: ['generic_remote', 'pt2260'],
    },
    generic_ceiling_fan: {
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
              svg: fs.readFileSync(path.join(__dirname, './assets/fan_remote/icon.svg')).toString(),
            }, {
              name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
              view: 'generic_info',
              svg: fs.readFileSync(path.join(__dirname, './assets/ceiling_fan/dipswitch.svg')).toString(),
            }],
          },
          generic_dipswitch: {
            dipswitchList: [1, 2, 3, 4],
          },
          generic_test_switch: {
            title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
            svg: './assets/ceiling_fan/test.svg',
            body: 'deviceClasses.ceiling_fan.views.generic_test_switch.body',
          },
          generic_test_switch_2: {
            title: 'deviceClasses.ceiling_fan.views.generic_test_switch.title',
            svg: './assets/ceiling_fan/test.svg',
            body: 'deviceClasses.ceiling_fan.views.generic_test_switch_2.body',
          },
        }
      }
    }
  },
  devices: {
    ceiling_fan: {
      // logLevel: 2,
      extends: ['generic_ceiling_fan', 'fan_control', 'fan_triggers', 'fan_actions'],
      name: 'devices.ceiling_fan.name',
      icon: './assets/ceiling_fan/icon.svg',
      images: {
        small: './assets/ceiling_fan/images/small.jpg',
        large: './assets/ceiling_fan/images/large.jpg',
      },
      pair: {
        viewOptions: {
          generic_info: {
            svg: './assets/ceiling_fan/dipswitch.svg'
          },
          generic_imitate: {
            svg: './assets/fan_remote/pair.svg'
          },
        }
      },
    },
    fan_remote: {
      // logLevel: 2,
      extends: ['generic_fan_remote', 'fan_control', 'fan_triggers'],
      name: 'devices.fan_remote.name',
      icon: './assets/fan_remote/icon.svg',
      images: {
        small: './assets/fan_remote/images/small.jpg',
        large: './assets/fan_remote/images/large.jpg',
      },
      pair: {
        viewOptions: {
          generic_imitate: {
            svg: './assets/fan_remote/pair.svg'
          },
          generic_test_remote: {
            svg: './assets/fan_remote/icon.svg'
          }
        }
      }
    }
  },
};
