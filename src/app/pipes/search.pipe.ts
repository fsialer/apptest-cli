import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
    pure: true
})

export class SearchPipe implements PipeTransform {
    transform(items: any[], value: any): any[] {
        if (!value) return items;
        return items.filter((item: any) => {
            for (var i in item) {
                if (item[i].toString().toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return true;
                }
            }
        });
    }
}