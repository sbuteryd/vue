var app = new Vue ({
    el:'#app',
    data:{
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