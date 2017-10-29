import { Component,OnInit,Input } from '@angular/core';

/**
 * Generated class for the StarRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.html'
})
export class StarRatingComponent implements OnInit {
  _small:boolean = false;
  _rank:string = '0';
  show:boolean = false;

  array_1 = [
    {img:'assets/imgs/empty-star.png'},
    {img:'assets/imgs/empty-star.png'},
    {img:'assets/imgs/empty-star.png'},
    {img:'assets/imgs/empty-star.png'},
    {img:'assets/imgs/empty-star.png'}
  ];
  array_2 = [
    {img:'assets/imgs/full-star.png'},
  ];
  array_3 = [
    {img:'assets/imgs/half-star.png'}
  ];
  starArray:any = [];

  // 子组件接收父组件内容
  @Input() rank:string;
  @Input() small:boolean;
  
  // 传入父组件
  // @Output() send = new EventEmitter();

  constructor() {
    this.starArray = this.array_1;
  }

  ngOnInit(){
    this._small = this.small != undefined;
    if( typeof this._rank=='string' ){
      this._rank = this.rank;
    };
    if( this._small ){
      // 缩略形式
      this.show = true;
      this.starArray = this.array_2;
    }else{
      // 完整形式
      this.show = false;
      this.starArray = this.array_1;    
      
      // 判断是否为整数
      let a = this._rank.indexOf('.')
      if( a != -1 ){
        // 有小数点
        for( let i=0;i<this.starArray.length;i++ ){
          if( this._rank=='0.5' ){
            this.starArray[0] = this.array_3[0];
          }else if( this._rank=='1.5' ){
            this.starArray[0] = this.array_2[0];
            this.starArray[1] = this.array_3[0];
          }else if( this._rank=='2.5' ){
            this.starArray[0] = this.array_2[0];
            this.starArray[1] = this.array_2[0];
            this.starArray[2] = this.array_3[0];
          }else if( this._rank=='3.5' ){
            this.starArray[0] = this.array_2[0];
            this.starArray[1] = this.array_2[0];
            this.starArray[2] = this.array_2[0];
            this.starArray[3] = this.array_3[0];
          }else if( this._rank=='4.5' ){
            this.starArray[0] = this.array_2[0];
            this.starArray[1] = this.array_2[0];
            this.starArray[2] = this.array_2[0];
            this.starArray[3] = this.array_2[0];
            this.starArray[4] = this.array_3[0];
          }
        }
      }else{
        // 没有小数点
        for( let i=0;i<this.starArray.length;i++ ){
          if( this._rank=='1' ){
            this.starArray[0] = this.array_2[0];
          }else if( this._rank=='2' ){
            this.starArray[0] = this.array_2[0];
            this.starArray[1] = this.array_2[0];
          }else if( this._rank=='3' ){
            this.starArray[0] = this.array_2[0];
            this.starArray[1] = this.array_2[0];
            this.starArray[2] = this.array_2[0];
          }else if( this._rank=='4' ){
            this.starArray[0] = this.array_2[0];
            this.starArray[1] = this.array_2[0];
            this.starArray[2] = this.array_2[0];
            this.starArray[3] = this.array_2[0];
          }else if( this._rank=='5' ){
            this.starArray[0] = this.array_2[0];
            this.starArray[1] = this.array_2[0];
            this.starArray[2] = this.array_2[0];
            this.starArray[3] = this.array_2[0];
            this.starArray[4] = this.array_2[0];
          }
        }
        
      }
    }
    
  }

}
