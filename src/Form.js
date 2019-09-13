import React from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';

const Form = (props) => {
	return (
		<Form>
			<Field type="text" name="name" placeholder="name" />
			<Field type="email" name="email" placeholder="email" />
			<Field type="password" name="password" placeholder="password" />
		</Form>
	);
};

//mapsPropsToValues is a function that will take in an object full of values and will map that onto props that will be given to component such as name email and password
const FormMik = withFormik(
	{ mapPropsToValues: }
)(Form);

export default Form;