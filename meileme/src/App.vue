<template>
  <div id="app">
     <div class="header">
       <div class="go-back" @click="goBack">
         <span class="arrow" v-show="isShow">
           <span class="arrow green" v-show="isShow"></span>
         </span>
       </div>
       <h1>美了么团购网</h1>
       <div class="login">登录</div>
     </div>
      <div class="search" v-show="$route.fullPath.indexOf('/detail/')  !== 0">
        <input type="text" v-model="msg" @keyup.enter="showSearchResult" 
              placeholder="请输入搜索关键字">
      </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './base.scss';
    *{
      margin: 0;
      padding: 0;
      list-style: none;

    }

    html,body{
      background: #efefef;
    }
    
    .header{
      background: $navColor;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      display: flex;
      .go-back
      .login{
        width: 60px;
    
      }
      .go-back{
        position: relative;
        .arrow{
          @include arrow(10px,#fff,right);
          position: absolute;
          top: 22px;
          left:10px;
          .green{
            border-right-color: $navColor;
            top: -10px;
            left: -8px;
          }
        }
      }
      .login{
        font-size: 14px;
        margin-right: 5px;
      }
      h1{
        flex: 1;
        font-size: 18px;
      }
      
    }
      .search{
        background: #fff;
        padding: 10px 20px;
        display: flex;
        input{
          flex: 1;
          font-size: 14px;
          background: #efefef;
          border: none;
          outline: none;
          padding: 10px 20px;
          border-radius:18px ;
          display: block;
          width: 100%;
        };
    }
</style>

<script type="text/javascript">
export default {
  data(){
    return {
      msg :'',
      isShow:false,
    } 
  },
  methods:{
    showSearchResult(){
      this.$store.commit('updateSearch',this.msg);
      this.msg = ''
    },
    goBack(){
        this.$router.go(-1);
        // history.go(-1)
         console.log(this.$route.fullPath.indexOf('/list/'))
    }
  },
  watch:{
    $route(now){     //监控路由变换，控制返回按钮的显示
     if(now.path=="/"){
        this.isShow=false;
     } else{
        this.isShow=true;
     }
    }
}
  
}
</script>