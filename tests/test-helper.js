import Application from 'interactive-unit-tester/app';
import config from 'interactive-unit-tester/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
