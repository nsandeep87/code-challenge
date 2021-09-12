var defaultInput = [[3,2],[4,3],[2,3],[3,4]];
var _input =[];
var input = {
    "setInput":(input)=> {
        _input = input
    },
    "getInput":()=>{
        return _input
    },
    "getUsers":()=>{
        return 30
    }
}
module.exports =input;

// [[4,4],[6,7],[2,3],[10,3]]
//[[4,4],[1,4],[2,3]]
// [[],[1,4],[2,3]]
//[]
// null
