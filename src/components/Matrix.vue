<template>
  <div :class="wrapperClass">
    <table :class="tableClass">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" v-for="choice in choices" :key="choice.value">
            {{ choice.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="question in questions" :key="question.name">
          <th scope="row">
            <div :class="['form-group', question.required && 'required']">
              <label>{{ question.name }}</label>
            </div>
          </th>
          <td v-for="choice in choices" :key="choice.value" class="touch-sensitive text-center">
            <input
              type="radio"
              :name="question.id"
              @click="handleChange(question, choice, $event)"
              :value="choice.value"
              :checked="value && value[question.id] === choice.value"
              :class="schema.fieldClasses"
              v-attributes="'input'"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  mixins: [ abstractField ],
  computed: {
    choices () {
      const { values } = this.schema
      return this.getSchemaValue(values)
    },

    questions () {
      const { questions } = this.schema
      return this.getSchemaValue(questions)
    },

    wrapperClass () {
      const { wrapperClass } = this.schema
      return wrapperClass || 'table-responsive'
    },

    tableClass () {
      const { tableClass } = this.schema
      return tableClass || 'table table-bordered'
    }
  },
  methods: {
    getSchemaValue (values) {
      if (typeof values === 'function') {
        return values.apply(this, [this.model, this.schema])
      } else {
        return values
      }
    },

    handleChange (question, choice, event) {
      this.value = Object.assign({}, this.value, { [question.id]: choice.value })
    }
  }
}
</script>

<style lang="sass">
.touch-sensitive
  position: relative
  &:hover
    background-color: #eee
  input:after
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 1
    pointer-events: auto
    content: ""
    background-color: rgba(0,0,0,0)
</style>
