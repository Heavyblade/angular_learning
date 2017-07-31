import angular from 'angular';
import speaker from './speaker';

const components = angular
                   .module("angularCamp", ['speaker'])
                   .name;

export default components;
