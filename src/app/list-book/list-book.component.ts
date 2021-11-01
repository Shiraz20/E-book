import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.get_book();
  }

  get_book() {
    this.dataService.getBook().subscribe(
      res => {
        this.books = res;
        console.log(res);
      }
    )
  }

  delete_book(id:any) {
    this.dataService.deleteBook(id).subscribe(
      res => {
        window.location.reload();
      }
    )
  }

}
