window.onload = () =>{
	const minChar = document.getElementById("minchar")
	const maxChar = document.getElementById("maxchar")
	const bigLetters = document.getElementById("bigletters")
	const special = document.getElementById("special")
	const generate = document.getElementById("generate")

	const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	const upperCase = lowerCase.map((str)=>str.toUpperCase())

	const spec =  [
  		"!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
 		 "-", "_", "=", "+",
  		"[", "]", "{", "}", 
  		";", ":", "'", "\"",
  		"\\", "|",
 		",", ".", "/", "<", ">", "?", 
  		"`", "~"
	]

	const getRandom = (arr) =>{
		return arr[Math.floor(Math.random()*arr.length)]
	}

	let bigOn = false
	let specialOn = false

	bigLetters.onchange = () =>{
		bigOn = (!bigOn)
	}

	special.onchange = ()=>{
		specialOn = !specialOn
	}

	const genChar = () =>{
		if (bigOn&&specialOn){
			random = Math.random()
			if (random<0.3) return getRandom(lowerCase)
			else if (random<0.6) return getRandom(upperCase)
			return getRandom(spec)
		}
		else if(bigOn){
			random = Math.random()
			if (random<0.5) return getRandom(lowerCase)
			else return getRandom(upperCase)
		}
		else if(specialOn){
			random = Math.random()
			if (random<0.5) return getRandom(lowerCase)
			else return getRandom(spec)
		}
		else{
			return getRandom(lowerCase)
		}
	}
	

	generate.onclick = () =>{
		const minVal = minChar.value
		const maxVal = maxChar.value
		if (minVal == "" || maxVal == ""){
			alert("Uzupełnij dane")
			return
		}

		const numberOfChars = Math.floor(Math.random()*(parseInt(maxVal) - parseInt(minVal))) + parseInt(minVal)

		let pass = ""

		for (let i = 0; i<numberOfChars; i++){
			pass = pass + genChar()
		}

		alert(pass)
	}
}