import React, { useEffect } from "react";
import "./SignUpForm.css";
import { Form } from "semantic-ui-react";
import { useForm } from "../../util/util_functions";
import {
  GovernorateOptions,
  centersOptions,
  yearSelect,
  inputFieldInfo,
} from "./SignUpFormData";
import axios from "axios";

const SignUpForm = () => {
  const { onChange, onSubmit, values, setValues } = useForm({
    fullName: "",
    email: "",
    fatherMobile: "",
    mobile: "",
    state: "",
    Center: "",
    schoolStage: "",
    User: {},
  });
  useEffect(() => {
    if (values.User) {
      axios
        .post(
          "http://104.155.188.57:8080/manasa/rest/student/studentregister",
          {
            companyId: 74,
            branchId: 176,
            fullName: values.fullName,
            password: values.fullName,
            mobile: values.mobile,
            fatherMobile: values.fatherMobile,
            fatherJob: values.mobile,
            gender: 1,
            userName: values.fullName,
            stateId: values.state,
            email: values.email,
            schoolStagesId: values.schoolStage,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [values.User]);

  const handleGov = (e, { value }) => {
    setValues({ ...values, state: value });
  };
  const handleCen = (e, { value }) => {
    setValues({ ...values, Center: value });
  };
  const handleClass = (e, { value }) => {
    setValues({ ...values, schoolStage: value });
  };
  const onUserChange = (e, { value }) => {
    setValues({ ...values, fullName: value });
  };
  return (
    <Form onSubmit={onSubmit}>
      <h4>جميع الحقول مطلوبة*</h4>
      <Form.Group
        style={{
          marginLeft: "10%",
          width: "80%",
          textAlign: "right",
          marginBottom: "5%",
        }}
      >
        <div className="input-fields">
          {inputFieldInfo.map((input, index) => (
            <Form.Input
              key={index}
              type={input.type}
              style={{
                color: "#204f5d",
                height: "50px",
                marginBottom: "4%",
              }}
              name={input.name}
              value={values && values[input.name]}
              onChange={onChange}
              fluid
              label={input.text}
            />
          ))}
          <Form.Button
            className="form-button"
            style={{
              height: "50px",
              width: "100%",
              marginTop: "2rem",
              background: "#198BAF",
              color: "white",
              fontSize: "2.9vh",
              fontWeight: "bold",
            }}
          >
            إنشاء حساب
          </Form.Button>
        </div>
        <div className="select-fields">
          <Form.Select
            style={{ height: "50px", fontSize: "18px", marginBottom: "4%" }}
            fluid
            onChange={handleGov}
            label="المحافظة"
            placeholder={GovernorateOptions[0].text}
            options={GovernorateOptions}
          />
          <Form.Select
            style={{ height: "50px", fontSize: "18px", marginBottom: "4%" }}
            fluid
            onChange={handleCen}
            label="المركز"
            placeholder={
              values.state
                ? centersOptions[values.state][0].text
                : centersOptions[0][0].text
            }
            options={values.state && centersOptions[values.state]}
          />
          <Form.Select
            style={{ height: "50px", fontSize: "18px", marginBottom: "4%" }}
            fluid
            label="الصف الدراسي"
            onChange={handleClass}
            placeholder={yearSelect[0].text}
            options={yearSelect}
          />
          <Form.Input
            style={{ height: "50px" }}
            fluid
            label="اسم المستخدم"
            placeholder="إدخال حروف إنجليزية وأرقام فقط - لا يوجد مسافات"
            value={values.fullName}
            onChange={onUserChange}
          />
        </div>
      </Form.Group>
    </Form>
  );
};

export default SignUpForm;
