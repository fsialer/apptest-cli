import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterMenu'
})

export class MenuPipe implements PipeTransform {
    transform(items:Array<any>,element:any): Array<any> {
        return items.filter(item=>item.padre_control==element);
            
        }  
    }
