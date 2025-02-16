interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Mia",
    lastName: "Malkova",
    age: 32,
    location: "USA"
};

const student2: Student = {
    firstName: "Angela",
    lastName: "White",
    age: 39,
    location: "AU"
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

const headerRow: HTMLTableRowElement = table.insertRow();
const th1: HTMLTableCellElement = document.createElement("th");
th1.textContent = "First Name";
const th2: HTMLTableCellElement = document.createElement("th");
th2.textContent = "Location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);

studentsList.forEach(student => {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2: HTMLTableCellElement = row.insertCell();
    cell2.textContent = student.location;
});

document.body.appendChild(table);
