import React from 'react';

export function Buttons(props) {
    return (
        <div className="ml-5 mb-3">
            <button type="button" className="btn btn-success mx-2" onClick={props.reversed}>A-Z</button>
            <button type="button" className="btn btn-success mx-2" onClick={props.alpha}>Z-A</button>
            <button type="button" className="btn btn-success mx-2" onClick={props.eastOf}>East of GMT</button>
            <button type="button" className="btn btn-success mx-2" onClick={props.westOf}>West of GMT</button>
        </div>
    )
}


