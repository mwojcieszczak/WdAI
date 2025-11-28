window.onload = () =>{
	const text = document.getElementById("text")
	const start = document.getElementById("start")
	const reset = document.getElementById("reset")

	let time = 0

	let flag = true

	let interval = null

	start.onclick = () => {
		if (flag){
			interval = setInterval(()=>{
				time+=1
				if (time <60){
					text.innerText = (time + "s").padStart(3, "0")
				}
				else{
					let min = Math.floor(time/60)
					text.innerText = (min+"min") + " " + (time%60 + "s").padStart(3, "0")
				}
			}, 1000)
			start.innerText = "STOP"
			flag = false
		}else{
			timeStop = Date.now()
			clearInterval(interval)
			console.log(interval);
			start.innerText = "RESUME"
			flag = true
		}
	}

	reset.onclick = () =>{
		clearInterval(interval)
		text.innerText = "00s"
		start.innerText = "START"
		time = 0
		flag = true
	}
}