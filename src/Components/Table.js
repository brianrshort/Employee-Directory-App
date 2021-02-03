import React from 'react';

export function Table(props) {
    return (
        <table className="ml-5 table-bordered">
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>City</th>
                <th>Country</th>
                <th>Email</th>
            </tr>
                {props.map}
        </table> 
    )
}