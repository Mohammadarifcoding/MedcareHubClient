import React from 'react';

const DocDep = ({doctor}) => {
    console.log(doctor);
    return (
        <>
         <option value="department1">{doctor?.DocType}</option>
        </>
    );
};

export default DocDep;