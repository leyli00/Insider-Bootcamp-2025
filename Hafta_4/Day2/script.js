document.addEventListener("DOMContentLoaded", function () {

    const userTable = document.createElement("table");
    userTable.setAttribute("border", "1");
    document.body.appendChild(userTable);


    const userTHead = document.createElement("thead");
    const userTHeadRow = document.createElement("tr");
    const userTHeaders = ["Username", "E-mail", "Address", "Delete"];
    userTHeaders.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        userTHeadRow.appendChild(th);
    });

    userTable.appendChild(userTHead);
    userTHead.appendChild(userTHeadRow);

    const userTBody = document.createElement("tbody");
    userTable.appendChild(userTBody);



    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userRow = document.createElement("tr");

                // user name
                const userName = document.createElement("td");
                userName.textContent = user.username;
                userRow.appendChild(userName);

                // email
                const eMail = document.createElement("td");
                eMail.textContent = user.email;
                userRow.appendChild(eMail);

                // address
                const addressText = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
                const adDress = document.createElement("td");
                adDress.textContent = addressText;
                userRow.appendChild(adDress);

                // delete button
                const deleteBtnTd = document.createElement("td");
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Sil";
                deleteButton.onclick = function () {
                    userRow.remove();
                };
                deleteBtnTd.appendChild(deleteButton);
                userRow.appendChild(deleteBtnTd);

                userTBody.appendChild(userRow);
            });
        })
});


/* document.addEventListener("DOMContentLoaded", function () {
    // Tabloyu oluştur
    const table = document.createElement("table");

    // Thead oluştur
    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");

    const headers = ["ID", "Ad, Soyad", "Bölüm", "Öğrenciyi Sil"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    // Tbody oluştur
    const tbody = document.createElement("tbody");
    tbody.id = "students";
    table.appendChild(tbody);

    // Tabloyu sayfaya ekle
    document.body.appendChild(table);

    // Kullanıcıları API'den çek ve tabloya ekle
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.slice(0, 10).forEach(user => {
                const row = document.createElement("tr");

                // ID
                const idCell = document.createElement("td");
                idCell.textContent = user.id;
                row.appendChild(idCell);

                // Ad, Soyad
                const nameCell = document.createElement("td");
                nameCell.textContent = user.name;
                row.appendChild(nameCell);

                // Bölüm
                const deptCell = document.createElement("td");
                deptCell.textContent = user.company.name;
                row.appendChild(deptCell);

                // Silme butonu
                const deleteCell = document.createElement("td");
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Sil";
                deleteButton.onclick = function () {
                    row.remove();
                };
                deleteCell.appendChild(deleteButton);
                row.appendChild(deleteCell);

                tbody.appendChild(row);
            });
        })
        .catch(error => console.error("Veri çekme hatası:", error));
}); */





