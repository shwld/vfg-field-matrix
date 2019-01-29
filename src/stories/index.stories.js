/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

storiesOf('vue form generator', module)
  .add('matrix', () => ({
    template: `
      <div class="card m-3">
        <div class="card-body">
          <form class="form">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions" />
            value: {{model}}
          </form>
        </div>
      </div>
    `,
    data: () => ({
      schema: {
        fields: [
          {
            type: 'matrix',
            label: 'ラベル',
            model: 'test',
            required: true,
            questions: [
              { name: 'わかりましたか?', id: '1', required: true },
              { name: 'わかりませんか?', id: '2' }
            ],
            values: [
              { name: '全くわからない', value: '1' },
              { name: 'あまりわからなかった', value: '2' },
              { name: 'ちょっとわかる', value: '3' },
              { name: 'だいたい分かる', value: '4' },
              { name: '完全に理解', value: '5' }
            ]
          }
        ]
      },
      model: {
        test: { '1': '2' }
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'my-'
      }
    })
  }))
