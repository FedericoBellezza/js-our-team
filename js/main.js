const teamMembers = [
	{
		name: 'Marco Bianchi',
		role: 'Designer',
		email: 'marcobianchi@team.com',
		img: 'img/male1.png',
	},
	{
		name: 'Laura Rossi',
		role: 'Front-end Developer',
		email: 'laurarossi@team.com',
		img: 'img/female1.png',
	},
	{
		name: 'Giorgio Verdi',
		role: 'Back-end Developer',
		email: 'giorgioverdi@team.com',
		img: 'img/male2.png',
	},
	{
		name: 'Marta Ipsum',
		role: 'SEO Specialist',
		email: 'martarossi@team.com',
		img: 'img/female2.png',
	},
	{
		name: 'Roberto Lorem',
		role: 'SEO Specialist',
		email: 'robertolorem@team.com',
		img: 'img/male3.png',
	},
	{
		name: 'Daniela Amet',
		role: 'Analyst',
		email: 'danielaamet@team.com',
		img: 'img/female3.png',
	},
];

// const imgEl = document.getElementById('img');
// const nameEl = document.getElementById('name');
// const roleEl = document.getElementById('role');
// const emailEl = document.getElementById('email');
const cardContainerEl = document.getElementById('card-container');

for (let i = 0; i < teamMembers.length; i++) {
	const { name, img, role, email } = teamMembers[i];

	cardContainerEl.innerHTML += `
  <div class="col-4 g-0 card text-bg-dark rounded-0 border-0">
  <div class="row g-0">
  <div class="col-md-4">
  <img id="img" src="./${img}" class="img-fluid" alt="..." />
  </div>
  <div class="col-md-8">
  <div class="card-body text-start">
  <h4 id="name" class="card-title">${name}</h4>
  <p id="role" class="card-text mb-4 h5">${role}</p>
  <p id="email" class="card-text text-primary h5">${email}</p>
  </div>
  </div>
  </div>
  </div>`;
}
