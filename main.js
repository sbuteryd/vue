//Add a question to the form: “Would you recommend this product”. Then take in that response from the user via radio buttons of “yes” or “no” and add it to the productReview object, with form validation.
// <product-review @review-submitted="addReview"></product-review>

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
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
  
            <button v-on:click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >
            Add to cart
            </button>
         </div> 
         <p v-if="!reviews.length">There no reviews</p>
         <p v-else>
                  <ul  v-for="review in reviews">
                        <li>{{review.name}}</li>
                        <li>{{review.comment}}</li>
                        <li>{{review.rating}}</li>

                 </ul>
         </p>
          <second @toinformation="getInfor"></second>
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
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        getInfor(infor){
            this.reviews.push(infor)
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

Vue.component("second",{
    template:
        `<form class="review-form" @submit.prevent="onsubmit">
            <p v-if="errors.length">
                    <ul v-for="error in errors">
                      <li>{{error}}</li>
                    </ul>
             </p>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name">
            <label for="comment"></label>
            <textarea id="comment" v-model="comment"></textarea>
                <label for="rating">Select</label>
        <select name="" id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
                    <input type="submit">
    </form> `,
    data(){
        return {
            name:null,
            comment:null,
            rating:null,
            errors: []

        }
    },
    methods:{
        onsubmit(){
            console.log(this.errors)
            this.errors=[]
            if(this.name && this.comment&&this.rating){
                let infomation={
                    name:this.name,
                    comment:this.comment,
                    rating:this.rating
                }
                this.$emit('toinformation',infomation)
                this.name=null
                this.comment =null
                this.rating = null
            }else {
                if(!this.name) this.errors.push('Name Request')
                if(!this.comment) this.errors.push('Name comment')
                if(!this.rating) this.errors.push('Name rating')
            }
        }
    }
})


var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})