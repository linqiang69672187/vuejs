var app = new Vue({
    el:"#app",
    data:{
        list:[
            {id:1,name:"Iphone 7",price:6188,count:1},
            {id:2,name:"Ipad" ,price:5188,count:1},
            {id:3,name:"MacBook Pro" ,price:21488,count:1},
    ]
    },
    computed: {
        totalPrice:function(){
            let total=0;
            for (let i=0;i<this.list.length;i++){
                var item = this.list[i];
                total+=item.price*item.count;
            }
            return total.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,');
        }
    },
    methods: {
        handleClick:function(index,method){
            var item = this.list[index];
            item.count+=method;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        }
    },

})