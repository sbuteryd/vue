var app  = new Vue({
    el:'#app',
    data:{
        brand:"Vue Mastery",
        product:"Socks",
        description:'this is socks',
        selectedVariant:0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                image:'./img/vmSocks-green-onWhite.jpg',
                variantQuantity:10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                image:'./img/vmSocks-blue-onWhite.jpg',
                variantQuantity:0

            }
        ],
        cart:0,
    },
    methods:{
        addCarts(){
            this.cart +=1
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed :{
        title(){
            return this.brand + " " +this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    },

})