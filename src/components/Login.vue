<template>
  <div>欢迎来到全栈管理后台</div>
  <button @click="gohome()">到首页</button>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    gohome() {
      this.$router.push("/welcome");
    },
  },
};
</script>
<style lang="scss">
</style>
