function addStyles() {
    const style = document.createElement("style");
    style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    #ins-api-users {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .header {
        margin-bottom: 40px;
        user-select: none;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 300px);
        gap: 25px;
        justify-content: center;
    }

    .card {
        border: 1px solid black;
        border-radius: 5px;
        width: 250px;
        height: 300px;
        max-width: 300px;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 15px;
        justify-content: center;
        user-select: none;
    }

    .delete-btn {
        height: 30px;
        background-color: rgb(174, 6, 6);
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    #reload-btn {
        height: 40px;
        width: 250px;
        background-color: green;
        color: white;
        border: none;
        border-radius: 5px;
        margin-top: 40px;
        font-size: 17px;
        cursor: pointer;
}
    `;
    document.head.appendChild(style);
}
addStyles();

const appendLocation = "#ins-api-users";
const STORAGE_KEY = "usersData";
sessionStorage.setItem("sessionIsUsedBtn", false);
const appendLocation_container = document.querySelector(appendLocation);

const header_h1 = document.createElement("h1");
header_h1.textContent = "User Cards"
header_h1.className = "header"
appendLocation_container.appendChild(header_h1);

const cards_div = document.createElement("div");
cards_div.className = "cards";
appendLocation_container.appendChild(cards_div);

function getJsonPlaceholderData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            const existingData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                data,
                timeStamp: existingData.timeStamp || new Date().getTime() // Zaten varsa değiştirme
            }));
            data.forEach(item => {
                const card_div = document.createElement("div");
                card_div.className = "card";
                card_div.setAttribute("data-id", `${item.id}`)
                card_div.innerHTML = `
                <div class="username-div"><h4>Username</h4>
                <span>${item.username}</span></div>
                <div class="email-div"><h4>E-mail</h4>
                <span>${item.email}</span></div>
                <div class="address-div"><h4>Address</h4>
                <span>${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}</span></div>
                <button class="delete-btn">Delete</button>
                `;
                cards_div.appendChild(card_div);
            });

            document.addEventListener("click", function (event) {
                if (event.target.classList.contains("delete-btn")) {
                    deleteCard(event);
                }
            })

        })
        .catch(err => console.log(err));
}

// local storage'dan 24 saatte veriyi siler
function checkAndRemoveData() {
    const item = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (item) {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - item.timeStamp;

        if (timeDiff >= 86400000) { // 24 saat
            localStorage.removeItem(STORAGE_KEY);
        }
    }
}
setInterval(checkAndRemoveData, 5000);

function displayData(data) {
    data.forEach(item => {
        const card_div = document.createElement("div");
        card_div.className = "card";
        card_div.setAttribute("data-id", `${item.id}`);
        card_div.innerHTML = `
                <div class="username-div"><h4>Username</h4>
                <span>${item.username}</span></div>
                <div class="email-div"><h4>E-mail</h4>
                <span>${item.email}</span></div>
                <div class="address-div"><h4>Address</h4>
                <span>${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}</span></div>
                <button class="delete-btn">Delete</button>
            `;
        cards_div.appendChild(card_div);
    });

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            deleteCard(event);
        }
    });
}

function deleteCard(event) {
    const card = event.target.closest(".card");
    const id = card?.dataset.id;
    if (!id) return;

    let storedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!storedData || !storedData.data) return;

    storedData.data = storedData.data.filter(user => user.id != id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
    card.remove();
}

function showReloadButton() {
    if (document.getElementById("reload-btn")) return;

    const reloadBtn = document.createElement("button");
    reloadBtn.id = "reload-btn";
    reloadBtn.textContent = "Reload";

    reloadBtn.addEventListener("click", () => {
        sessionStorage.setItem("usersFetched", true);
        getJsonPlaceholderData();
        reloadBtn.remove();
    })
    appendLocation_container.appendChild(reloadBtn);
}

const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        if (mutation.type === "childList") {
            const remainingCards = document.querySelectorAll(".card").length;
            let sessionIsUsedBtn = JSON.parse(sessionStorage.getItem("sessionIsUsedBtn"));
            console.log(sessionIsUsedBtn);
            if (remainingCards === 0 && sessionIsUsedBtn === false) {
                showReloadButton();
                sessionStorage.setItem("sessionIsUsedBtn", true);
            }
        }
    });
});

observer.observe(cards_div, { childList: true, subtree: true });
getJsonPlaceholderData();



