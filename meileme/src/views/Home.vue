<template>
    <div class="home">
      <ul class="home-types">
        <router-link v-for="(item,index) in types" :key="index" 
        tag="li" :to="'/list/' + item.id">
          <img :src="'/img/icon/' + item.img" alt="">
          <p>{{item.text}}</p>
        </router-link>
      </ul>

      <ul class="ad">
        <router-link v-for="(item,index) in ad" :key="index" 
        tag="li" :to="'/detail/' + item.id">
          <h3 :class="'color-' + index">{{item.title}}</h3>
          <p>{{item.description}}</p>
          <img :src="'./img/ad/' + item.url" alt="">
        </router-link>
      </ul>

      <div class="home-list">
        <h2 class="guess-title">猜你喜欢</h2>
        <Product v-for="(item,index) in list" :key="index" :data="item"></Product>
      </div>
    </div>
</template>
<style type="text/css" lang="scss" scoped>
@import'../base.scss';
.home-types{
  @include clearfix;
  background: #fff;
  li{
      width: (100%/5);
  float: left;
  text-align: center;
  }
  img{
    width: 60%;
  }
  p{
    font-size: 12px;
    color: #666;
    padding: 8px 0 15px;
  }

}

.ad{
    display: flex;
    background: #fff;
    margin-top: 10px;
    li{
      flex: 1;
      text-align: center;
      border-right:1px solid #ccc;
      padding: 15px 0;

      &:last-child{
        border-right: none;
      }
      h3{
        font-size: 16px;
      }
      p{
        font-size: 12px;
        color: #666;
        padding: 5px 0;
      }
      img{
      width: 60%;
    }

    $i: 0;
    @each $item in red , green , purple{
      .color-#{$i}{
        color: $item;
      }
      $i: $i + 1;
    }

  }
   

}

.home-list{
  margin-top: 10px;
  background: #fff;

  .guess-title{
    padding: 10px 0;
    margin: 0 10px;
    font-size: 18px;
    font-weight: normal;
    border-bottom: 1px solid #ccc;
    color: #333;
  }
}
</style>
<script type="text/javascript">
import Product from '../components/Product';

export default {

  components:{
    Product
  },

	data() {
		return {
			types: [
				{ text: '美食', id: '1', img: '01.png' },
				{ text: '电影', id: '2', img: '02.png' },
				{ text: '酒店', id: '3', img: '03.png' },
				{ text: '休闲', id: '4', img: '04.png' },
				{ text: '外卖', id: '5', img: '05.png' },
				{ text: 'KTV', id: '6', img: '06.png' },
				{ text: '周边游', id: '7', img: '07.png' },
				{ text: '丽人', id: '8', img: '08.png' },
				{ text: '小吃', id: '9', img: '09.png' },
				{ text: '火车票', id: '10', img: '10.png' },
			],
			ad: [],
			list: []
		}
  },
  created(){
    this.axios.get('/data/home.json').then(({ data }) => {
				this.ad = data.ad;
        this.list = data.list;
        console.log(1)
        console.log(data)

			})
  }
}
</script>
