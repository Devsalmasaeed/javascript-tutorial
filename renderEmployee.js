const employees = [
        { name: 'Alice', position: 'Developer' },
        { name: 'Bob', position: 'Designer' },
        { name: 'Charlie', position: 'Manager' }
    ];
    
    const renderEmployees = employees => {
        const container = document.getElementById('employeeContainer');
        employees.forEach(employee => {
            container.innerHTML += `
                <div>
                    <h3>${employee.name}</h3>
                    <p>Position: ${employee.position}</p>
                </div>
            `;
        });
    }
    
    renderEmployees(employees);