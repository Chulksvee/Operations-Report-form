
//CODE FOR THE UPDATED DATE
let dailyDate = document.getElementById('day');
let deMonths = document.getElementById('month');
let deYears = document.getElementById('year');




const date = new Date();
console.log(date);

const day = date.getDate();
console.log(day);
dailyDate.innerHTML = `${day}`;

const month = date.getMonth() + 1;
console.log(month)
deMonths.innerHTML = `${month}`;

const year = date.getFullYear();
console.log(year);
deYears.innerHTML = `${year}`;


//For the function section
    document.getElementById('productionForm').addEventListener ('submit', function(event){
        event.preventDefault();

      
    // Initialize the counter if it doesn't exist
    if (typeof this.submitCounter === 'undefined') {
        this.submitCounter = 0;
    }

    // Increment the counter
    this.submitCounter += 1;

    // Check if the counter has reached 4
    if (this.submitCounter >= 5) {
        // Hide the form
        this.style.display = 'none';
        return; 
    }

const number1 = document.getElementById('number').value;
const companyName = document.getElementById('companyName').value;
const partNo = document.getElementById('partNo').value;
const noOfPeople = document.getElementById('noofPeople').value;
const startTime = document.getElementById('starttime').value;
const stopTime = document.getElementById('stopTime').value;
const quantityPacked = document.getElementById('quantityPacked').value;
const paintNo = document.getElementById('paintNo').value;
const typeOfPowder = document.getElementById('typeOfPowder').value;
const quantityUsed = document.getElementById('quantityUsed').value;
const balPowder = document.getElementById('balPowder').value;
const temperature = document.getElementById('temperature').value;
const lineSpeed = document.getElementById('lineSpeed').value;
const thickAverageMin = document.getElementById('thickAverageMin').value;
const thickAverageMax = document.getElementById('thickAverageMax').value;
const poNo = document.getElementById('partNo1').value;
const comment1 = document.getElementById('comment').value;
const inspection = document.getElementById('inspection').value;
const inspector = document.getElementById('inspector').value;


const table = document.getElementById('productionTable');

//For the Table
    const row = `<tr>
         <td>${number1}</td>
        <td>${companyName}</td>
        <td>${partNo}</td>
        <td>${noOfPeople}</td>
        <td>${startTime}</td>
        <td>${stopTime}</td>
        <td>${quantityPacked}</td>
        <td>${paintNo}</td>
        <td>${typeOfPowder}</td>
        <td>${quantityUsed}</td>
        <td>${balPowder}</td>
        <td>${temperature}</td>
        <td>${lineSpeed}</td>
        <td>${thickAverageMin}</td>
        <td>${thickAverageMax}</td>
        <td>${poNo}</td>
        <td>${comment1}</td>
        <td>${inspection}</td>
        <td>${inspector}</td>
    </tr>`;

    table.insertAdjacentHTML('beforeend', row);
        this.reset();


    });

    //For Friffin Btn
let btn = () =>{
   const supervisor = document.getElementById('supervisor');
   const supervisor1 = document.getElementById('num');


        let write = prompt('Enter Name of Supervisor');
        let write1 = prompt('Enter Line Number')

                supervisor.innerHTML = `SUPR: ${write}`;
                supervisor1.innerHTML = `LINE #: ${write1}`;

    }

    //For the Sum
let btn1 = () => {
    const list1 = document.getElementById('list1');
    const list2 = document.getElementById('list2');
    const list3 = document.getElementById('list3');
    const settle1 = document.getElementById('settle1');
    const settle2 = document.getElementById('settle2');
    const settle3 = document.getElementById('settle3');
    const middle1 = document.getElementById('middle1');
    const middle2 = document.getElementById('middle2');
    const middle3 = document.getElementById('middle3');
    const collins1 = document.getElementById('collins1');
    const collins2 = document.getElementById('collins2');
    const collins3 = document.getElementById('collins3');
    const griffin1 = document.getElementById('griffin1');
    const griffin2 = document.getElementById('griffin2');
    const griffin3 = document.getElementById('griffin3');
    const packing = document.getElementById('packing');
    const packing1 = document.getElementById('packing1');

            //for the painters
        let typeName = prompt('Enter Name of the First Painter');
        let typeName1 = prompt('Enter Name of the Second Painter');
        let typeName2 = prompt('Enter Name of the Third Painter');

            list1.innerHTML = ` ${typeName}`;
            list2.innerHTML = ` ${typeName1}`;
            list3.innerHTML = ` ${typeName2}`;

                //for the hangers
                    let hanger1 = prompt('Enter Name of First Hanger');
                    let hanger2 = prompt('Enter Name of Second Hanger');
                    let hanger3 = prompt('Enter Name of Third Hanger');

                        settle1.innerHTML = ` ${hanger1}`;
                        settle2.innerHTML = ` ${hanger2}`;
                        settle3.innerHTML = ` ${hanger3}`;

                                //for the packers
                                    let packer1 = prompt('Enter Name of the First Packer');
                                    let packer2 = prompt('Enter Name of the Second Packer');
                                    let packer3 = prompt('Enter Name of the Third Packer');

                                        middle1.innerHTML = ` ${packer1}`;
                                        middle2.innerHTML = ` ${packer2}`;
                                        middle3.innerHTML = ` ${packer3}`;

                                                //for final inspection
                                                    let final1 = prompt('Enter final Inspection Status');
                                                    let final2 = prompt('Enter accepted quantity');
                                                    let final3 = prompt('Enter Daily Check');

                                                        collins1.innerHTML = `Final Inspection Status: ${final1}`;
                                                        collins2.innerHTML = `Accepted Qty: ${final1}`;
                                                        collins3.innerHTML = `Daily Check: ${final2}`;

                                        //for the inspector
                                        let inspect1 = prompt('Enter Inspector Name');
                                        let inspect2 = prompt('Enter Rejected Qty');
                                        let inspect3 = prompt('Enter Wash Tank Oil');

                                            griffin1.innerHTML = `Inspector: ${inspect1}`;
                                            griffin2.innerHTML = `Rejected Qty: ${inspect2}`;
                                            griffin3.innerHTML = `Wash Tank Oil: ${inspect3}`;

                        //for the box
                        let box = prompt('Enter Packing Slip Number');
                        let box2 = prompt('Enter Line Leader Name');

                            packing.innerHTML = `Packing Slip Number: ${box}`;
                            packing1.innerHTML = `Line Leader: ${box2}`;

                                

            
}