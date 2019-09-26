class Order {
    constructor (type, status, created, modified, id) {
        
        
        this.type = type;
        this.status = status;
        this.created = new Date (Date.now());
        this.modified = new Date (Date.now());
    }

    // static incrementId() {
    //     if (!this.latestId) this.latestId = 1;
    //     else this.latestId++;
    //     return this.latestId;
    // }
};

const firstOrder = new Order ('pizza', 'ordered');
// console.log(firstOrder);
const secondOrder = new Order ('Burger', 'ordered');
// console.log(secondOrder);

const newOrder = new Order ('something', 'ordered'); 
// console.log(newOrder.type);


module.exports = Order; 