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
    },
    methods:{
        updateImage(index){
            this.selectedVariant = index
        },
        updateCart(){
            this.carts +=1
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
        }
    },

})