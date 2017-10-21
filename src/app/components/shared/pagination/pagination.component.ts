import { Component, OnInit, Input, OnChanges, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PaginationService } from '../../../services/pagination/pagination.service';

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html',
    providers: [PaginationService]
})

export class PaginationComponent implements OnInit {
    /*  @Input() offset: number = 0;
     @Input() limit: number = 1;
     @Input() size: number = 1;
     @Input() range: number = 3;
     @Output() pageChange: EventEmitter<number> = new EventEmitter<number>(); 
 
     currentPage: number;
     totalPages: number;
     pages: Observable<number[]>; */
    /*  @Input() allItems: any[]; */

    // pager object
    /* pager: any = {}; */

    // paged items
    /* pagedItems: any[]; */

    currentPage: number;
    numberPages: number;
    constructor(private paginationService: PaginationService) { }

    ngOnInit() {
       /*  this.currentPage=this.paginationService.getCurrentPage(); */
        /* console.log(this.paginationService.getCurrentPage()); */
    }

    aumentar() {
       /*  this.currentPage = this.currentPage + 1;
        this.paginationService.setCurrentPage(this.currentPage); */
    }

    mostrar() {
        /* console.log(this.paginationService.getCurrentPage()); */
    }





    /*  setPage(page: number) {
         console.log(this.allItems);
         
         if (page < 1 || page > this.pager.totalPages) {
             return;s
         }
 
         // get pager object from service
         this.pager = this.paginationService.getPager(this.allItems.length, page);
         console.log(this.allItems.length);
         // get current page of items
         this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
     } */

    /*     ngOnChanges() {
            this.getPages(this.offset, this.limit, this.size);
        } */

    /*     getPages(offset: number, limit: number, size: number) {
            this.currentPage = this.getCurrentPage(offset, limit);
            this.totalPages = this.getTotalPages(limit, size);
            this.pages = Observable.range(-this.range, this.range * 2 + 1)
                .map(offset => this.currentPage + offset)
                .filter(page => this.isValidPageNumber(page, this.totalPages))
                .toArray();
        }
    
        isValidPageNumber(page: number, totalPages: number): boolean {
            return page > 0 && page <= totalPages;
        }
    
        getCurrentPage(offset: number, limit: number): number {
            return Math.floor(offset / limit) + 1;
        }
    
        getTotalPages(limit: number, size: number): number {
            return Math.ceil(Math.max(size, 1) / Math.max(limit, 1));
        }
    
        selectPage(page: number, event) {
            this.cancelEvent(event);
            if (this.isValidPageNumber(page, this.totalPages)) {
                this.pageChange.emit((page - 1) * this.limit);
            }
        }
    
        cancelEvent(event) {
            event.preventDefault();
        } */


}