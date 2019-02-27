let flag = false;
var dataArray = [];

function createElements(){
    if (flag == false) {
        var dateField = document.createElement('input');
        var descField = document.createElement('input');
        var okButton = document.createElement('button');
        var cancelButton = document.createElement('button');

        dateField.setAttribute('id', 'fetchDate');
        dateField.setAttribute('type', 'date');

        descField.setAttribute('id', 'fetchDesc');
        descField.setAttribute('type', 'text');

        okButton.setAttribute('id', 'okbttn');
        okButton.setAttribute('onclick', 'newRow()');

        cancelButton.setAttribute('id', 'cancelbttn');
        cancelButton.setAttribute('onclick', 'deleteRow()');

        var btnAdd = document.createTextNode('Add');
        var btnCancel = document.createTextNode('Cancel');

        okButton.append(btnAdd);
        cancelButton.append(btnCancel);

        document.body.appendChild(dateField);
        document.body.appendChild(descField);
        document.body.appendChild(okButton);
        document.body.appendChild(cancelButton);

        flag = true;
    }

}

function newRow(){
    flag = false;
    let dt = document.getElementById('fetchDate').value;
    let des = document.getElementById('fetchDesc').value;

    dataArray.push({ 'date': dt, 'des': des });
    createTable()
}

function deleteRow(){
        flag=false;
        let oldinput= document.getElementById('fetchDate');
        let olddes= document.getElementById('fetchDesc');
        let oldok= document.getElementById('okbttn');
        let oldno= document.getElementById('cancelbttn');
        
        oldinput.remove();
        olddes.remove();
        oldok.remove();
        oldno.remove();
}

function createTable(){
    let oldtable = document.getElementById('table');
    if (!!oldtable) {
        oldtable.remove();
    }
    var table = document.createElement('table');
    table.style.border = "1px solid black";
    table.style.width = "100%";

    table.setAttribute('id', 'table');

    var th1 = document.createElement('th');
    th1.style.border = "1px solid black";

    var th2 = document.createElement('th');
    th2.style.border = "1px solid black";

    var th3 = document.createElement('th');
    th3.style.border = "1px solid black";
    var th1_heading = document.createTextNode('Date');
    var th2_heading = document.createTextNode('Description');
    var th3_heading = document.createTextNode('Delete');


    th1.append(th1_heading);
    th2.append(th2_heading);
    th3.append(th3_heading);

    table.appendChild(th1);
    table.appendChild(th2);
    table.appendChild(th3);

    for (var index = 0; index < dataArray.length; index++) 
    {
        var data = dataArray[index];
        var delBttn = document.createElement("button");
        var delBttnName = document.createTextNode("Delete");
        var tr = document.createElement('tr');
        var date = document.createElement("td");
        date.style.border = "1px solid black";

        var desc = document.createElement("td");
        desc.style.border = "1px solid black";

        delBttn.append(delBttnName);
        date.append(data['date']);
        desc.append(data['des']);
        tr.appendChild(date);
        tr.appendChild(desc);
        tr.appendChild(delBttn);
        table.appendChild(tr);  
    }
    document.body.appendChild(table);
} 