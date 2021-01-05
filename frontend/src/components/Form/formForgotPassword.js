import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email().required(),
})

const initialValues = {
    email: '',
}

const FormForgotPassword = ({ handleSubmit  }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations} >
        <FormikForm className="Form" >
            <div>
                <Field 
                    className="Form-field" 
                    name="email" 
                    placeholder="Email"
                    type="email" 
                /> 
                <ErrorMessage component="span" name="email" />
            </div>

            <button type="submit">Send E_Mail</button>
        </FormikForm>
    </Formik>
)

export default FormForgotPassword;