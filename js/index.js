var app = new Vue({
    el:'#app',
    data:{
        list: [
            { 'id': 1, 'name': 'iPhone 7', 'price': 6188, 'count': 1 },
            { 'id': 2, 'name': 'iPad Pro', 'price': 8555, 'count': 1 },
            { 'id': 3, 'name': 'MacBook Pro', 'price': 28555, 'count': 1 }
        ]
    },
    created:function(){
        console.log(this.activeKey);
    },
    mounted: function () {

    },
    methods: {
        handleRd: function (index) {
            this.list[index].count--;
        },
        handleAdd: function (index) {
            this.list[index].count++;
        },
        remove: function (index) {
            this.list.splice(index, 1);
        }
    },
    computed: {
        total: function () {
            var totalvalue = 0;
            for (let li = 0; li < this.list.length;li++) {
                totalvalue += this.list[li].price * this.list[li].count;
            };
            return totalvalue;
        },
    }
});