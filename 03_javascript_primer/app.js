function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Order{
    constructor(id, content){ // Luokan konstruktori
        this.id = id;
        this.content = content;
    }

    async Summarize(){ //Luokan metodi
        sleep(2000);
        return 'orderId:' + this.id + " content:" + this.content;
    }
}
let order = new Order(1234, "asdf");
let summary = order.Summarize().then(console.log);