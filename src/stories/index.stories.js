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
            label: 'How satisfied are you with the following',
            model: 'test',
            required: true,
            questions: [
              { name: 'Books', id: 'books', required: true },
              { name: 'Movies', id: 'movies' },
              { name: 'Cars', id: 'cars' },
              { name: 'Music', id: 'Music' }
            ],
            values: [
              { name: 'Very Unsatisfied', value: '1' },
              { name: 'Unsatisfied', value: '2' },
              { name: 'Neutral', value: '3' },
              { name: 'Satisfied', value: '4' },
              { name: 'Very Satisfied', value: '5' }
            ]
          }
        ]
      },
      model: {
        test: { 'books': '3' }
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        fieldIdPrefix: 'my-'
      }
    })
  }))
