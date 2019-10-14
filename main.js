//Add a button that removes the product from the cart array by emitting an event with the id of the product to be removed.

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
    },
    template: `
     <div class="product">
        <div class="product-image">
          <img :src="image" />
        </div>
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
  
            <div class="color-box"
                 v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)"
                 >
            </div> 
  
            <button
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              @click="updateCart"
              >
            Add to cart
            </button>
         </div>  
         <div>
         <h2>Reviews</h2>
         <p v-if="!reviews.length">There are no Reviews yet</p>
         <ul v-else>
            <li v-for="(review, index) in reviews" :key="index">
                 <p>Name: {{review.name}}</p>
                 <p>Review:{{review.review}}</p>
                 <p>Rating {{review.rating}}</p>
            </li>
         </ul>
         </div>
      <product-review @review-submitted="addReview"></product-review>   
      </div>
     `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: './img/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: './img/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            reviews:[]
        }
    },
    methods: {
        updateProduct: function (index) {
            this.selectedVariant = index
        },
        updateCart(){
            console.log('++ update Cart')
            this.$emit('update-cart')
        },
        addReview(productView){
            this.reviews.push(productView)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})


Vue.component('product-review',{
    // value={this.state.review}
    template: ` 
<!--         event.preventDefault()-->
        <form class="review-form" @submit.prevent="onSubmit">
        <p v-if="errors.length">
        <b>Please correct the following error(s)</b>
        <ul v-for="error in errors">
        <li>{{error}}</li>
        </ul>
       </p>
            <label for="name">Name:</label>
            <!--            value={this.state.name}-->
            <input v-model="name">
        </p>
        <p>
            <label for="rating">Rating</label>
            <!--       value ={this.state.review}}-->
            <textarea id="review" v-model="review"></textarea>
        </p>
        <p> 
            <label for="rating">Rating:</label>
            <select name="" id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>
          <input type="submit" value="Submit">  
    </form>  
`,
    data(){
        // state = {
        //     value: ' ',
        //     name:'',
        //     review:'',
        //     listReview:[],
        //     submitValue:false
        // };
        //都是直接调用一个函数，注意这里不是对象。
        return {
            name:null,
            review:null,
            rating:null,
            errors:[]
        }
    },
    methods:{
        // this.setState(({
        //     value:'',
        //     name:'',
        //     review:'',
        //     submitValue:false
        // }))

        onSubmit(){
            this.errors=[]
            if(this.name && this.review && this.rating){
                let productReview = {
                    name:this.name,
                    review:this.review,
                    rating:this.rating
                }
                this.$emit('review-submitted',productReview)
                this.name=null
                this.review=null
                this.rating =null
            }else {
                if (!this.name) this.errors.push('Name Required')
                if (!this.review) this.errors.push('Review Required')
                if (!this.rating) this.errors.push('Rating Required')
            }
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: 0,
    },
    methods: {
        updateCart(){
            this.cart +=1
        }
    }
})