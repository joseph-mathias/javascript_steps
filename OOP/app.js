// Es6 = synax sugar || Es5

const book1 = {
    title: "Book One",
    author: "John Doe",
    year: '2016',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}