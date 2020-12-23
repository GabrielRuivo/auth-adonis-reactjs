import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validations = yup.object().shape({
    username: yup.string().required('Name is required !'),
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
})

const initialValues = {
    username: '',
    email: '',
    password: ''
}

const FormRegister = ({ handleSubmit  }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations} >
        <FormikForm className="Form" >

            <div>
                <Field 
                    className="Form-field" 
                    name="username" 
                    placeholder="Name"
                    type="text" 
                /> 
                <ErrorMessage component="span" name="username" />
            </div>

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
            <button type="submit">Sign In</button>
        </FormikForm>
    </Formik>
)

export default FormRegister;