
import React, { useState, useEffect } from 'react'
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import renderFormElement from './FormElement';
export default function FormsBuilder(props) {
    console.log(props,'props ===>>>');
    const {fields,title,onSubmit,...rest} = props;
    const [validationSchema, setvalidationSchema] = useState({});
    const [initialValues, setinitialValues] = useState({});
    const [elemnts, setelmants] = useState([])
useEffect(() => {
  fields?.forEach((el, index)=> {
    setinitialValues(old=>({...old, [el.name]: el.value ??''}))
    setvalidationSchema(old => ({...old, [el.name]: el.cutomValidation ?? el.validationsType}))
    setelmants(old =>([...old, {type: el.type, props: el.props}]))
  })
}, [props, initialValues, validationSchema, elemnts])
const handelSubmit = (event) => {
    console.log(event);
    onSubmit(event)
}
  return (
    <div>
        <h1>{title}</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({validationSchema})}
        onSubmit={values => handelSubmit(values)}
        >
            {({ errors, touched }) => (
                <Form>
                    {
    elemnts.length && 
    elemnts.map((el, index)=> {
return (<>
<renderFormElement  props={el.props}/>
{errors[el.name] && touched[el.name] ? (
                    <div style={{ color: "red" }}>{errors[el.name]}</div>
                  ) : null}
</>)
    })
}
                </Form>
            )}
        </Formik>
    </div>
  )
}
