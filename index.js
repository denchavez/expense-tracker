let data = [
    {
        id: 1,
        name: "McDondald's",
        date: "2020-09-18",
        amount: "$12"
    }
]

function addExpense() {
    var id = data[data.length - 1].id + 1
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;

    inputs = [name, date, amount];
    inputStatus = true;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].trim() === "") {
            inputStatus = false;
            window.alert("1 or more text fields are empty. Please input information.");
        }
    }

    let tbody = document.querySelector("tbody");
    
    if (inputStatus === true) {
        data.push({
            "id": id,
            "name": name,
            "date": date,
            "amount": amount
        })
        tbody.innerHTML += `
            <tr id=${id}>
                <td>${name}</td>
                <td>${date}</td>
                <td>${amount}</td>
                <td class="class__row">
                    <button class="close" id="close" onclick="deleteExpense()">X</button>
                </td>
            </tr>
        `;
        document.getElementById("name").value = ""
        document.getElementById("date").value = ""
        document.getElementById("amount").value = ""
    };
};

function deleteExpense() {
    const btn = document.getElementById("close");
    btn.closest("tr").remove();
}