// -------- CHAPTER 49–52 --------

//  Task 1
// Create a signup form and display form data on submission.

function info() {
    const userName = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('no').value;

    document.write(`
        Name: ${userName}<br>
        Father Name: ${fatherName}<br>
        Email: ${email}<br>
        Number: ${number}<br>
    `);
}

//  Task 2
// “Read more” — show hidden text when clicked.

function readMore() {
    const description = `reiciendis, saepe optio nisi dolorum in repellat suscipit itaque aliquid ea iusto quasi blanditiis illum ex nam, officia ipsam neque doloribus.`;
    const pera = document.getElementById('pera');
    pera.innerHTML += description;
}

//  Task 3
// Create a form to take student details and show them in a table.
// Each row has “Edit” and “Delete” buttons.

const table = document.getElementById('recordTable');

function addRecord() {
    const studentName = document.getElementById('stdName');
    const studentClass = document.getElementById('stdClass');

    const row = document.createElement('tr');
    const nameTd = document.createElement('td');
    const classTd = document.createElement('td');
    const editTd = document.createElement('td');
    const deleteTd = document.createElement('td');

    const nameText = document.createTextNode(studentName.value);
    const classText = document.createTextNode(studentClass.value);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('onclick', 'editRecord(this)');

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.setAttribute('onclick', 'deleteRecord(this)');

    nameTd.appendChild(nameText);
    classTd.appendChild(classText);
    editTd.appendChild(editBtn);
    deleteTd.appendChild(delBtn);

    row.appendChild(nameTd);
    row.appendChild(classTd);
    row.appendChild(editTd);
    row.appendChild(deleteTd);
    table.appendChild(row);

    studentName.value = '';
    studentClass.value = '';
}

function editRecord(element) {
    const nameCell = element.parentNode.parentNode.firstChild;
    const classCell = nameCell.nextSibling;

    const currentName = nameCell.innerText;
    const currentClass = classCell.innerText;

    const newName = prompt('Edit student name:', currentName);
    const newClass = prompt('Edit student class:', currentClass);

    if (newName !== null && newName.trim() !== '') {
        nameCell.innerText = newName;
    }
    if (newClass !== null && newClass.trim() !== '') {
        classCell.innerText = newClass;
    }
}

function deleteRecord(element) {
    element.parentNode.parentNode.remove();
}
