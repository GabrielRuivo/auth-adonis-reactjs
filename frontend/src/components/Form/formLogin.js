import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
})

const initialValues = {
    email: '',
    password: ''
}

const FormLogin = ({ handleSubmit  }) => (
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

            <div>
                <Field 
                    className="Form-field" 
                    name="password" 
                    placeholder="password" 
                    type="password" 
                /> 
                <ErrorMessage component="span" name="password" />
            </div>
            <button type="submit">Log In</button>
        </FormikForm>
    </Formik>
)

export default FormLogin;