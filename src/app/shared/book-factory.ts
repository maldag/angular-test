import { Book } from './book';
import { BookRaw } from './book-raw';


export class BookFactory {
  // Konvertiere ein BookRaw in ein internes Bookformat.
  // Erzeuge dazu per Spread-Operator "..." eine Kopie
  // und überschreibe danach das Attribut published mit einem
  // "richtigen" Datum.
  static fromRaw(b: BookRaw): Book {
    return{
      ...b,
      published: new Date(b.published)
    };
  }
}
