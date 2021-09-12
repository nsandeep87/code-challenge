  class Seat {
    row;
    column;
    passengerId=0;
    id;
    color;
    isOccupied;
    type;
    constructor(rowNumber,colNumber){
        this.row = rowNumber;
        this.column = colNumber;
    }
}
module.exports = Seat;