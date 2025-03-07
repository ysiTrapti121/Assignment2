document.addEventListener('DOMContentLoaded', ()=>{
const taskData = document.getElementById('TableData');
taskData.innerHTML= "";
Taskdata.forEach(task =>
    {
        const row= document.createElement('tr');
        const tableDID = document.createElement('td');
        const tableLink= document.createElement('a');
        tableLink.href =`tr_details.html?Task_ID=${task.Task_ID}`;
        tableLink.textContent = task.Task_ID;
        tableDID.appendChild(tableLink);
        row.appendChild(tableDID);
       
        const tableDescD= document.createElement('td');
        tableDescD.textContent = task.Task_Description;
        row.appendChild(tableDescD);

        const tableAssD= document.createElement('td');
        tableAssD.textContent = task.Assigned_To;
        row.appendChild(tableAssD);

        const tableDueD= document.createElement('td');
        tableDueD.textContent = task.Due_Date;
        row.appendChild(tableDueD);

        taskData.appendChild(row);
    }
)
});