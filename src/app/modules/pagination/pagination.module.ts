import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationPipe} from '../..//pipes/pagination.pipe';
import {PaginationService} from '../../services/pagination/pagination.service';
import {PaginationControlsComponent} from '../../components/shared/pagination/pagination-control.component';
import {PaginationControlsDirective} from '../../components/shared/pagination/pagination-controls.directive';



@NgModule({
    imports: [CommonModule],
    declarations: [
        PaginationPipe,
        PaginationControlsComponent,
        PaginationControlsDirective
    ],
    providers: [PaginationService],
    exports: [PaginationPipe, PaginationControlsComponent, PaginationControlsDirective]
})
export class PaginationModule { }