import React from "react";
import { ErrorMessage } from "formik";

const KErrorMessage = ({ name }) => {
    return (
        <div className="text-red-400">

            <ErrorMessage name={name} />
        </div>
    );
};

export default KErrorMessage;