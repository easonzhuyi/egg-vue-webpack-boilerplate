import Vue from 'vue';
import MainLayout from './main.vue';
import 'theme/reset.scss';
import 'theme/global.scss';
import createLayout from '../layout';
export default createLayout('Layout', { MainLayout }, '<div id="app"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>');
