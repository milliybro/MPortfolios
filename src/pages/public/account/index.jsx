import { Flex, Form, Image, Input, Modal, Spin, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./style.scss";

import Cookies from "js-cookie";
import { TOKEN, USER } from "../../../constants";
import { request } from "../../../server";
import { getUserImage } from "../../../utils/getImage";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useUploadAccountPhotoMutation,
} from "../../../server/query/auth";

const AccountPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [photo, setPhoto] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const { data: user, refetch, isFetching } = useGetUserInfoQuery();

  const [updateUserInfo] = useUpdateUserInfoMutation();
  const [uploadAccountPhoto] = useUploadAccountPhotoMutation();

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user, form]);

  const uploadImage = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const { data } = await uploadAccountPhoto(formData);
    setPhoto(data);
  };

  const updateUser = async (values) => {
    await updateUserInfo(values);
    message.success("Information saved successfully");
    refetch();
  };

  const logout = () => {
    Cookies.remove(TOKEN);
    localStorage.removeItem(USER);
    refetch();
    navigate("/");
  };

  const changePassword = async (e) => {
    e.preventDefault();
    const newPassword = {
      username: e.target.username.value,
      currentPassword: e.target.currentPassword.value,
      newPassword: e.target.newPassword.value,
    };

    try {
      await request.put("/auth/updatepassword", newPassword);
      setShowForm(false);
      message.success("Password changed successfully");
    } catch (err) {
      message.error(err);
    }
    console.log(newPassword);
  };

  return (
    <Spin spinning={isFetching}>
      <section className="register">
        <div className="container">
          <Form
            form={form}
            className="register-form"
            name="register"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            onFinish={updateUser}
            autoComplete="off"
          >
            <Form.Item>
              <h2 className="register__title">Account Information</h2>
            </Form.Item>
            <Form.Item
            className="username"
                  name="username"
                >
                  <Input />
                </Form.Item>
            <div className="account-info">
              <div className="upload-image-container">
                <Image
                  className="account-image"
                  style={{
                    width: "100%",
                  }}
                  src={
                    user?.photo
                      ? getUserImage(user.photo)
                      : "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                  }
                />
                <input
                  className="upload-btn register-input"
                  type="file"
                  onChange={uploadImage}
                />
              </div>
              <div>
                <Form.Item
                  label="First name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your firstname!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your lastname!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                
                <Flex align="center" justify="space-between" gap={30}>
                  <Form.Item
                    label="Phone number"
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your address!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email address!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Flex>

                <Form.Item
                  className="btn-container"
                  wrapperCol={{
                    offset: 0,
                    span: 24,
                  }}
                >
                  <button className="submit-btn" type="submit">
                    Update
                  </button>
                </Form.Item>
              </div>
            </div>

          </Form>
          {showForm ? (
            <form
              name="password"
              className="reset-password"
              style={{
                paddingTop: "30px",
              }}
              onSubmit={changePassword}
              autoComplete="off"
            >
               <h2 className="register__title">Changed Password</h2>

              <div className="password-input">
                <label htmlFor="currentPassword">Password</label>
                <input
                  name="currentPassword"
                  id="currentPassword"
                  required
                  type="password"
                />
              </div>
              <div className="password-input">
                <label htmlFor="newPassword">New password</label>
                <input
                  name="newPassword"
                  id="newPassword"
                  required
                  type="password"
                />
              </div>

              <button className="submit-btn" type="submit">
                Update Password
              </button>
            </form>
          ) : null}
        </div>
      </section>
    </Spin>
  );
};

export default AccountPage;
