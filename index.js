const tableBodyElement = document.querySelector('#userTable');

let botao = document.getElementById('botao1');
let tabela = document.getElementById('userTable');

botao.addEventListener('click', function(){

    fetch('https://randomuser.me/api/?nat=BR&results=15&seed=SL&page=1')

    .then(response => response.json())

    .then(data => {
        const users = data.results;
        users.forEach(user => {
            const row = document.createElement('tr');
            const nome = document.createElement('td');
            const cidade = document.createElement('td');
            const email = document.createElement('td');
            const celular = document.createElement('td');
            const foto = document.createElement('img');

            nome.textContent = user.name.first;
            cidade.textContent = user.location.city;
            email.textContent = user.email;
            celular.textContent = user.phone;
            foto.src = user.picture.large;

            row.appendChild(foto);
            row.appendChild(nome);
            row.appendChild(cidade);
            row.appendChild(email);
            row.appendChild(celular);
            tableBodyElement.appendChild(row);
        });
    })
    .catch(error => {
        console.log('Ocorreu um erro:', error);
    });

});

