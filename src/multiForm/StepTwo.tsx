import useMainState from "../global/jotai";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const StepTwo = () => {
  const navigate = useNavigate();
  const [newState, setNewState]: any = useMainState();

  const schema = yup.object({
    motivation: yup.string().required(),
    description: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = handleSubmit((data: any) => {
    const { description, motivation } = data;
    setNewState({
      title: newState?.title,
      image: newState?.image,
      description,
      motivation,
    });

    navigate("/step-three");
  });

  return (
    <center>
      <div>Step Two</div>

      <br />
      <br />

      <form onSubmit={onSubmitData}>
        <br />
        <div>
          <div className="text-red-500">Motivation</div>
          <input
            placeholder="Motivation"
            {...register("motivation")}
            className="w-[300px] h-[40px] border rounded pl-2 outline-none "
          />
        </div>
        <br />

        <br />
        <div>
          <div className="text-red-500">Description</div>
          <input
            placeholder="Description"
            {...register("description")}
            className="w-[300px] h-[40px] border rounded pl-2 outline-none "
          />
        </div>

        <button
          type="submit"
          className="w-[300px] h-[40px] mt-[30px] text-white bg-purple-500 rounded "
        >
          Next
        </button>
      </form>
    </center>
  );
};

export default StepTwo;
