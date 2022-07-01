//Lexical this

const person = {
    name: 'John',
    phones: ['IOS', 'Android'],
    toString: function() {
        // const that = this;
        this.phones.forEach(function(phones){
            console.log(`${this.name} has ${phones}`);
        }.bind(this));
    }
}

console.log(person);