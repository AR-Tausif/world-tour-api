const loadBillionairies = async ()=>{
    const url = './AllBillionaires.json'
    const res = await fetch(url);
    const data = await res.json();
    displayBillionaries(data);
}

const displayBillionaries=data =>{
    const dataSli = data.slice(0, 100)
    console.log(dataSli);
    const containerTable = document.getElementById('table-container');
    dataSli.forEach(billionary => {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <td>${billionary.person.name}</td>
        <td>${billionary.countryOfCitizenship}</td>
        <td>${billionary.industries[0]}</td>
        <td>${billionary.rank}</td>
        <td>$${billionary.archivedWorth}</td>
        `
        containerTable.appendChild(tableRow)
        console.log(billionary);
    });
}

document.getElementById('all-billionairy-btn').addEventListener('click', function(){

    loadBillionairies();
})
