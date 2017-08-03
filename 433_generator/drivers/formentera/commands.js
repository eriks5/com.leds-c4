'use strict';

const STOP = '0010';
const HI = '0001';
const MED = '0100';
const LOW = '1000';
const LIGHT = '0110';
const STOP_1H = '1010';
const STOP_2H = '1001';
const STOP_4H = '1100';
const STOP_8H = '0011';

const VALID_COMMANDS = new Set([
  STOP,
  HI,
  MED,
  LOW,
  LIGHT,
  STOP_1H,
  STOP_2H,
  STOP_4H,
  STOP_8H,
]);

const LABELS = [
  {id: STOP,    label: 'command.stop'},
  {id: HI,      label: 'command.hi'},
  {id: MED,     label: 'command.med'},
  {id: LOW,     label: 'command.low'},
  {id: LIGHT,   label: 'command.light'},
  {id: STOP_1H, label: 'command.stop1h'},
  {id: STOP_2H, label: 'command.stop2h'},
  {id: STOP_4H, label: 'command.stop4h'},
  {id: STOP_8H, label: 'command.stop8h'},
];

module.exports = {
  STOP,
  HI,
  MED,
  LOW,
  LIGHT,
  STOP_1H,
  STOP_2H,
  STOP_4H,
  STOP_8H,

  isValid: (command) => VALID_COMMANDS.has(command),
  labels: LABELS
};
