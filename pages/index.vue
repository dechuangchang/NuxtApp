<template>
  <div class="container">
    <div>
      <h1 class="title">
        <div class="box">
          <span>+</span>
          <input class="file" type="file" accept="image/png, image/jpeg" @change="getFile">
          <img v-if="img=='' ? false: true" class="img" :src="img">
        </div>
        <input v-model="name">
        <button @click="onSubmit">
          submit
        </button>
         <nuxt-link to="/register">register</nuxt-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      file: '',
      name: '',
      img: ''
    }
  },
  methods: {
    getFile (event) {
      const _this = this
      this.file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = function () {
        _this.img = reader.result
        window.console.log(_this.img)
      }
      reader.readAsDataURL(this.file)
    },
    onSubmit () {
      const fd = new FormData()
      fd.append('file', this.file)
      fd.append('name', this.name)
      window.console.log(fd, 'FormData')
      window.console.log({ a: 1 }, 'Json')
      this.$axios.$post('unique/user/ownCenter', fd)
    }
  }
}
</script>

<style>
.box{
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
.img{
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
.box span{
  font-size: 48px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 17px;
      z-index: 80;
    color: red;
}
.file{
  opacity: 0;
  opacity: 0;
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  height: 100px;
  z-index: 99;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
