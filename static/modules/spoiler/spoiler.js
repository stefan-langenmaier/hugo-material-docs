let spoilers = document.getElementsByClassName('spoiler')
let revealButtons = Array.from(document.getElementsByClassName('reveal'))

revealButtons.forEach((button, index) => {
	button.addEventListener('click', (e) => {
		if(spoilers[index].classList.contains('revealed')) {
			spoilers[index].classList.remove('revealed')
		} else {
			spoilers[index].classList.add('revealed')
		}
		
	})
})

function change_spoiler(button, show, hide) {
	console.log(button)
	if (button.innerText == show) {
		button.innerText = hide; 
	} else {
		button.innerText = show;
	} 
}