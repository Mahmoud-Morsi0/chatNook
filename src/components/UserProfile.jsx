/* eslint-disable react/prop-types */
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { useState, useEffect } from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { CiEdit } from "react-icons/ci";
import { useFormik } from "formik";
import axios from "axios";
import { updateUserSchema } from "../schema/updateUser";
export default function UserProfile({ className }) {
  let { userId, userEmail, userName, userToken, setUserEmail, setUserName } =
    useContext(userContext);
    console.log({userEmail,userName})
  //console.log(`user name ${userName}`);
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  function updateData(values) {
    console.log(userToken);
    console.log(values);
    const updatedData = {};
    if (values.email) {
      updatedData.email = values.email;
    }
    if (values.fullName) {
      updatedData.fullName = values.fullName;
    }
    axios
      .patch(`https://chatnook-backend.onrender.com/user/editprofile`, values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.email) {
          setUserEmail(res.data.email);
        }
        if (res.data.fullName) {
          setUserName(res.data.fullName);
        }
        document.getElementById("my_modal_6").checked = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
    },
    validationSchema: updateUserSchema,
    onSubmit: updateData,
  });
  return (
    <>
      {/* <div>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage} className="btn">
          Upload Img
        </button>
      </div> */}

      <div
        className={`p-3 border border-[#1e77872c] h-screen flex flex-col justify-between text-gray-600 ${className}`}
      >
        <div>
          <div className="flex flex-col items-center ">
            <div className="avatar online mt-8 mb-2">
              <div className="w-24 rounded-full">
                {imageList.map((url) => {
                  return <img src={url} />;
                })}
              </div>
            </div>
            <h1 className="font-semibold text-base capitalize my-2 text-gray-600">
              {userName}
            </h1>
          </div>
          <div className="flex justify-center">
            <div className=" h-0.5  hr w-80 my-4"></div>
          </div>
          <div className="my-8 flex justify-center text-start">
            <label htmlFor="my_modal_6" className="btn">
              {" "}
              Personal Data <CiEdit className=" text-green-900" />
            </label>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  do you want to update your personal data!
                </p>
                <div className="mb-6">
                  <div className="w-11/12">
                    <label className="input input-bordered flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                      </svg>
                      <input
                        type="text"
                        className=""
                        placeholder="Email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </label>
                    {formik.errors.email && formik.touched.email ? (
                      <span className=" text-red-600 text-start">
                        {formik.errors.email}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="w-11/12">
                    <label className="input input-bordered flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                      </svg>

                      <input
                        type="text"
                        className=""
                        placeholder="fullName"
                        id="fullName"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                      />
                    </label>
                    {formik.errors.fullName && formik.touched.fullName ? (
                      <span className=" text-red-600 text-start">
                        {formik.errors.fullName}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="modal-action">
                  <label
                    htmlFor="my_modal_6"
                    className=" bg-green-600 text-white btn"
                    onClick={() => {
                      formik.handleSubmit();
                      document.getElementById("my_modal_6").checked = false; // Close modal
                    }}
                  >
                    update
                  </label>
                  <label htmlFor="my-modal_6" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-6">
            <h1 className="text-slate-400 capitalize  text-base py-2">Name</h1>
            <p className="capitalize">{userName}</p>
            <h1 className="text-slate-400 capitalize  text-base py-2">Email</h1>
            <p className="capitalize">{userEmail}</p>
          </div>
        </div>
        <div className="w-9/12 mx-6 mb-8 flex justify-between align-middle">
          <p className="font-bold cursor-pointer" onClick={() => logOut()}>
            logout
          </p>
          <CiLogout className="text-xl" />
        </div>
      </div>
    </>
  );
}
