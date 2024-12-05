let tbarray: number[][] = [];
const row: HTMLSelectElement = document.getElementById("row") as HTMLSelectElement;

function createarray() {
    const rowValue = parseInt(row.value);
    if (isNaN(rowValue) || rowValue <= 0) {
        tbarray = []; // Reset the array if no valid selection
    } else {
        tbarray = new Array(rowValue).fill(0).map(() => new Array(2).fill(0));
    }
    generatetable();
}

function generatetable() {
    const tb1: HTMLTableElement = document.getElementById("tb1") as HTMLTableElement;
    tb1.innerHTML = ""; // Clear previous table rows

    let tbody = "";
    for (let i = 0; i < tbarray.length; i++) {
        tbody += `<tr>
                    <td><input type="text" id="inp${i}" value="${tbarray[i][0]}" class="form-control"></td>
                    <td><input type="text" id="out${i}" value="${tbarray[i][1]}" class="form-control" readonly></td>
                  </tr>`;
    }
    tb1.innerHTML = tbody;
}

function updatearray() {
    for (let i = 0; i < tbarray.length; i++) {
        const inp: HTMLInputElement = document.getElementById(`inp${i}`) as HTMLInputElement;
        const inputValue = parseInt(inp.value);

        if (!isNaN(inputValue)) {
            tbarray[i][0] = inputValue;
            tbarray[i][1] = Math.pow(inputValue, 3); // Calculate cube
        } else {
            tbarray[i][0] = 0;
            tbarray[i][1] = 0;
        }
    }
    generatetable(); // Refresh the table with updated values
}
