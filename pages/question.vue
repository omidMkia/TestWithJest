<template>
  <div>
    <question-test @emitUpdate="pass" />
    <Change :h1="x" :div="y" />
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
      x: '',
      y: '',
    }
  },
  methods: {
    pass(a, b) {
      this.x = a
      this.y = b
    },
  },
}
</script>

<style scoped></style>
