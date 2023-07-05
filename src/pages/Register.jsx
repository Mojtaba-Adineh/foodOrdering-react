import React from "react";
import Helmet from "./../components/helmet/Helmet";
import CommonSection from "./../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Formik, Form } from "formik";
import CustomInput from "../components/UI/custom input/CustomInput";
import { registerSchema } from "../schemas/registerSchema";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Register = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location = "/"
  };

  return (
    <Helmet title="Register">
      <CommonSection title="Register" />

      <section>
        <Container>
          <Row className="form-row m-auto">
            <Col lg="12">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  confirmPassword: ""
                }}
                enableReinitialize
                validationSchema={registerSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <div>
                    <Form className="form">
                      <CustomInput
                        value={props.values.email}
                        name="email"
                        placeholder="Email"
                        id="email"
                        type="email"
                      />
                      <CustomInput
                        value={props.values.password}
                        name="password"
                        placeholder="Password"
                        id="password"
                        type="password"
                      />
                      <CustomInput
                        value={props.values.confirmPassword}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        id="ConfirmPassword"
                        type="password"
                      />
                      <button
                        disabled={props.isSubmitting}
                        className=" addToCard-btn  mt-3"
                        type="submit"
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
              <h6 className="mt-3 below-text text-center">
                <Link to={"/login"}>
                  already have an account? Login
                </Link>
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
