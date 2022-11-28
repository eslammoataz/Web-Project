window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})


let adding = document.getElementById('addItem');

function dia() {
    alert("Laboratory has been added successfully");

}

adding.onclick = function () {
    let labName = document.getElementById('labName') || ' ';
    let labID = document.getElementById('labID') || ' ';
    let buildingNum = document.getElementById('buildingNumber') || ' ';
    let floorNum = document.getElementById('floorNumber') || ' ';
    let numPCs = document.getElementById('numPCs') || ' ';
    let capacity = document.getElementById('capacity') || ' ';
    let numOfChairs = document.getElementById('numOfChairs') || ' ';
    const info = [labName.value, labID.value, buildingNum.value, floorNum.value, numPCs.value, capacity.value, numOfChairs.value];

    localStorage.setItem(labName.value, JSON.stringify(info));
    dia();

}
