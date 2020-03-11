function add(num1,num2)
{
    	var result=num1+num2;					
	return result;						
}
var addResult=add(10,20);					//normal function
console.log("add result:"+addResult);

/*
function constEx(){							//using const(does not allow value to be changed)
	const x=1;
	x=2;
	console.log(x);
}
constEx();
*/

let add2=(num1,num2)=>num1+num2;				// ading using arrow function
let result=add(10,44);
console.log("Result using arrow function:"+result);


function add3(...nums){							//adding using variable arguments
	let result=0;
	for(let i=0;i<nums.length;i++){
		result=result+nums[i];
	}
	return result;
}
let resul1=add3(1,2);
console.log("Result1 :"+resul1);

let resul2=add3(1,2,5,6);
console.log("Result2 :"+resul2);


let msg=`hello						
hii
how are you?
`;
console.log(msg);                  //back-tick(`) used for printing String in more than one line.


let msg1='lnct'
let msg2=`hello
${msg1}
bye											1
`;
console.log(msg2);				//using string inside another string(String interpolation).