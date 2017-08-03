'use strict';

// Low level driver for PT2260/2270/2272 based remote controlled devices
// Datasheet: http://www.princeton.com.tw/Portals/0/Product/PT2260_4.pdf

const DefaultDriver = require('../../../drivers/lib/driver');

const PAYLOAD_SIZE = 12;

module.exports = class PT2260 extends DefaultDriver {
  constructor(config) {
    super(config);
    this.ADDRESS_SIZE = 8;  // Address size can be 8 or 10 bits, depending on the chip configuration
  }

  isValidAddress(address){
    throw new Error(`PT2260:isValidAddress(address) should be overwritten by own driver for device ${this.config.id}`);
  }

  isValidCommand(command){
    throw new Error(`PT2260:isValidCommand(command) should be overwritten by own driver for device ${this.config.id}`);
  }

  getAddressFromDipSwitches(dipswitches){
    throw new Error(`PT2260:getAddressFromDipSwitches(dipswitches) should be overwritten by own driver for device ${this.config.id}`);
  }

  getInitialState(){
    throw new Error(`PT2260:getInitialState() should be overwritten by own driver for device ${this.config.id}`);
  }

  commandToState(command){
    throw new Error(`PT2260:commandToState(command) should be overwritten by own driver for device ${this.config.id}`);
  }

  stateToCommand(data){
    throw new Error(`PT2260:stateToCommand(data) should be overwritten by own driver for device ${this.config.id}`);
  }

  addressToId(address){
    this.logger.silly("PT2260:addressToId(address)", address);

    return `pt2260:${address}`;
  }

  dipswitchesToData(dipswitches) {
    this.logger.silly("PT2260:dipswitchesToData(dipswitches)", dipswitches);

    const address = this.getAddressFromDipSwitches(dipswitches);

    this.logger.debug('Dipswitches -> address', dipswitches, '=>', address);

    return Object.assign(
      {
        id: this.addressToId(address),
        address,
      },
      this.getInitialState()
    )
  }

  getAddressFromPayload(payload) {
    this.logger.silly("PT2260:getAddressFromPayload(payload)", payload);

    if (payload.length >= this.ADDRESS_SIZE){
      const address = this.bitArrayToString(payload.slice(0, this.ADDRESS_SIZE));
      if (this.isValidAddress(address)){
        this.logger.debug('Payload -> address', payload, '=>', address);
        return address;
      }
      else {
        this.logger.debug("PT2260:getAddressFromPayload: Invalid address in payload", address);
      }
    }
    else {
      this.logger.debug("PT2260:getAddressFromPayload: Incomplete payload")
    }

    return null;
  }

  getCommandFromPayload(payload){
    this.logger.silly("PT2260:getCommandFromPayload(payload)", payload);

    if (payload.length >= PAYLOAD_SIZE) {
      const command = this.bitArrayToString(payload.slice(this.ADDRESS_SIZE, PAYLOAD_SIZE));
      if (this.isValidCommand(command)){
        this.logger.debug('Payload -> command', payload, '=>', command);
        return command;
      }
      else {
        this.logger.debug("PT2260:getCommandFromPayload: Invalid command in payload", command)
      }
    }
    else {
      this.logger.debug("PT2260:getCommandFromPayload: Incomplete payload")
    }

    return null;
  }

  payloadToData(payload) { // Convert received data to usable variables
    this.logger.silly("PT2260:payloadToData(payload)", payload);

    const address = this.getAddressFromPayload(payload);
    const command = this.getCommandFromPayload(payload);

    if (address && command){
      const id = this.addressToId(address);
      const data = Object.assign(
        {},
        this.getState(id),
        this.commandToState(command),
        {
          id,
          address,
        }
      );

      this.logger.debug('Payload -> data:', payload, '=>', data);
      return data;
    }

    return null;
  }

  dataToPayload(data) {
    this.logger.silly("PT2260:dataToPayload(data)", data);

    if (data && this.isValidAddress(data.address)) {
      const command = this.isValidCommand(data['command.name'])
        ? data['command.name']
        : this.stateToCommand(data);

      if (command){
        const payload = this.bitStringToBitArray(data.address).concat(this.bitStringToBitArray(command));
        this.logger.debug('Data -> payload', data, '=>', payload);
        return payload;
      }
    }

    return null;
  }
};