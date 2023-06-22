const tableBodyElement = document.querySelector('#userTable');

let botao = document.getElementById('botao1');

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

/////////////////////////////////////////////////////////////////////////////////////////

let botao2 = document.getElementById('botao2');

botao2.addEventListener('click', function(){

    fetch('https://randomuser.me/api/?nat=BR&results=15&seed=SL&page=22')
  
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

/////////////////////////////////////////////////////////////////////////////////////////

let botao3 = document.getElementById('botao3');

botao3.addEventListener('click', function(){

    fetch('https://randomuser.me/api/?nat=BR&results=15&seed=SL&page=33')

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

/////////////////////////////////////////////////////////////////////////////////////////

let botao4 = document.getElementById('botao4');

botao4.addEventListener('click', function(){

    fetch('https://randomuser.me/api/?nat=BR&results=15&seed=SL&page=4')

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

/////////////////////////////////////////////////////////////////////////////////////////

let botao5 = document.getElementById('botao5');

botao5.addEventListener('click', function(){

    fetch('https://randomuser.me/api/?nat=BR&results=15&seed=SL&page=5')

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

/////////////////////////////////////////////////////////////////////////////////////////

let botao6 = document.getElementById('botao6');

botao6.addEventListener('click', function(){

    fetch('https://randomuser.me/api/?nat=BR&results=15&seed=SL&page=7')

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

