const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value !== "") {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);


        list.append(li);
        input.focus();
        input.value = "";

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
    } else {
        input.value = "";
        input.focus();
        return;
    }

});


