import React from 'react';

const Docname = ({doctor}) => {
    return (
        <>
        <option value="department1">{doctor?.DocName}</option>
       </>
    );
};

export default Docname;