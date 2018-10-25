var arr = [
  [1, 5, 4],
  [8, 5, 4],
  [3, 4, 5],
 
];
let left =0;
let right=0;
let s =2;
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
   if(i==0  ){
      left+=arr[i][i];
     right+=arr[i][s-i];
   }
  if(i==1  ){
      left+=arr[i][i];
    right+=arr[i][s-i];
   }
  if(i==2  ){
      left+=arr[i][i];
    right+=arr[i][s-i];
   }
  console.log(left+' '+right);
}
