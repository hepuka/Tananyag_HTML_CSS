let users = [
	{name: "Zoltán", city: "Budapest", dob:1977.07},
	{name: "Éva",  city: "Debrecen", dob:2001},
	{name: "István", city: "Kecskemét", dob:1977},
	{name: "Katalin", city: "Szeged", dob:1988},
	{name: "János", city: "Sopron", dob:2011},
	{name: "Fanni", city: "Tatabánya", dob:1989}
]

console.table(users)

function welcomePanel(name, city,dob) {
	let welcomeTemplate = function () {
		return `<div class="welcomePanels">Welcome here ${this.name} (${this.dob}) from ${this.city}!</div>`;
	};

	let welcomeuser = welcomeTemplate.bind({
		name: name.toUpperCase(),
		city: city,
        dob: dob
	})();

	return welcomeuser
}

function renderWelcomePanels(){
	userwelcomeDiv.innerHTML = ""
	for(let user of users){
		userwelcomeDiv.innerHTML += welcomePanel(user.name, user.city,user.dob)
	}
}

renderWelcomePanels()