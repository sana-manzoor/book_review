import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchtext:any) {
    const result:any=[]
    console.log(value)
    console.log(searchtext)
    if(!value || !searchtext){
      return value
    }
    value.forEach((item:any)=>{
      if(item.title.trim().toLowerCase().includes(searchtext.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
