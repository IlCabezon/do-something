// native
import { Fragment } from 'react';

// routing
import { Form, Link, useSubmit } from 'react-router-dom';

// modules
import { useFormik } from 'formik';
import { number, object, ref, string } from 'yup';

// components
import { CustomButton, CustomInput, GoBackButton } from '../../components';

// constants
import { signUpFields } from '../../constants/formsFields';

export function Component() {
  const submit = useSubmit();

  const initialValues = {
    email: '',
    password: '',
    'password-check': '',
    age: '',
    name: '',
    last: '',
  };

  const validationSchema = object({
    email: string().email().required(),
    password: string()
      .required('Password is required')
      .min(6, 'Password must be 6 characters long or more'),
    'password-check': string().oneOf(
      [ref('password'), null],
      'Passwords must match',
    ),
    age: number().required().min(0),
    name: string().required().min(4),
    last: string().required(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (formValues) => {
      submit(formValues, {
        method: 'post',
      });
    },
  });
  const { values, errors, touched, setTouched, handleChange, handleSubmit } = formik;

  return (
    <div className="main-card-page">
      <div className="main-card-page__container">
        <div>
          <GoBackButton />
          <h3 className="text-primary font-semibold text-[25px]">
            Sign up for your account
          </h3>
        </div>
        <Form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="flex flex-col mt-10 gap-4"
        >
          {signUpFields.map(({ name, type, placeholder }) => (
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

              {errors[name] && touched[name] && (
                <p className="text-primary-error first-letter:uppercase">
                  {errors[name]}
                </p>
              )}
            </Fragment>
          ))}
          <CustomButton
            btnType="submit"
            containerStyles="blue-bordered-button bg-secondary"
            isDisabled={Object.values(errors).length}
            name="sign-up_submit"
          >
            <p className="text-primary-white">Continue</p>
          </CustomButton>
          <CustomButton>
            <Link to="/login">
              <p className="text-secondary underline">
                Already have an account? Log in
              </p>
            </Link>
          </CustomButton>
        </Form>
      </div>
    </div>
  );
}
