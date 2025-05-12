//your JS code here. If required.
document.addEventListener("DOMContentLoaded",async function(){
	function promise1(delay){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				console.log(["Promise 1",delay.toFixed(3)])
			resolve(["Promise 1",delay.toFixed(3)])
			},delay*1000)
		})
	}
	function promise2(delay){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				console.log(["Promise 2",delay.toFixed(3)])
			resolve(["Promise 2",delay.toFixed(3)])
			},delay*1000)
		})
	}
	 function promise3(delay){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				console.log(["Promise 3",delay.toFixed(3)])
			resolve(["Promise 3",delay.toFixed(3)])
			},delay*1000)
		})
	}
	let tbody = document.getElementById("output");
	const array = await Promise.all(
		[promise1(Math.floor(Math.random()*3)+1),
		promise2(Math.floor(Math.random()*3)+1),
		promise3(Math.floor(Math.random()*3)+1)]
	)
	console.log(array,array.length)
	if(array.length){
		console.log("hi")
		tbody.innerHTML="";
		console.log(tbody);
		let total = array.reduce((acc,curr)=>acc+=Number(curr[1]),0).toFixed(3)
		
		tbody.innerHTML=`<tr>
		<td>${array[0][0]}</td>
		<td>${array[0][1]}</td></tr>
		<tr>
		<td>${array[1][0]}</td>
		<td>${array[1][1]}</td>
		</tr>
		<tr>
		<td>${array[2][0]}</td>
		<td>${array[2][1]}</td>
		</tr>
		<tr>
		<td>Total</td>
		<td>${total}</td>
		</tr>
		`
	}
})