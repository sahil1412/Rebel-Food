import { BasicService } from './basic.service';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  constructor(basic:BasicService){}

  transform(value: number, id: number): String {
    if (id % 5 == 0) {
      return  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/csm_01_02-2019_Beer_Brewing_53ef2818e58285158.png"
    }

    if (id % 5 == 1) {
      return "https://s3-ap-southeast-1.amazonaws.com/he-public-data/Swedish_beerb2d62a0.jpg"
    }
    if (id % 5 == 2) {
      return "https://s3-ap-southeast-1.amazonaws.com/he-public-data/EVEREST_SPECIAL_LIMITED_EDITION_BEER_POKHARA_NEPAL_FEB_2013_28851073145129_201905131625260ec63f6.jpg"
    }
    if (id % 5 == 3) {
      return "https://s3-ap-southeast-1.amazonaws.com/he-public-data/https%20_specials-images.forbesimg.com_imageserve_5e325c56f133f400076b17b9_0x03b6f8ad.jpg"
    }
    else {
      return "https://s3-ap-southeast-1.amazonaws.com/he-public-data/low-calorie-beers-157981804958062d8.jpg"
    }


  }

}
