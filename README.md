# vfg-field-matrix

A matrix field for vue-form-generator

# Examples

![Example](docs/example.png)

```
{
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
  }
}
```

# Installation

```
npm install vfg-field-matrix
```

# ES6

```
//
// You can register a component manually
//
import { FieldMatrix } from 'vfg-field-matrix'

export default {
  ...
  components: {
    'field-matrix': FielMatrixd
  },
  ...
};

//
// or register the whole module with vue
//
import VfgFieldMatrix from 'vfg-field-matrix'

// Install this library
Vue.use(VfgFieldMatrix);
```
