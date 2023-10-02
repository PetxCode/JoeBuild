import { useState } from "react";
import useMainState from "../global/jotai";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const StepOne = () => {
  const navigate = useNavigate();
  const [anyThing, setAnything] = useMainState();

  //   const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<any>({});
  const [imageView, setImageView] = useState<string>("");

  const imageViewDetail = (e: any) => {
    const file = e.target.files[0];
    console.log("reading: ", e.target);

    const view = URL.createObjectURL(file);
    setImageView(view);
    setImage(file);
  };

  const schema = yup.object({
    title: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = handleSubmit((data: any) => {
    const { title } = data;
    setAnything({ title, image });
    navigate("/step-two");
  });

  //   console.log("viewing: ", image.file);

  return (
    <center>
      <div>Step One</div>

      <br />
      <br />

      <form onSubmit={onSubmitData}>
        <div>
          <img
            className="w-[300px] h-[400px] border rounded overflow-hidden object-cover "
            src={imageView}
          />
          <br />
          <label
            htmlFor="start"
            className="bg-red-500 text-white px-4 py-2 my-8 hover:cursor-pointer hover:scale-[1.08]"
          >
            upload Title
          </label>

          <input
            id="start"
            type="file"
            onChange={imageViewDetail}
            className="w-[300px] h-[40px] border rounded pl-2 outline-none hidden"
          />
        </div>
        <br />
        <div>
          <div className="text-red-500">Title</div>
          <input
            placeholder="Title"
            // value={title}
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}

            {...register("title")}
            className="w-[300px] h-[40px] border rounded pl-2 outline-none "
          />
        </div>

        {/* <Link to="/"> */}
        <button
          type="submit"
          className="w-[300px] h-[40px] mt-[30px] text-white bg-purple-500 rounded "
          // onClick={() => {
          //   console.log("Title: ", title);
          //   console.log("Image: ", image);
          //   setAnything({ title, image });
          // }}
        >
          Next
        </button>
        {/* </Link> */}
      </form>
    </center>
  );
};

export default StepOne;
