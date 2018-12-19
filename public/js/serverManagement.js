let data = [
	{
		'name': 'VSphere 1',
		'password': '12345',
		'server': "VM1",
		'pwd': 'C:\petclinic '
	},
	{
		'name': 'VSphere 2',
		'password': '12345',
		'server': "VM1",
		'pwd': 'C:\petclinic '
	},
	{
		'name': 'VSphere 3',
		'password': '12345',
		'server': "VM1",
		'pwd': 'C:\petclinic '
	}
];



document.addEventListener('DOMContentLoaded',()=>{
	function handleSubmit(e){
		e.preventDefault;
		console.log('submitted');
		var myForm = document.getElementById('serverDetails');
		console.log(myForm.elements);
		var vSelect = document.getElementById('serverList');
	
		var optn = document.createElement('option');
		optn.text = myForm.elements['Stack Name'].value;
		vSelect.appendChild(optn);
	}
	let setIcon = document.getElementById('img');
	setIcon.addEventListener('click')
});






