<template>
  <div class="container">
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
    .container{
        width: 500px;
        padding: 20px;
        margin: 50px auto;
    }
</style>
