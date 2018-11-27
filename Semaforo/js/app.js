let semaforo = {
    lights: [{id:1,class:'red'},{id:2,class:'yellow'},{id:3,class:'green'}],
    status: 0,
    start: function(){
        this.tic = setInterval(function(){
            let prevObject= this.getPrevious()
            let nextObject = this.getSample()
            
            $(`#${prevObject.id}`).removeClass(`${prevObject.class}`)
            $(`#${nextObject.id}`).addClass(`${nextObject.class}`)
        }.bind(this),3000)
    },
    stop: function(){
        clearInterval(this.tic)
    },
    getSample: function(){
        this.status = ++this.status% this.lights.length // incrementar el status en 1 pero que el maximo sea 2 0...2
        return this.lights[this.status]
    },
    getPrevious: function(){
        return this.lights[index]
    }
}
