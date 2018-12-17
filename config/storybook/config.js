/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import Matrix from '../../src/components/Matrix.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-form-generator/dist/vfg.css'

Vue.component('fieldMatrix', Matrix)
Vue.use(VueFormGenerator)

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
