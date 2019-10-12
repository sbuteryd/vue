Vue.component('product',{
    props:{
        second:{
            type:Boolean,
            required:true
        },
    },
    template:`
       <div class="product">
        <div class="product-image">
            <img :src="image" alt="">
        </div>
        <div class="product-info">
            <h1>{{title}}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="detail in details">
                    {{detail}}
                </li>
            </ul>
            <p>Shipiing :{{shipping}}</p>
            <div v-for="(variant,index) in variants">
                <p @mouseover="updateImage(index)" class="color-box" :style="{backgroundColor: variant.variantColor}"></p>
            </div>
            <div class="cart">
                Cart ({{carts}})
            </div>
            <button
                    @click="updateCart"
                    :disabled ="!inStock"
                    :class="{disableBuitton:!inStock}"
            >
                Add to cart
            </button>

        </div>
    </div>
    `,
    data() {
        return {
            brand:"Vue Mastery",
            product:"Socks",
            description:'this is socks',
            selectedVariant:0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantimage:'./img/vmSocks-green-onWhite.jpg',
                    variantQuantity:10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantimage:'./img/vmSocks-blue-onWhite.jpg',
                    variantQuantity:0
                }
            ],
            carts:0,
        }
    },
    methods:{
        updateImage(index){
            this.selectedVariant = index
        },
        updateCart(){
            this.carts +=1
            console.log()
        }
    },
    computed:{
        image(){
            return this.variants[this.selectedVariant].variantimage
        },
        title(){
            return `${this.brand} ${this.product}`
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping(){
            if(this.second){
                return "Free"
            }
            return  '2.99'
        }
    },


})

var app  = new Vue({
    el:'#app',
    data:{
        premium:false,
    }
})