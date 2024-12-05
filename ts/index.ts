// Initialize a 2D array to store input values and their cubes
let tbarray: number[][] = [];

// Get the dropdown element by its ID ("row") and cast it to HTMLSelectElement
const row: HTMLSelectElement = document.getElementById("row") as HTMLSelectElement;

/**
 * Function to create a 2D array based on the number of rows selected in the dropdown.
 * This function is triggered whenever the dropdown value changes.
 */
function createarray() {
    // Get the selected value from the dropdown and convert it to an integer
    const rowValue = parseInt(row.value);

    // Check if the selected value is a valid number and greater than 0
    if (isNaN(rowValue) || rowValue <= 0) {
        tbarray = []; // Reset the array to an empty array if invalid
    } else {
        // Create a 2D array with "rowValue" rows, each containing two elements initialized to 0
        tbarray = new Array(rowValue).fill(0).map(() => new Array(2).fill(0));
    }

    // Generate the HTML table to display the rows
    generatetable();
}

/**
 * Function to dynamically generate the table in the HTML based on the contents of `tbarray`.
 */
function generatetable() {
    // Get the table body element (where rows will be displayed) by its ID ("tb1")
    const tb1: HTMLTableElement = document.getElementById("tb1") as HTMLTableElement;

    // Clear any existing rows in the table body
    tb1.innerHTML = "";

    // Initialize an empty string to store the HTML for the table rows
    let tbody = "";

    // Loop through each row in the `tbarray`
    for (let i = 0; i < tbarray.length; i++) {
        // Append a table row (`<tr>`) with two columns (`<td>`) to the `tbody` string
        tbody += `<tr>
                    <td>
                      <!-- Input field for the user to enter a value (x) -->
                      <input type="text" id="inp${i}" value="${tbarray[i][0]}" class="form-control">
                    </td>
                    <td>
                      <!-- Read-only input field to display the cube of the value (x^3) -->
                      <input type="text" id="out${i}" value="${tbarray[i][1]}" class="form-control" readonly>
                    </td>
                  </tr>`;
    }

    // Set the innerHTML of the table body to the generated rows
    tb1.innerHTML = tbody;
}

/**
 * Function to update the values in `tbarray` based on the user's input
 * and calculate the cubes for each value. This function is triggered when the "Show cube" button is clicked.
 */
function updatearray() {
    // Loop through each row in the `tbarray`
    for (let i = 0; i < tbarray.length; i++) {
        // Get the input field for the current row by its ID ("inp{i}") and cast it to HTMLInputElement
        const inp: HTMLInputElement = document.getElementById(`inp${i}`) as HTMLInputElement;

        // Get the value entered by the user in the input field and convert it to an integer
        const inputValue = parseInt(inp.value);

        // Check if the input is a valid number
        if (!isNaN(inputValue)) {
            // Update the first column of the current row in `tbarray` with the input value
            tbarray[i][0] = inputValue;

            // Calculate the cube of the input value and store it in the second column of `tbarray`
            tbarray[i][1] = Math.pow(inputValue, 3);
        } else {
            // If the input is invalid (e.g., empty or non-numeric), reset both columns to 0
            tbarray[i][0] = 0;
            tbarray[i][1] = 0;
        }
    }

    // Refresh the table to display the updated values and cubes
    generatetable();
}
