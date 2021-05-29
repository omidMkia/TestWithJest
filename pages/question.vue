<template>
  <div>
    <question-test @update="pass" />
    <Change :h1="a" :div="b" />
  </div>
</template>

<script>
import QuestionTest from '~/components/QuestionTest'
import Change from '~/components/Change'
export default {
  name: 'Question',
  components: { Change, QuestionTest },
  data() {
    return {
      a: '',
      b: '',
    }
  },
  methods: {
    pass(a, b) {
      this.a = a
      this.b = b
    },
  },
}
</script>

<style scoped></style>
