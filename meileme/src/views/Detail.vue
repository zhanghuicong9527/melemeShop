<template>
    <div class="detail">
      <div class="img-part">
        <img :src="'/img/item/' + data.src" alt="">
        <h1>{{data.title}}</h1>
        <p>{{data.description}}</p>
      </div>

      <div class="price-part">
        <span class="price">
          <em>{{data.price}}</em> 元 
        </span>
        <span class="origin-price">门市价{{data.originPrice}}元</span>
        <span class="buy-btn">立即购买</span>
      </div>

      <div class="sales-part">
        <li>支持立即退货</li>
        <li>支持随时退货</li>
        <li>销量{{data.sales}}</li>
      </div>

      <div class="store-part module">
        <div class="module-header">店家信息</div>
        <div class="module-body">
          <p>{{data.storeName}}</p>
          <p>{{data.storeAddress}}</p>
        </div>
        <div class="module-footer">查看{{data.storeNum}}家分店</div>
      </div>

      <div class="buy-part module">
        <div class="module-header">
          <div class="moudle-body">
              <h3>有效日期</h3>
              <p>{{data.validateTime}}</p>
              <h3>使用日期</h3>
              <p>{{data.useTime}}</p>
              <h3>使用规则</h3>
              <p v-for="(item , index) in data.rules" :key="index">{{item}}</p>
          </div>
        </div>
      </div>
    </div>
</template>
<style type="text/css" lang="scss" scoped>
@import '../base.scss';
.img-part{
  position: relative;
  img{
    display: block;
    width: 100%;
  }
  h1,p{
    position: absolute;
    left: 20px;
    bottom: 15px;
    color: #fff;
  }
  h1{
    bottom: 40px;
    font-size: 26px;
  }
}

.price-part{
  padding: 10px 10px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  columns: #666;
  .price{
    margin-right: 5px;
    color: $navColor;
    em{
      font-size: 26px;
      font-style: normal;
    }
  }
  .buy-btn{
    padding: 5px 12px;
    margin-top: 5px;
    float: right;
    color: #fff;
    background: #f60;
    font-size: 12px;;

  }
}

.sales-part{
  @include clearfix;
  background: #fff;
  padding: 5px 10px;
  li{
    float: left;
    width:50%;
    line-height: 30px;
    color: yellowgreen;
    &:last-child{
      color: #333;
    }
  }
}

.module{
  margin-top: 10px;
  background: #fff;
  padding: 10px;
  .module-header{
    padding: 8px 0 10px;
    font-size: 22px;
    color: #333;
    border-bottom: 1px solid #ccc;
  }
  .module-body{
    padding: 10px 0;
    line-height: 28px;
    h3{
      color: #f60;
      padding: 15px 0 10px;
    }
  }
  .module-footer{
    color: $navColor;
    border-top: 1px solid #ccc;
    padding: 10px 0 4px;
  }
}

</style>
<script>
export default {
  data(){
    return{
      data:{}
    }
  },
  methods:{
    updateData(){
      let { params } = this.$route;
      this.axios.get('/data/product.json', { params })
      .then(({data}) => this.data = data)
    }
  },
  created(){
    this.updateData();
    // let { params } = this.$route;
    // this.axios.get('/data/product.json', { params })
    // .then(({data}) => console.log(data))
  },
  watch:{
    $route(){
    this.updateData();

    }
  }

}
</script>

