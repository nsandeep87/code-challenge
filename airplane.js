const Seat = require('./seat');
const SeatSection = require('./seatSection')
const appEnum = require('./enums')
class Airplane{
    totalNumberOfSeats =0;
    seatSections = [];
    aisleSeats = [];
    windowSeats = [];
    middleSeats = [];
    constructor(input){
        if(input.length ==0){
            return;
        }
        for(let i=0;i<input.length;i++){
  
            if(i ==0)
             {
                 let seatSection = new SeatSection(input[i],appEnum.LEFT);
                 this.totalNumberOfSeats+= seatSection.seatCollection.length
                 this.seatSections.push(seatSection )
             }
             else if(i == input.length-1){
                let seatSection = new SeatSection(input[i],appEnum.RIGHT);
                this.totalNumberOfSeats+= seatSection.seatCollection.length
              this.seatSections.push( seatSection)
             }
             else{
                let seatSection = new SeatSection(input[i],appEnum.CENTER);
                this.totalNumberOfSeats+= seatSection.seatCollection.length
                 this.seatSections.push( seatSection)
             }
                
         }
       //  console.log(this.seatSections)
        
         this.groupSeats();
    }
    groupSeats(){
        for(let i =0; i<this.seatSections.length;i++){
            for(let j=0;j<this.seatSections[i].seatCollection.length;j++){
                if(this.seatSections[i].seatCollection[j].type == appEnum.AISLE){
                    this.aisleSeats.push(this.seatSections[i].seatCollection[j])
                }
                else if(this.seatSections[i].seatCollection[j].type == appEnum.WINDOW){
                    this.windowSeats.push(this.seatSections[i].seatCollection[j])
                }
                else{
                    this.middleSeats.push(this.seatSections[i].seatCollection[j])
                }
            }
        }
    }
    getAisleSeats(side){
     //  console.log(this.aisleSeats)
       this.aisleSeats = this.aisleSeats.sort((a,b)=>{
            return a.row - b.row
        })
       // console.log(this.aisleSeats)
        return this.aisleSeats
    }
    getWindowSeats(side){
       
     return   this.windowSeats.sort((a,b)=>{
            return a.row - b.row
        })
        
    }
    getMiddleSeats(side){
       
       return this.middleSeats.sort((a,b)=>{
            return a.row - b.row
        })
        
    }
    
    

}
module.exports = Airplane;