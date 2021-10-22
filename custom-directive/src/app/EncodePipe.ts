import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'encode'
})

export class EncodePipe implements PipeTransform{
    transform(str:any,args?:any):any{
        const data = str.replace(/Blue/gi,"Green");
        return data
    }
    
}