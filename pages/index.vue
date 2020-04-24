<template>
  <div class="container2">
    <h1>百步穿杨论坛</h1>
    <h2>注册账户</h2>
    <el-input style="margin-bottom:10px;" v-model="account" placeholder="请输入账号"></el-input>
    <el-input style="margin-bottom:10px;" type="password" v-model="password" placeholder="请输入密码"></el-input>
    <el-input style="margin-bottom:10px;" type="password" v-model="password2" placeholder="请再次输入密码"></el-input>
    <el-row type="flex" justify="space-between">
        <el-button @click="onSubmit">提交</el-button>
        <el-button @click="onCancel" type="primary">取消</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: '百步穿杨 - 注册',
      meta: [
        { hid: 'author', name: 'author', content: '常德闯' },
        { hid: 'description', name: 'description', content: '百步穿杨论坛 美猎 美式猎弓 复合弓 传统弓 竞技 射击 户外' }
      ]
    }
  },
  components: {

  },
  data () {
    return {
      account: '',
      password: '',
      password2: '',
    }
  },
  methods: {
    onSubmit () {
      let {password2,password,account} = this;
      if(!Boolean(account)||account.length<=5){
        this.$message({
          showClose: true,
          message: '账号长度不可小于6位',
          type: 'warning'
        })
        return
      }
      if(!Boolean(password)||password!=password2){
        this.$message({
          showClose: true,
          message: '密码不一致',
          type: 'warning'
        })
        return
      }
      this.$axios.$post('api/user/register',{
          account,
          password
      })
      .then((res)=>{
        if(res.status==200){
          this.$message({
            showClose: true,
            message: res.message,
            type: 'success'
          })
        }else{
          this.$message({
            showClose: true,
            message: res.message,
            type: 'warning'
          })
        }
      })
    },
    onCancel () {
      this.account = ''
      this.password = ''
      this.password2 = ''
      
      
    }
  }
}
</script>

<style  scoped lang="less">
    .container2{
        max-width: 500px;
        padding: 20px;
        margin: 50px auto;
        h1,h2{
          text-align: center;
          padding:0px 0px 10px ;
        }
    }
</style>
