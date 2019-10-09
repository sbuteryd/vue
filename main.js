Vue.component('product', {
    template:`
      <div class="product">
        <div class="product-image">
            <img :src='image'>
        </div>
        <div class="product-info">
            <h1>{{product}}</h1>
            <p  v-if="inStock">In Stock</p>
            <p v-else :style="{textDecoration:'line-through'}">Out of Stock</p>
            <ul>
                <li v-for="detail in details" :key="detail">{{detail}}</li>
            </ul>
            <div class="color-box"
                 v-for="variant in variants" :key="variant.variantId"
                 :style="{backgroundColor:variant.variantColor}"
                 @mouseover="updateProduct(variant.variantImage)"
            >
            </div>
            <button
                    @click="addToCart"
                    :class="{disabledButton:!inStock}"
            >Add to cart</button>
            <div class="cart">
                <p>Cart（ {{cart}} ）</p>
            </div>
        </div>
   </div>
  
   `,
    data(){
        return {
            product:"Socks",
                inStock:false,
                details:['80% cotton',"20% polyester",'Gender-neutral'],
                image:'./assets/vmSocks-green-onWhite.jpg',
                variants:[
                {
                    variantId:2234,
                    variantColor:'green',
                    variantImage:"./assets/vmSocks-green-onWhite.jpg"
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage:"./assets/vmSocks-blue-onWhite.jpg"
                }
            ],
                cart:0,
                textDecoration:{
                textDecoration:'line-through'
            }
        }
    },
    methods:{
        addToCart(){
            this.cart+=1
        },
        updateProduct(variantImage){
            this.image =variantImage
        }
    }
})

var app = new Vue ({
    el:'#app'
})