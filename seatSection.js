const Seat = require('./seat')
const appEnum = require('./enums')
class SeatSection {
    height;
    width;
    seatCollection =[];
    sectionSide;
    constructor(seatCordinates,side){
       this.height = seatCordinates[1];
       this.width = seatCordinates[0];
       this.sectionSide = side;
       let index =1;
       for(var i=0;i<this.height;i++){
           for(var j=0;j<this.width;j++){
             //  console.log("m")
               let a = new Seat(i,j);
               a.id= index++;
               a.sectionSide = side;
               a.type = this.getSeatType(side,i,j)
              // console.log("i and j"+ i+" "+j)
               //console.log("type "+a.type)
               a.isOccupied = false;
               this.seatCollection.push( a)
           }
       }
      // console.log(this.seatCollection)
    }
    getSeatType(side,i,j){
           if(side == "L"){
               if(j == this.width-1){
                   return appEnum.AISLE
               }
               else if(j ==0){
                   return appEnum.WINDOW
               }
               else{
                   return appEnum.MIDDLE
               }
           }
           else if(side == "R"){
               if(j == this.width-1){
                   return appEnum.WINDOW
               }
               else if(j ==0){
                   return appEnum.AISLE
               }
               else{
                   return appEnum.MIDDLE
               }
           }
           else{
               if(j==0 || j == this.width-1){
                   return appEnum.AISLE
               }
               else{
                   return appEnum.MIDDLE
               }
           }

    }

}
module.exports = SeatSection;