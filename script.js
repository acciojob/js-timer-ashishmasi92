// write js code here if required
	

function getTime(){

	let now = new Date()

	let day = String(now.getDate()).padStart(2, '0');
	let month = String(now.getMonth()+1).padStart(2, '0');
	let year = String(now.getFullYear())

	 const hours = String(now.getHours()).padStart(2, '0');    // 00-23
  const minutes = String(now.getMinutes()).padStart(2, '0');// 00-59
  const seconds = String(now.getSeconds()).padStart(2, '0');// 00-59
	let fomatTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`

document.getElementById("timer").textContent = fomatTime


	
	
	
}

	setInterval(getTime,1000)

getTime()