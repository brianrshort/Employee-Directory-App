import React from 'react';

export function Search(props) {

    const handleChange = (e) => {
        const terms = e.target.value;
            const newArray = props.employees.filter(emp => {
                if (emp.name.first.includes(terms) || emp.name.last.includes(terms)) {
                   return emp;
                }
            }) ;
            props.setEmployees(newArray);
        }
    
    
    return (
        
        <div className="input-group input-group-lg ml-5 mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Search by name</span>
                </div>
                <input type="text" class="form-control" aria-label="Large" 
                    aria-describedby="inputGroup-sizing-sm" onChange={handleChange} />
        </div>
            
    )
}
