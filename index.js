//this keyword

this.table='window table';
// console.log(window.table);

const cleanTable=function(soap){
const innerFunction = function(_soap){
    console.log(`cleaning ${this.table} using  ${_soap}`)
    
}
innerFunction(soap);

};
this.garage={
    table : 'garage table',
    cleanTable() {
        console.log(`cleaning ${ this.table}`)
    }

};

let johnsRoom = {
    table: 'johns table',
    cleanTable() {
        console.log(`cleaning ${this.table}`)

    }
};

let createRoom = function(name){
    this.table=`${name}s table`
}

createRoom.prototype.cleanTable= function(soap){
    console.log(`cleaning ${this.table}  using ${soap}`);

};

const jillsRoom = new createRoom('jill');
const tanuRoom = new createRoom('tanu');

cleanTable.call(this,'some soap');
cleanTable.call(this.garage,'some soap');
cleanTable.call(johnsRoom, 'some soap');

console.log(johnsRoom.table);

johnsRoom.cleanTable();
this.garage.cleanTable();
