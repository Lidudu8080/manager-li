<template>
  <div>欢迎来到全栈管理后台</div>
  <button @click="gohome()">到首页</button>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$request.get('/login', { name: 'li' }).then(res => {
      console.log(res)
    })
  },
  methods: {
    gohome() {
      this.$router.push("/welcome");
    },
  },
};
</script>
<style lang="scss"></style>
