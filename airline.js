
const Seat = require('./seat')
const SeatSection = require('./seatSection')
const Airplane = require('./airplane')
const input = require('./input')
//let input =  availableInputs();
input.setInput([[3,2],[4,3],[2,3],[3,4]]);
var airplaneSeats = FillSeats(input.getInput(), input.getUsers());


console.log(showOutput(airplaneSeats))
function showOutput(airplaneSeats) {
    let finalOutput = [];
if(airplaneSeats && airplaneSeats.seatSections){
    airplaneSeats.seatSections.forEach((seatSections)=>{
        var output =[[]]
        seatSections.seatCollection.forEach(element => {
      
        if(!output[element.row]){
            output[element.row] =[]
        }
            output[element.row][element.column] = element.passengerId
      
    });
    finalOutput.push(output)
    })
}
return finalOutput;
}
function FillSeats(input,userCount) {
   // console.log("k"+input)
    try{
        if(input.length ==0)
            return []
        let ar = new Airplane(input);
        if(ar.totalNumberOfSeats ==0)
            return []
        let counter =0;
        let aisleArray = ar.getAisleSeats();
        let windowArray = ar.getWindowSeats();
        let middleSeatArray = ar.getMiddleSeats();
        
        function processSeatArray(element){
           
            if(counter>=userCount)
            {
             
                return;
            }
            else{
             
                element.isOccupied = true;
                element.passengerId = ++counter;
                return element
            }
            
        }
        
        aisleArray.map(processSeatArray);
        windowArray.map(processSeatArray);
        middleSeatArray.map(processSeatArray);
        return ar;
    }
    catch(e){
       // console.log("error")
        return [];
    }
}
module.exports = {
    "FillSeats":FillSeats,
    "ShowOutput":showOutput
};
