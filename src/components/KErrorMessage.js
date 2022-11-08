import React from "react";
import { ErrorMessage } from "formik";

const KErrorMessage = ({ name }) => {
    return (
        <div className="text-violet-300">

            <ErrorMessage name={name} />
        </div>
    );
};

export default KErrorMessage;