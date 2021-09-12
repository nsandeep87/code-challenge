# code-challenge

Description:
The challenge is wrapped into a NodeJs Project. You'll need node js runtime. i have use Node 12.14.0.

How to run the program:
Once Node is installed, run node airplaine.js

How to run tests
run node test.js

How to change inputs to view outputs for different input data
For simplicity, you can chnage the inputs by editing the below file
1. Inside airplane.js, AT LIne No 7, you setInputs dynamically
input.setInput([[3,2],[4,3],[2,3],[3,4]]);

Test cases
1. I have not used any external test frameworks. I have tried to cover various test cases that I could think of during coding

Sample output screen shots for below Inputs
The below are screen shots for different inputs. Each output is 2 D array represent the Left section, Middle Section and the Right Section of the plane. The array is popuplated with passengerId( starting from Id =1 with incremnts of 1). If no passenger is occupied, it is shown as 0

1. For input [[3,2],[4,3],[2,3],[3,4]]
<img width="556" alt="Screen Shot 2021-09-12 at 7 06 05 PM" src="https://user-images.githubusercontent.com/6167063/132989727-6c2a3094-0a94-4c00-940c-3ddb6aa7cf23.png">
2. For the input [[],[1,4],[2,3]]
<img width="340" alt="Screen Shot 2021-09-12 at 7 12 06 PM" src="https://user-images.githubusercontent.com/6167063/132989929-9148b3a6-a45f-4e81-a536-bde37661c40d.png">

3. For Input []

<img width="469" alt="Screen Shot 2021-09-12 at 7 18 25 PM" src="https://user-images.githubusercontent.com/6167063/132990158-58e8f507-a625-4a35-9a7c-181311d57a63.png">

4. For Input [[4,4],[6,7],[2,3],[10,3]]
<img width="388" alt="Screen Shot 2021-09-12 at 7 10 34 PM" src="https://user-images.githubusercontent.com/6167063/132989876-56d13dbd-2358-4bac-8a4a-658ee29e2c99.png">












