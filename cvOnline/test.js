export class Book {
  constructor (title, author, description, pages, currentPage, read,){
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }

  readBook(page){
    if(page > this.pages || page < 1){
      return 0;
    }else if(page >= 1){
      this.currentPage = page;
      return 1;
    }else if(page == pages){
      this.read = true;
      return 1;
    }
  }
}
let book1 = new Book("Bosch", "Hans Rosling", "Art", 300, 100, false);
let book2 = new Book("Boticelli", "Inconnu", "Art", 100, 100, true);
let book3 = new Book("Cormyr", "Salvatore", "Fantasy", 400, 200, false);
export const books = [book1,book2,book3];
