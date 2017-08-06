#!/usr/bin/env node
'use strict';

const path = require('path');
const fse = require('fs-extra');

const Generator = require('homey-433/src/generator');

// Execute "homey433 generate" command
new Generator().generate();

// Extend app.json
const appConfigPath = path.join(__dirname, 'app.json');
const appConfig = fse.readJsonSync(appConfigPath);

appConfig.drivers.forEach(driver => {
  const hasDim = driver.capabilities.indexOf("dim") >= 0;
  const hasLight = driver.capabilities.indexOf("button.light") >= 0;

  if (hasDim || hasLight){
    driver.mobile = {
      components: [
        {
          id: "icon",
          capabilities: [ "onoff" ]
        }
      ]
    }
  }

  if (hasDim){
    driver.capabilitiesOptions = Object.assign(
      driver.capabilitiesOptions || {},
      {
        dim: {
          title: {
            en: "Speed",
            nl: "Snelheid"
          },
          min: 0,
          max: 2,
          step: 1
        }
      },
    );

    driver.mobile.components.push({
      id: "slider",
      capabilities: [ "dim" ],
      options: {
        showTitle: true
      }
    });
  }

  if (hasLight){
    driver.capabilitiesOptions = Object.assign(
      driver.capabilitiesOptions || {},
      {
        "button.light": {
          title: {
            en: "Light",
            nl: "Verlichting"
          }
        }
      }
    );

    driver.mobile.components.push({
      id: "button",
      capabilities: [ "button.light" ],
      options: {
        showTitle: true
      }
    });
  }
});

fse.writeJsonSync(appConfigPath, appConfig, {spaces: 2});
