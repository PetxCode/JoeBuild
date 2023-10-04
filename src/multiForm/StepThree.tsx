import useMainState from "../global/jotai";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createBeg } from "../api/begAPI";

const StepTwo = () => {
  const [anyThing, setAnything]: any = useMainState();
  const formData = new FormData();
  const schema = yup.object({
    amount: yup.number().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = handleSubmit((data: any) => {
    const { amount } = data;
    setAnything({
      title: anyThing?.title,
      image: anyThing?.image,
      description: anyThing?.description,
      motivation: anyThing?.motivation,
      amountNeeded: amount,
    });

    formData.append("amountNeeded", amount);
    formData.append("title", anyThing.title);
    formData.append("image", anyThing.image);
    formData.append("motivation", anyThing.motivation);
    formData.append("detailDescription", anyThing.description);

    createBeg(formData).then((res) => {
      // setAnything(null);
      console.log("viewing: ", res);
    });

    console.log(typeof amount);
    console.log(amount);
  });

  console.log(anyThing);
  return (
    <center>
      <div>Step Three</div>

      <br />
      <br />

      <form onSubmit={onSubmitData}>
        <br />

        <br />
        <div>
          <div className="text-red-500">Amount</div>
          <input
            placeholder="Amount"
            {...register("amount")}
            className="w-[300px] h-[40px] border rounded pl-2 outline-none "
          />
        </div>

        <button
          className="w-[300px] h-[40px] mt-[30px] text-white bg-purple-500 rounded "
          type="submit"
        >
          Submit
        </button>

        <button
          className="w-[300px] h-[40px] mt-[30px] text-white bg-red-500 rounded "
          onClick={() => {
            setAnything(null);
          }}
        >
          Empty
        </button>
      </form>
    </center>
  );
};

export default StepTwo;
