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

