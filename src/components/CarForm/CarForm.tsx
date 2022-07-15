import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { chooseMake, chooseModel, chooseSale_price, chooseColor, chooseYear, chooseNew_used } from "../redux/slices/RootSlice";
import { Input } from "../SharedComponents/Input";
import { Button } from "@material-ui/core";
import { server_calls } from "../../api";
import { useGetData } from "../../custom-hooks/FetchData";


interface CarFormProps {
  id?: string;
  data?: {};
}

interface CarState {
  make: string;
  model: string;
  sale_price: string;
  color: string;
  year: string;
  new_used: string;
}

export const CarForm = (props: CarFormProps) => {
  const dispatch = useDispatch();
  let { carData, getData } = useGetData();
  const store = useStore();
  const name = useSelector<CarState>(state => state.make);
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data: any, event: any) => {
    console.log(props.id)
    if (props.id!) {
      server_calls.update(props.id!, data);
      console.log(`Updated:${data} ${props.id}`);
      console.log(data);
      setTimeout(() => {window.location.reload();}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.Model));
      dispatch(chooseSale_price(data.sale_price));
      dispatch(chooseColor(data.color));
      dispatch(chooseYear(data.year));
      dispatch(chooseNew_used(data.new_used));
      server_calls.create(store.getState());
      setTimeout(() => {window.location.reload();}, 1000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <label htmlFor="make">Make</label>
          <Input {...register("make")} name="make" placeholder="Make" />
        </div>
      <div>
          <label htmlFor="model">Model</label>
          <Input {...register("model")} name="model" placeholder="Model" />
        </div>
        <div>
          <label htmlFor="sale_price">Sale_price</label>
          <Input {...register("sale_price")} name="sale_price" placeholder="Sale_price" />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <Input {...register("color")} name="color" placeholder="Color" />
        </div>
        <div>
          <label htmlFor="year">Vehicle Year</label>
          <Input {...register("year")} name="year" placeholder="Year" />
        </div>
        <div>
        <label htmlFor="new_used">New_used</label>
        <Input {...register("new_used")} name="new_used" placeholder="New_used" />
        </div><Button type="submit">Submit</Button>
    </form>
  </div>
  );
};