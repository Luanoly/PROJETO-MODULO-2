const tableBodyElemnt = document.querySelector('#userTable');

fetch('http://localhost:5000/aluno')
    .then(response => response.json())
    .then(data => {
        const users = data;
        users.forEach(user => {
            const row = document.createElement('tr');
            const nome = document.createElement('td');
            const data_nascimento = document.createElement('td');
            const matricula = document.createElement('td');

            nome.textContent = user;
            data_nascimento.textContent = user;
            matricula.textContent = user;

            row.appendChild(nome);
            row.appendChild(data_nascimento);
            row.appendChild(matricula);
            tableBodyElemnt.appendChild(row);

            async function mostrar() {
                const response = await
                    fetch('https://randomuser.me/api');
                const jsonData = await response.json();
                console.log(jsonData);
            }
        });
    })