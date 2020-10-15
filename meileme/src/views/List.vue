<template>
    <div class="list">
      <ul class="order">
        <li v-for="(item , index) in orders" @click="listOrder(item.id)" :key="index" >
          <span>{{item.text}}</span>
          <span class="arrow"></span>
        </li>
      </ul>
      <Product v-for="(item,index) in dealList" :key="index" :data="item" />
      <div class="loader-more" @click="showOthers" v-show="others.length">
          <span>查看其它几条团购{{others.length}}</span>
          <span class="arrow"></span>
          
          </div>
    </div>
</template>
<style type="text/css" lang="scss" scoped>
@import "../base.scss";

.order{
  background: #fff;
  display: flex;
  li{
    flex: 1;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #fff;
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 26px;
    &:last-child{
      border-right: none;
    }
    .arrow{
      @include arrow(4px,#666);
      position: relative;
      top: -2px;
      left: 2px;
    }
  }
}
.loader-more{
  background: #fff;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  color: $navColor;
  text-align: center;
  line-height: 40px;
  .arrow{
    @include arrow(8px, $navColor);
    position: relative;
    top: -1px;
    left: 2px;
    // .white{
    //   border-top-color: #fff;
    //   position: absolute;
    //   top: -10px;
    //   left: -8px;
    // }
  }
}
</style>
<script type="text/javascript">
import Product from '../components/Product';
export default {
  components: { Product },
  data() {
		return {
			orders: [
				{ text: '价格排序', id: 'price' },
				{ text: '销量排序', id: 'sales' },
				{ text: '好评排序', id: 'evaluate' },
				{ text: '优惠排序', id: 'discount' }
      ],
      list: [],
      others:[]
		}
  },
  computed:{
    dealList(){
      return this.list.filter(item => item.title.toUpperCase().indexOf(
        this.$store.state.search.toUpperCase()) >= 0)
    }
  },
  methods:{
      showOthers(){
        this.list = this.list.concat(this.others);
        this.others = '';
      },
      listOrder(id){
        if(id === 'discount'){
          this.list.sort((a,b) =>{
             return (a.originPrice - a.price) - (b.originPrice - b.price)
          })
          return;
        }
        this.list.sort((a, b) => {
          return a[id] - b[id];
        })
        // console.log(id)

      }
  },
  created(){
    // console.log(this)
    this.axios.get('/data/list.json?id=' + this.$route.params.id)
    .then(({data}) =>{
      this.list = data.slice(0,3);
      this.others = data.slice(3);
      // console.log(data)
      // console.log(this.list)
      })
          
  }
}
</script>