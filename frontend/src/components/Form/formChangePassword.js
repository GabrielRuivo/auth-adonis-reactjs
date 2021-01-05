import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validations = yup.object().shape({
    password: yup.string().min(8).required(),
    password_confirmation: yup.string().min(8).required(),
})

const initialValues = {
    password: '',
    password_confirmation: ''
}

const FormChangePassword = ({ handleSubmit  }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations} >
        <FormikForm className="Form" >
            <div>
                <Field 
                    className="Form-field" 
                    name="password" 
                    placeholder="password"
                    type="password" 
                /> 
                <ErrorMessage component="span" name="password" />
            </div>

            {/* <div>
                <Field 
                    className="Form-field" 
                    name="password_confirmation" 
                    placeholder="password_confirmation"
                    type="password" 
                /> 
                <ErrorMessage component="span" name="password_confirmation" />
            </div> */}

            <button type="submit">Reset password</button>
        </FormikForm>
    </Formik>
)

export default FormChangePassword;