function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = () => {
    return `${this.title} waswritten by ${this.author} in ${this.year}`;
  };
}

const book = new Book("Math", "John Doe", "2018");
console.log(book);
