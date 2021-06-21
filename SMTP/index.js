//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "pliclmushfiq@gmail.com",
	Password : "Ridoy456",
	To : 'ridoy123@gmail.com',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}

	