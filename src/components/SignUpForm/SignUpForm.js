import React from "react";
import "./SignUpForm.css";
import { Form } from "semantic-ui-react";
import { useForm } from "../../util/util_functions";
import {
  GovernorateOptions,
  centersOptions,
  yearSelect,
  inputFieldInfo,
} from "./SignUpFormData";
const SignUpForm = () => {
  const { onChange, onSubmit, values, setValues } = useForm({
    Username: "",
    Email: "",
    ParentPhone: "",
    StudenPhone: "",
    Governorate: {},
    Center: "",
    Class: "",
    User: {},
  });
  const handleGov = (e, { value }) => {
    console.log({ e });
    setValues({ ...values, Governorate: { value, id: e.target.id } });
  };
  const handleCen = (e, { value }) => {
    console.log({ value });
    setValues({ ...values, Center: value });
  };
  const handleClass = (e, { value }) => {
    console.log({ value });
    setValues({ ...values, Class: value });
  };
  const onUserChange = (e, { value }) => {
    // console.log({ e });
    setValues({ ...values, Username: value });
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
        <div
          style={{
            width: "55%",
            fontSize: "25px",
            marginTop: "3%",
            marginRight: "3%",
          }}
        >
          {inputFieldInfo.map((input, index) => (
            <Form.Input
              key={index}
              type={input.type}
              style={{
                color: "#204f5d",
                height: "8vh",
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
              height: "8vh",
              width: "100%",
              marginTop: "2rem",
              background: "#198BAF",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            إنشاء حساب
          </Form.Button>
        </div>
        <div
          style={{
            width: "55%",
            fontSize: "25px",
            marginTop: "3%",
          }}
        >
          <Form.Select
            style={{ height: "8vh", fontSize: "18px", marginBottom: "4%" }}
            fluid
            onChange={handleGov}
            label="المحافظة"
            placeholder={GovernorateOptions[0].text}
            options={GovernorateOptions}
          />
          <Form.Select
            style={{ height: "8vh", fontSize: "18px", marginBottom: "4%" }}
            fluid
            onChange={handleCen}
            label="المركز"
            placeholder={centersOptions[0][0].text}
            options={centersOptions[values.Governorate?.id] || centersOptions[0]}
          />
          <Form.Select
            style={{ height: "8vh", fontSize: "18px", marginBottom: "4%" }}
            fluid
            label="الصف الدراسي"
            onChange={handleClass}
            placeholder={yearSelect[0].text}
            options={yearSelect}
          />
          <Form.Input
            style={{ height: "8vh" }}
            fluid
            label="اسم المستخدم"
            placeholder="إدخال حروف إنجليزية وأرقام فقط - لا يوجد مسافات"
            value={values.Username}
            onChange={onUserChange}
          />
        </div>
      </Form.Group>
    </Form>
  );
};

export default SignUpForm;
