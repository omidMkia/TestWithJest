<template>
  <div class="text-center">
    <div>
      <label for="one" /><input
      id="one"
      v-model="num1"
      type="number"
      name="one"
    />
      <label for="two" /><input
      id="two"
      v-model="num2"
      type="number"
      name="two"
    />
      <button
        id="sumBtn"
        class="btn-primary btn"
        @click="sum(parseInt(num1), parseInt(num2))"
      >
        جمع کن
      </button>
    </div>
    <div id="jam">
      {{ sums }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sum',
  data() {
    return {
      num1: 0,
      num2: 0,
      sums: 0,
    }
  },
  methods: {
    sum(a, b) {
      this.sums = a + b
    },
  },
}
</script>
<style scoped>
.btn {
  width: 10vmax;
  height: 10vmin;
}
</style>
