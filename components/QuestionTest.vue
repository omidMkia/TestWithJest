<template>
  <div>
    <!-- viewing the question -->
    <div v-if="!editing">
      <h1 v-text="question.title"></h1>
      <div class="body" v-text="question.body"></div>
      <button id="edit" @click="editing = true">Edit</button>
    </div>
    <!-- editing the question -->
    <div v-if="editing">
      <input id="title" v-model="form.title" type="text" name="title" />
      <textarea
        id="body"
        v-model="form.body"
        name="body"
        cols="30"
        rows="10"
      ></textarea>
      <button id="update" @click="update()">Update</button>
      <button id="cancel" @click="cancel()">Cancel</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataQuestion: {
      type: Object,
      default: () => {
        return {
          title: '1',
          body: '2',
        }
      },
    },
  },
  data() {
    return {
      question: this.dataQuestion,
      form: {
        title: this.dataQuestion.title,
        body: this.dataQuestion.body,
      },
      editing: false,
    }
  },
  mounted() {
    this.$emit('update', this.question.title, this.question.body)
  },
  methods: {
    cancel() {
      this.editing = false
    },
    update() {
      this.editing = false
      this.question.title = this.form.title
      this.question.body = this.form.body
      this.$emit('update', this.question.title, this.question.body)
    },
  },
}
</script>

<style scoped></style>
