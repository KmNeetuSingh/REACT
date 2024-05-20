document.addEventListener('DOMContentLoaded', function () {
    const departmentFilter = document.getElementById('department-filter');
    const genderFilter = document.getElementById('gender-filter');
    const sortOrder = document.getElementById('sort-order');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const employeeData = document.getElementById('employee-data');

    let currentPage = 1;
    let totalPages = 1;
    let employees = [];

    // Function to fetch employee data from the API
    async function fetchEmployeeData() {
        try {
            const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees');
            const data = await response.json();
            // console.log(data);w
            return data.data; // Extracting the 'data' property from the response
        } catch (error) {
            console.error('Error fetching data:', error);
            return []; // Return an empty array in case of error
        }
    }

    // Function to display employee data on the DOM
    function displayEmployeeData() {
        const start = (currentPage - 1) * 10;
        const end = start + 10;
        const paginatedData = employees.slice(start, end);

        employeeData.innerHTML = '';

        paginatedData.forEach((employee, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${start + index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.gender}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
            `;
            employeeData.appendChild(row);
        });

        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    // Function to handle filtering and sorting
    function filterAndSortData() {
        let filteredEmployees = [...employees];

        const department = departmentFilter.value;
        if (department) {
            filteredEmployees = filteredEmployees.filter(employee => employee.department === department);
        }

        const gender = genderFilter.value;
        if (gender) {
            filteredEmployees = filteredEmployees.filter(employee => employee.gender === gender);
        }

        const order = sortOrder.value;
        if (order === 'asc') {
            filteredEmployees.sort((a, b) => a.salary - b.salary);
        } else if (order === 'desc') {
            filteredEmployees.sort((a, b) => b.salary - a.salary);
        }

        totalPages = Math.ceil(filteredEmployees.length / 10);
        employees = filteredEmployees;
        currentPage = 1;
        displayEmployeeData();
    }

    // Event listeners for filters and sort order
    departmentFilter.addEventListener('change', filterAndSortData);
    genderFilter.addEventListener('change', filterAndSortData);
    sortOrder.addEventListener('change', filterAndSortData);

    // Event listeners for pagination
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayEmployeeData();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayEmployeeData();
        }
    });

    // Initialize the application
    async function initialize() {
        employees = await fetchEmployeeData();
        totalPages = Math.ceil(employees.length / 10);
        displayEmployeeData();
    }

    initialize();
});
