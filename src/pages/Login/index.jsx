// native
import { Fragment } from 'react';

// routing
import { Form, Link, useSubmit, useActionData } from 'react-router-dom';

// modules
import { useFormik } from 'formik';
import { object, string } from 'yup';

// components
import { CustomButton, CustomInput, GoBackButton } from '../../components';

// constants
import { loginFields } from '../../constants/formsFields';

export function Component() {
  const submit = useSubmit();
  const actionData = useActionData();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = object({
    email: string().email().required(),
    password: string().required('Enter a password'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      submit(values, { method: 'post' });
    },
  });
  const { values, errors, touched, setTouched, handleChange, handleSubmit } = formik;

  return (
    <div className="main-card-page">
      <div className="main-card-page__container">
        <GoBackButton />
        <h3 className="text-primary font-semibold text-[25px]">
          Log in to your account
        </h3>
        <Form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col mt-10 gap-4"
        >
          {loginFields.map(({ name, type, placeholder }) => (
            <Fragment key={name}>
              <CustomInput
                type={type}
                name={name}
                placeholder={placeholder}
                error={touched[name] && errors[name]}
                value={values[name]}
                onChange={(e) => {
                  setTouched({ ...touched, [name]: true });
                  handleChange(e);
                }}
              />

              {!actionData && errors[name] && touched[name] && (
                <p className="text-primary-error first-letter:uppercase">
                  {errors[name]}
                </p>
              )}
            </Fragment>
          ))}
          {actionData && actionData.message && (
            <p className="text-primary-error first-letter:uppercase">
              {actionData.message}
            </p>
          )}
          <CustomButton
            btnType="submit"
            containerStyles="blue-bordered-button bg-secondary"
            isDisabled={Object.values(errors).length}
            name="sign-up_submit"
          >
            <p className="text-primary-white">Continue</p>
          </CustomButton>
          <CustomButton>
            <Link to="/sign-up">
              <p className="text-secondary underline">Sign up for an account</p>
            </Link>
          </CustomButton>
        </Form>
      </div>
    </div>
  );
}
