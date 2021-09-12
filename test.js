const Seat = require('./seat')
const SeatSection = require('./seatSection')
const Airplane = require('./airplane')
const input = require('./input')
const airline = require('./airline')

function testCase1() {
    // input is null, FillSeast should return empty array
    input.setInput(null);
    let ans = airline.FillSeats(input.getInput(),30)
    if(ans.length ==0){
        console.log("Test Case1: Should return the filled seats as empty array if input passed is null")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase2() {
    // input is undefined, FillSeast should return empty array
    input.setInput(undefined);
    let ans = airline.FillSeats(input.getInput(),30)
   // console.log("Output" +ans)
    if(ans.length ==0){
        console.log("Test Case 2: Should return the filled seats as empty array if input passed is undefined")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase3() {
    // input is [], FillSeast should return empty array
    input.setInput([]);
    let ans = airline.FillSeats(input.getInput(),30)
   // console.log("Output" +ans)
    if(ans.length ==0){
        console.log("Test Case 3: Should return the filled seats as empty array if input passed is []")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase4() {
    // input is [], FillSeast should return empty array
    input.setInput([[],[],[],[]]);
    let ans = airline.FillSeats(input.getInput(),30)
   // console.log("Output" +ans)
    if(ans.length ==0){
        console.log("Test Case 4: Should return the filled seats as empty array if input passed is all empty")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase5() {
    // input is [], FillSeast should return empty array
    input.setInput([[3,2],[4,3],[2,3],[3,4]]);
    let ans = airline.FillSeats(input.getInput(),30)
   // console.log(ans.getAisleSeats().length)
    if(ans.getAisleSeats().length == 18){
        console.log("Test Case 5: Should return the number Aisle seat =18")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase6() {
    // input is [], FillSeast should return empty array
    input.setInput([[3,2],[4,3],[2,3],[3,4]]);
    let ans = airline.FillSeats(input.getInput(),30)
    let filteredSeats = ans.getMiddleSeats().filter((seats)=>{
        return seats.isOccupied
    })
    //console.log(filteredSeats.length)
    if(filteredSeats.length == 6){
        console.log("Test Case 6: Should return the number Middle seat =6")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase7() {
    // input is [], FillSeast should return empty array
    input.setInput([[3,2],[4,3],[2,3],[3,4]]);
    let ans = airline.FillSeats(input.getInput(),30)
    let filteredSeats = ans.getWindowSeats().filter((seats)=>{
        return seats.isOccupied
    })
    console.log(filteredSeats.length)
    if(filteredSeats.length == 6){
        console.log("TTest Case 7: Should return the number window seat =6")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase8() {
    // input is [], FillSeast should return empty array
    input.setInput([[3,2],[4,3],[2,3],[3,4]]);
    let ans = airline.FillSeats(input.getInput(),30)
    let filteredSeats = ans.getWindowSeats().filter((seats)=>{
        return seats.isOccupied
    })
    let temp =[]
    filteredSeats.forEach(element => {
        temp.push(element.passengerId)
    });
    //console.log(temp)
    if(temp.join('') == [ 19, 20, 21, 22, 23, 24 ].join('')){
        console.log("Test Case 8: Should match windows seat allocations with expected")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase9() {
    // input is [], FillSeast should return empty array
    input.setInput([[3,2],[4,3],[2,3],[3,4]]);
    let ans = airline.FillSeats(input.getInput(),30)
    let filteredSeats = ans.getMiddleSeats().filter((seats)=>{
        return seats.isOccupied
    })
    let temp =[]
    filteredSeats.forEach(element => {
        temp.push(element.passengerId)
    });
    console.log(temp)
    if(temp.join('') == [ 25,26,27,28,29,30 ].join('')){
        console.log("Test Case 9: Should match middle seat allocations with expected")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase10() {
    // input is [], FillSeast should return empty array
    input.setInput([[3,2],[4,3],[2,3],[3,4]]);
    let ans = airline.FillSeats(input.getInput(),30)
    let filteredSeats = ans.getAisleSeats().filter((seats)=>{
        return seats.isOccupied
    })
    let temp =[]
    filteredSeats.forEach(element => {
        temp.push(element.passengerId)
    });
   // console.log(temp)
    if(temp.join('') == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18 ].join('')){
        console.log("Test Case 10: Should match Aisle seat allocations with expected")
    }
    else{
        console.error("Test case failed")
    }
    
}

function testCase11() {
    // input is [], FillSeast should return empty array
    input.setInput([[4,4],[6,7],[2,3],[10,3]]);
    let ans = airline.FillSeats(input.getInput(),15)
    let filteredSeats = ans.getAisleSeats().filter((seats)=>{
        return seats.isOccupied
    })
    let temp =[]
    filteredSeats.forEach(element => {
        temp.push(element.passengerId)
    });
   // console.log(temp)
    if(temp.join('') == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 ].join('')){
        console.log("Test Case 11: Should match Aisle seat allocations with expected")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase12() {
    // input is [], FillSeast should return empty array
    input.setInput([[4,4],[6,7],[2,3],[10,3]]);
    let ans = airline.FillSeats(input.getInput(),15)
    let filteredSeats = ans.getWindowSeats().filter((seats)=>{
        return seats.isOccupied
    })
    let temp =[]
    filteredSeats.forEach(element => {
        temp.push(element.passengerId)
    });
   // console.log(temp)
    if(temp.length == 0){
        console.log("Test Case 12: Should return empty array as window seats are not filled up as passengers are accomadated with aisle seats")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase13() {
    // input is [], FillSeast should return empty array
    input.setInput([[4,4],[6,7],[2,3],[10,3]]);
    let ans = airline.FillSeats(input.getInput(),15)
    let filteredSeats = ans.getMiddleSeats().filter((seats)=>{
        return seats.isOccupied
    })
    let temp =[]
    filteredSeats.forEach(element => {
        temp.push(element.passengerId)
    });
  //  console.log(temp)
    if(temp.length == 0){
        console.log("Test Case 13: Should return empty array as middle seats are not filled up as passengers are accomadated with aisle seats")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase13() {
    // input is [], FillSeast should return empty array
    input.setInput([[4,4],[6,7],[2,4],[10,3]]);
    let ans = airline.FillSeats(input.getInput(),50)
   // console.log(ans.getAisleSeats())
    let filteredSeats = ans.getAisleSeats().filter((seats)=>{
        return seats.isOccupied
    })
    let temp =[]
    filteredSeats.forEach(element => {
        temp.push(element.passengerId)
    });
   //console.log(temp)
    if(temp.join('') == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29 ].join('')){
        console.log("Test Case 13: Should match Aisle seat allocations with expected")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase14() {
    // input is [], FillSeast should return empty array
    input.setInput([[4,4],[6,7],[2,4],[10,3]]);
    let ans = airline.FillSeats(input.getInput(),50)
   // console.log(ans.getAisleSeats())
    let filteredSeats = ans.getWindowSeats().filter((seats)=>{
        return seats.isOccupied
    })
    let temp =[]
    filteredSeats.forEach(element => {
        temp.push(element.passengerId)
    });
   //console.log(temp)
    if(temp.join('') == [30,31,32,33,34,35,36 ].join('')){
        console.log("Test Case 14: Should match window seat allocations with expected")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase15() {
    // input is [], FillSeast should return empty array
    input.setInput([[4,4],[6,7],[2,4],[10,3]]);
    let ans = airline.FillSeats(input.getInput(),50)
   // console.log(ans.getAisleSeats())
    let filteredSeats = ans.getMiddleSeats().filter((seats)=>{
        return seats.isOccupied
    })
    let temp =[]
    filteredSeats.forEach(element => {
        temp.push(element.passengerId)
    });
 //  console.log(temp)
    if(temp.join('') == [37,38,39,40,41,42,43,44,45,46,47,48,49,50 ].join('')){
        console.log("Test Case 15: Should match middle seat allocations with expected")
    }
    else{
        console.error("Test case failed")
    }
    
}
function testCase16() {
    // display seats
    input.setInput([[3,2],[4,3],[2,3],[3,4]]);
    let ans = airline.FillSeats(input.getInput(),30)
    let finalOutput = airline.ShowOutput(ans);
   console.log(finalOutput)
    
    
}
function testCase17() {
    // display seats
    input.setInput([[4,4],[6,7],[2,4],[10,3]]);
    let ans = airline.FillSeats(input.getInput(),50)
    let finalOutput = airline.ShowOutput(ans);
   console.log(finalOutput)
    
    
}
function testCase18() {
    // display seats
    input.setInput([[],[1,4],[2,3]]);
    let ans = airline.FillSeats(input.getInput(),50)
    let finalOutput = airline.ShowOutput(ans);
   console.log(finalOutput)
    
    
}
function testCase19() {
    // display seats
    input.setInput([[4,4],[1,4],[2,3]]);
    let ans = airline.FillSeats(input.getInput(),18)
    let finalOutput = airline.ShowOutput(ans);
   console.log(finalOutput)
    
    
}

testCase1()
testCase2()
testCase3()
testCase4()
testCase5()
testCase6()
testCase7()
testCase8()
testCase9()
testCase10()
testCase11()
testCase12()
testCase13()
testCase14()
testCase15()
testCase16()
testCase17()
testCase18()
testCase19()
