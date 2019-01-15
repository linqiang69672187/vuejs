var app = new Vue({
    el:"#app",
    data:{
        number:100,
        isok:true,
        text:"东方通信股份有限公司",
        date:new Date,
        url:"http://wwww.eastcom.com",
    }
    ,
    filters:{
        formatDate:function(val){
            var date = new Date(val);
            var year = date.getFullYear();
            return year;
        }
    },
    methods: {
        handler:function(url,arg){
            alert(url);
        }
    },
});

var appx = new Vue({
    el:"#app1",
    data:{
        message:"121123123123"
    }
})

var app2x = new Vue({
    el:"#app2",
    data:{type:'name'},
    methods:{
        handleToggleClick:function(){
            this.type=this.type==='name'?'mail':'name';
        }
    }
})

var ppt=new Vue({
    el:"#ford",
    data:{
        books:[
            {name:'《Vue.js实战》'},
            {name:'《Javascript实战》'},
            {name:'《Javascript高级程序设计》'}
        ]
    }
})