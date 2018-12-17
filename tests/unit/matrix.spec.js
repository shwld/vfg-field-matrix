import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core'
import Matrix from '@/components/Matrix.vue'

Vue.component('fieldMatrix', Matrix)
Vue.use(VueFormGenerator)

describe('Matrix.vue', () => {
  it('renders props.msg when passed', () => {
    const props = {
      schema: {
        fields: [
          {
            type: 'matrix',
            label: 'ラベル',
            model: 'test',
            required: true,
            values: [
              { name: 'test', value: 'test' },
              { name: 'test2', value: 'test2' }
            ]
          }
        ]
      },
      model: {
        test: []
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'my-'
      }
    }
    const wrapper = shallowMount(VueFormGenerator, props)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
