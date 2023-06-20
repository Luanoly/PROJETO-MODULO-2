const tableBodyElement = document.querySelector('#userTable');

fetch('https://randomuser.me/api/?nat=BR&results=1')
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        users.forEach(user => {
            const row = document.createElement('tr');
            const nome = document.createElement('td');
            const cidade = document.createElement('td');
            const email = document.createElement('td');
            const celular = document.createElement('td');

            nome.textContent = user.name.first;
            cidade.textContent = user.location.city;
            email.textContent = user.email;
            celular.textContent = user.phone;

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
