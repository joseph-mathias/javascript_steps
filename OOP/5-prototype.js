function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = () => {
  return `${this.title} waswritten by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = () => {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.revised = (newYear) => {
  this.year = newYear;
  this.revised = true;
};

const book = new Book("Math", "John Doe", "2018");
console.log(book);
