/*
Sort an array of 0s, 1s and 2s .

Solution :
1 . Count all 0 ,1 ,2 , append array.

2. 3 pointer approach. (t-On  s= O1)
low=0,mid=0 high = n;
if i === 0 swap low , mid, inc low, mid
if i === 1 mid+1
if i =2 swap i with high dec high  by1 

*/

const sortArray3Pointer = (arr) => {
  let left = 0;
  let curr = 0;
  let right = nums.length - 1;
  while (curr <= right) {
    if (nums[curr] == 0)
      [nums[curr++], nums[left++]] = [nums[left], nums[curr]];
    //swap values, you are always putting the 0 to the left edge, can increment new current since we have already looked at it before (curr>=left so we have already evaluated it)
    else if (nums[curr] == 2)
      [nums[curr], nums[right--]] = [nums[right], nums[curr]];
    //swap, so right side always has 2's, do not increment current yet because don't know what value it was.
    else curr++; // current was a 1, so you don't move it to either side, go next
  }
};

const sortArray = (arr) => {
  let c0 = 0,
    c1 = 0,
    c2 = 0,
    fianlArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      c0++;
    }
    if (arr[i] === 1) {
      c1++;
    }
    if (arr[i] === 2) {
      c2++;
    }
  }
  console.log(c0, c1, c2);
  for (let i = 0; i < c0; i++) {
    fianlArr.push(0);
  }
  for (let i = 0; i < c1; i++) {
    fianlArr.push(1);
  }
  for (let i = 0; i < c2; i++) {
    fianlArr.push(2);
  }
  return fianlArr;
};

console.log(sortArray(arr));

console.log(sortArray3Pointer(arr));
