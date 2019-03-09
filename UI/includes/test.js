// let table = require("./template").table
// let link = require("./template").link

// table(['Hello', 'World', link('#')])


const titleElement = document.getElementById("title")
const titleChangeButton = document.getElementById("title-change")
const originalTitle = titleElement.innerHTML

titleChangeButton.addEventListener('click', ()=>{
	const newTitle = 'New Title'
	const changeTitle = (titleElement.innerHTML === newTitle) ? originalTitle : newTitle
	titleElement.innerHTML = changeTitle
})