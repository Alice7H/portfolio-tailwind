const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = {
    name: event.target.name.value,
    email: event.target.email.value,
    tel: event.target.tel.value,
    message: event.target.message.value,
  }
  if (data) {
    await sendFormToEmail(data);
  }
});

function sendFormToEmail(data) {
  fetch("https://formsubmit.co/ajax/alicehata9@gmail.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.tel,
      message: data.message
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Mensagem enviada com sucesso!');
      form.reset();
    })
    .catch(error => console.log(error));
}