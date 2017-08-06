'use strict';

// Driver to control LEDS-C4 ceiling fans

const PT2260 = require('../pt2260/driver');
const commands = require('./commands');

const ADDRESS_RE = /^[02]{4}2{4}$/;
const COMMAND_STATE_MAP = {
  [commands.STOP]: {state: 0},
  [commands.LOW]: {state: 1, dim: 0.0},
  [commands.MED]: {state: 1, dim: 0.5},
  [commands.HI]: {state: 1, dim: 1.0},
};

module.exports = class FanControl extends PT2260 {
  constructor(config) {
    super(config);
    this.on('frame', this.updateState.bind(this));
    this.on('new_state', this.updateRealtime.bind(this));
    this.on('new_pairing_device', device => this.updateState(device.data));
  }

  isValidAddress(address){
    this.logger.silly("FanControl:isValidAddress(address)", address);
    return address.match(ADDRESS_RE) !== null;
  }

  isValidCommand(command){
    this.logger.silly("FanControl:isValidCommand(command)", command);
    return commands.isValid(command);
  }

  getAddressFromDipSwitches(dipswitches){
    this.logger.silly("FanControl:getAddressFromDipSwitches(dipswitches)", dipswitches);
    if (dipswitches.length >= 4){
      return dipswitches.slice(0, 4).map(sw => sw ? '0' : '2').join('') + '2222';
    }

    return null;
  }

  getInitialState(){
    this.logger.silly("FanControl:getInitialState()");
    return {
      state: 0,
      dim: 0
    }
  }

  stateToCommand(data){
    this.logger.silly("FanControl:stateToCommand(data)", data);

    let command = null;
    if (typeof data.state !== "undefined"){
      const state = Number(data.state);
      if (!state){
        command = commands.STOP;
      }
      else if (typeof data.dim !== "undefined") {
        const dim = Number(data.dim || 0);
        if (dim >= 0.666) {
          command = commands.HI;
        }
        else if (dim >= 0.333) {
          command = commands.MED;
        }
        else {
          command = commands.LOW;
        }
      }
    }

    this.logger.debug("Data -> command:", data, '=>', command);

    return command;
  }

  commandToState(command){
    this.logger.silly("FanControl:commandToState(command)", command);
    const data = COMMAND_STATE_MAP[command] || {};
    this.logger.debug("Command -> data:", command, '=>', data);
    return data;
  }

  updateState(frame) {
    this.logger.silly("FanControl:updateState(frame)", frame);
    this.setState(frame.id, Object.assign({}, this.getState(frame.id), frame));
  }

  updateRealtime(device, state, oldState) {
    this.logger.silly("FanControl:updateRealtime(device, state, oldState)", device, state, oldState);
    if (Boolean(Number(state.state)) !== Boolean(Number(oldState.state))) {
      this.realtime(device, 'onoff', Boolean(Number(state.state)));
    }
    if (Number(state.dim) !== Number(oldState.dim)) {
      this.realtime(device, 'dim', Number(state.dim));
    }
  }

  getExports() {
    this.logger.silly("FanControl:getExports()");

    const exports = super.getExports();
    exports.capabilities = exports.capabilities || {};

    exports.capabilities.onoff = {
      get: (device, callback) => callback(null, Boolean(Number(this.getState(device).state))),
      set: (device, onoff, callback) => {
        this.logger.silly("FanControl.capabilities.onoff.set(device, onoff)", device, onoff);

        const state = {
          state: onoff ? 1 : 0,
          dim: this.getState(device).dim || 0
        };

        this.logger.debug('Capability:onoff -> state:', onoff, '=>', state);

        this.setState(device, state);
        this.send(device, state, () => callback(null, onoff))
      }
    };

    exports.capabilities.dim = {
      get: (device, callback) => callback(null, Number(this.getState(device).dim)),
      set: (device, dim, callback) => {
        this.logger.silly("FanControl.capabilities.dim.set(device, dim)", device, dim);

        if (dim >= 0.666) {
          dim = 1;
        }
        else if (dim >= 0.333) {
          dim = 0.5;
        }
        else {
          dim = 0;
        }

        const state = {
          state: 1,
          dim
        };

        this.logger.debug('Capability:dim -> state:', dim, '=>', state);

        this.setState(device, state);
        this.send(device, state, () => callback(null, dim))
      }
    };

    exports.capabilities["button.light"] = {
      set: (device, button, callback) => {
        this.logger.silly("FanControl.capabilities[button.light].set(device, button)", device, button);

        const state = {
          command: commands.LIGHT
        };

        this.logger.debug('Capability:button -> state:', button, '=>', state);

        this.setState(device, state);
        this.send(device, state, () => callback(null, button))
      }
    };

    return exports;
  }
};
