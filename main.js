var app  = new Vue({
    el:'#app',
    data:{
        product:"Socks",
        description:'this is socks',
        inStock:true,
        image:'./img/vmSocks-green-onWhite.jpg',
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                image:'./img/vmSocks-green-onWhite.jpg',
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                image:'./img/vmSocks-blue-onWhite.jpg',
            }
        ],
        cart:0,
    },
    methods:{
        addCarts(){
            this.cart +=1
        },
        updateProduct(image){
            this.image = image
        }
    }
})