window.onload = () =>{

	const content = document.getElementById("content")

	const mainContentTop = document.getElementById("main").offsetTop
	const authorsContentTop = document.getElementById("authors").offsetTop
	const literatureContentTop = document.getElementById("literature").offsetTop
	const contactContentTop = document.getElementById("contact").offsetTop
	const sourcesContentTop = document.getElementById("sources").offsetTop

	const mainButton = document.getElementById("main-btn")
	const authorsButton = document.getElementById("authors-btn")
	const literatureButton = document.getElementById("literature-btn")
	const contactButton = document.getElementById("contact-btn")
	const sourcesButton = document.getElementById("sources-btn")

	const nextButton = document.getElementById("next-btn")

	const sendButton = document.getElementById("send-btn")

	const scrollContentTo = (top) =>{
		content.scrollTo({top: top, behavior: "smooth"});
	}

	const disableButton = (button) =>{
		button.classList.add("nav-button-next")
		button.setAttribute("disabled", "")
	}

	const enableButton = (button) =>{
		button.classList.remove("nav-button-next")
		button.removeAttribute("disabled")
	}

	let last = mainButton

	mainButton.onclick = () => {
		scrollContentTo(mainContentTop)
		disableButton(nextButton)//nextButton.classList.add("nav-button-next")
		enableButton(last)//last.classList.remove("nav-button-next")
		last = mainButton
		disableButton(last) //last.classList.add("nav-button-next")
		disableButton(sendButton) //disableSendButton()
	}
	authorsButton.onclick = () => {
		scrollContentTo(authorsContentTop)
		enableButton(nextButton)//nextButton.classList.remove("nav-button-next")
		enableButton(last)//last.classList.remove("nav-button-next")
		last = authorsButton
		disableButton(last)//last.classList.add("nav-button-next")
		disableButton(send) //disableSendButton()
	}
	literatureButton.onclick = () => {
		scrollContentTo(literatureContentTop)
		enableButton(nextButton)//nextButton.classList.remove("nav-button-next")
		enableButton(last)//last.classList.remove("nav-button-next")
		last = literatureButton
		disableButton(last)//last.classList.add("nav-button-next")
		disableButton(send)//disableSendButton()
	}
	contactButton.onclick = () => {
		scrollContentTo(contactContentTop)
		disableButton(nextButton)//nextButton.classList.add("nav-button-next")
		enableButton(last)//last.classList.remove("nav-button-next")
		last = contactButton
		disableButton(last)//last.classList.add("nav-button-next")
		enableButton(sendButton)//enableSendButton()
	}
	sourcesButton.onclick = () =>{
		scrollContentTo(sourcesContentTop)
		disableButton(nextButton)
		enableButton(last)
		last = sourcesButton
		disableButton(last)
		disableButton(sendButton)
	}




	
	const slider = document.getElementById("slider")
	const authors = Array.from(slider.children)

	const literatureSlider = document.getElementById("literature-slider")

	let authorIndex = 0

	nextButton.onclick = () =>{
		authorIndex = (authorIndex+1)%authors.length
		slider.scrollTo({left: slider.clientWidth*authorIndex, behavior: "smooth"})
		literatureSlider.scrollTo({left: slider.clientWidth*authorIndex, behavior: "smooth"})
	}
	
	console.log(authorsTops);
	console.log(slider.offsetLeft);
	


}