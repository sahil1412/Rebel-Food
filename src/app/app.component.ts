import { BasicService } from './basic.service';
import { Component,Input,OnInit } from '@angular/core';
import { albums } from './album'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Rebel'
  Searched = false;
  notSearched = true;
  public resultImage: any;
  @Input() nameValue: String;
  public collection: any;
  public resultAbv: any;
  public resultIbv: any;
  public resultId: any;
  public resultName: any;
  public resultStyle: any;
  public resultOunces: any;
  public data: any;
  searched:Array<any>
  totalRecords: String;
  page: Number = 1
  name: any;
  

  constructor(private basic: BasicService,) {  }
  ngOnInit(): void {
    
    //this.client =[]
    this.basic.getBrandList().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.totalRecords = data.length;
    }); 
    this.basic.getBrandImages().subscribe((images) => {
      console.log(images);
      this.collection = images;
    });
    
  }
  
  search(num1:any) {
    this.data = this.data.filter(res => {
      if (res.name == num1) {
        this.Searched = true;
        this.resultImage = '';
        this.notSearched = false;
        this.resultAbv = res.abv;
        this.resultIbv = res.ibv;
        this.resultId = res.id;
        this.resultName = res.name;
        this.resultStyle = res.style;
        this.resultOunces = res.ounces;
      }
    
    })
  }
  checkNum(num1) {
    this.ngOnInit;
  console.log(num1)
}


srch() {
  this.data = this.data.filter(res => {
    console.log(res);
    })
}
//getList() {
  //  this.basic.getBrandList().subscribe((data) => {
  //    console.log(data);
  //    this.data = data;
  //    this.totalRecords = data.length;
  //  })
  //}

  //getImage() {
  //  this.basic.getBrandImages().subscribe((images) => {
  //    console.log(images)
  //     
  //  })
  //}

}
