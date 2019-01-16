Vue.component('input-number',{
    template:'\
    <div class="input-number">\
    <input type="text" :value="currentValue"  @change="handleChange">\
    <button  @click="handleDown" :disabled="currentValue<= min">-</button>\
    <button  @click="handleUp" :disabled="currentValue>= max">+</button>\
    </div>',
    props:{
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:-Infinity
        },
        value:{
            type:Number,
            default:0
        }
    },
    data:function(){
        return{
            currentValue:this.value
        }
    },
    watch: {
        currentValue:function(val){
            this.$emit('input',val);
            this.$emit('on-change',val)
        },
        value:function(val){
            this.updateValue(val)
        }
    },
    methods: {
        updateValue:function(val){
            if (val>this.max) val=this.max;
            if (val<this.min) val = this.min;
            this.currentValue = val;
        },
        handleDown:function(){
            if (this.currentValue <=this.min) return;
            this.currentValue-=1;
        },
        handleUp:function(){
            if (this.currentValue >=this.max) return;
            this.currentValue+=1;
        },
        handleChange:function(event){
            var val = event.target.value.trim();
            
            if (isValueNumber(val)){
                val = Number(val)
                this.currentValue = val;
                if (val>this.max){
                    this.currentValue=this.max;
                }
                else if(val<min) (
                    this.currentValue =this.min
                )
            }
            else{
                event.target.value = this.currentValue;
            }
        }
    },
    mounted() {
        this.updateValue(this.value)
    },
});

function isValueNumber(val){
    return (/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(val+'');
}