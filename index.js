const tableBodyElemnt = document.querySelector('#userTable');

fetch('http://localhost:5000/aluno')
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        users.forEach(user => {
            const row = document.createElement('tr');
            const nome = document.createElement('td');
            const data_nascimento = document.createElement('td');
            const email_institucional = document.createElement('td')
            const matricula = document.createElement('td');

            nome.textContent = user;
            data_nascimento.textContent = user;
            email_institucional.textContent = user;
            matricula.textContent = user;

            row.appendChild(nome);
            row.appendChild(data_nascimento);
            row.appendChild(email_institucional);
            row.appendChild(matricula);

            tableBodyElemnt.appendChild(row);
        });
    })