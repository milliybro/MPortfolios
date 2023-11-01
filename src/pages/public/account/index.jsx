import { Flex, Form, Image, Input, Spin, message, Tabs, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./style.scss";

import Cookies from "js-cookie";
import { TOKEN, USER } from "../../../constants";
import { request } from "../../../server";
import { getUserImage } from "../../../utils/getImage";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useUploadAccountPhotoMutation,
} from "../../../server/query/auth";

const onChange = (key) => {
  console.log(key);
};
const getBase64 = (img, callback) => {
   const reader = new FileReader();
   reader.addEventListener('load', () => callback(reader.result));
   reader.readAsDataURL(img);
 };
 const beforeUpload = (file) => {
   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
   if (!isJpgOrPng) {
     message.error('You can only upload JPG/PNG file!');
   }
   const isLt2M = file.size / 1024 / 1024 < 2;
   if (!isLt2M) {
     message.error('Image must smaller than 2MB!');
   }
   return isJpgOrPng && isLt2M;
 };
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
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
   <div>
     {loading ? <LoadingOutlined /> : <PlusOutlined />}
     <div
       style={{
         marginTop: 8,
       }}
     >
       Upload
     </div>
   </div>
 );
  const items = [
    {
      key: "1",
      label: "Account",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Edit Information",
      children: (
        <Fragment>
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
            <Form.Item label="Username" className="username" name="username">
              <Input />
            </Form.Item>
            <div className="account-info">
              <div className="upload-image-container">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                      className="account-image"
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
                
                {/* <input
                  className="upload-btn register-input"
                  type="file"
                  onChange={uploadImage}
                /> */}
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
        </Fragment>
      ),
    },
    {
      key: "3",
      label: "Edit Password",
      children: (
        <Fragment>
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
        </Fragment>
      ),
    },
  ];

  return (
    <Spin spinning={isFetching}>
      <section className="register">
        <div className="container">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </section>
    </Spin>
  );
};

export default AccountPage;
