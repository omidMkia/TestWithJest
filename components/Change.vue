<template>
  <div>
    <div id="hOne">
      h1 text is now <b style="color: blue">{{ h1 }}</b>
    </div>
    <div >
      divv text is now <b style="color: blue">{{ div }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Change',
  props: {
    h1: {
      type: String,
      default: '',
    },
    div: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
