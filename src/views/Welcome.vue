<template>
  <div>
    <div>登录页</div>
    <button @click="goLogin()">到登录页</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss">
</style>
