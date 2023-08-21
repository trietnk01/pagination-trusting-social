import "./styles.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import React from "react";
interface IFormInput {
  total_item_selected: number;
}
interface IData {
  country: string;
  city: string;
}
const data: IData[] = [
  { country: "Viet Nam 1", city: "Ho Chi Minh 1" },
  { country: "Viet Nam 2", city: "Ho Chi Minh 2" },
  { country: "Viet Nam 3", city: "Ho Chi Minh 3" },
  { country: "Viet Nam 4", city: "Ho Chi Minh 4" },
  { country: "Viet Nam 5", city: "Ho Chi Minh 5" },
  { country: "Viet Nam 6", city: "Ho Chi Minh 6" },
  { country: "Viet Nam 7", city: "Ho Chi Minh 7" },
  { country: "Viet Nam 8", city: "Ho Chi Minh 8" },
  { country: "Viet Nam 9", city: "Ho Chi Minh 9" },
  { country: "Viet Nam 10", city: "Ho Chi Minh 10" },
  { country: "Viet Nam 11", city: "Ho Chi Minh 11" },
  { country: "Viet Nam 12", city: "Ho Chi Minh 12" },
  { country: "Viet Nam 13", city: "Ho Chi Minh 13" },
  { country: "Viet Nam 14", city: "Ho Chi Minh 14" },
  { country: "Viet Nam 15", city: "Ho Chi Minh 15" },
  { country: "Viet Nam 16", city: "Ho Chi Minh 16" },
  { country: "Viet Nam 17", city: "Ho Chi Minh 17" },
  { country: "Viet Nam 18", city: "Ho Chi Minh 18" },
  { country: "Viet Nam 19", city: "Ho Chi Minh 19" },
  { country: "Viet Nam 20", city: "Ho Chi Minh 20" },
  { country: "Viet Nam 21", city: "Ho Chi Minh 21" },
  { country: "Viet Nam 22", city: "Ho Chi Minh 22" },
  { country: "Viet Nam 23", city: "Ho Chi Minh 23" },
  { country: "Viet Nam 24", city: "Ho Chi Minh 24" },
  { country: "Viet Nam 25", city: "Ho Chi Minh 25" },
  { country: "Viet Nam 26", city: "Ho Chi Minh 26" },
  { country: "Viet Nam 27", city: "Ho Chi Minh 27" },
  { country: "Viet Nam 28", city: "Ho Chi Minh 28" },
  { country: "Viet Nam 29", city: "Ho Chi Minh 29" },
  { country: "Viet Nam 30", city: "Ho Chi Minh 30" },
  { country: "Viet Nam 31", city: "Ho Chi Minh 31" },
  { country: "Viet Nam 32", city: "Ho Chi Minh 32" },
  { country: "Viet Nam 33", city: "Ho Chi Minh 33" },
  { country: "Viet Nam 34", city: "Ho Chi Minh 34" },
  { country: "Viet Nam 35", city: "Ho Chi Minh 35" },
  { country: "Viet Nam 36", city: "Ho Chi Minh 36" },
  { country: "Viet Nam 37", city: "Ho Chi Minh 37" },
  { country: "Viet Nam 38", city: "Ho Chi Minh 38" },
  { country: "Viet Nam 39", city: "Ho Chi Minh 39" },
  { country: "Viet Nam 40", city: "Ho Chi Minh 40" }
];
export default function App() {
  const buttonItems: number[] = [5, 10, 15];
  const [list, setList] = React.useState<IData[]>(data);
  const [page, setPage] = React.useState<number>(1);
  const { handleSubmit, control, getValues, setValue } = useForm<IFormInput>({
    defaultValues: {
      total_item_selected: 5
    }
  });
  const onSubmit: SubmitHandler<IFormInput> = async (dataForm) => {};
  const loadList = (totalItem: number, page: number) => {
    let offset: number = (page - 1) * totalItem;
    let nextState: IData[] = [...data];
    nextState = nextState.splice(offset, totalItem);
    setList(nextState);
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const totalItem: number = e?.target?.value ? parseInt(e.target.value) : 5;
    setValue("total_item_selected", totalItem);
    loadList(totalItem, page);
  };
  const handleClick = (val: number) => () => {
    loadList(getValues("total_item_selected"), val);
    setPage(val);
  };
  React.useEffect(() => {
    loadList(5, 1);
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="wrapper">
        <Controller
          name="total_item_selected"
          control={control}
          render={({ field }) => {
            return (
              <select {...field} onChange={handleChange} className="selectbox">
                {buttonItems.length > 0 &&
                  buttonItems.map((elmt, idx) => {
                    return <option key={`elmt-${idx}`}>{elmt}</option>;
                  })}
              </select>
            );
          }}
        />
        <div className="pagination">
          <button className="box-item" type="button" onClick={handleClick(1)}>
            1
          </button>
          <button className="box-item" type="button" onClick={handleClick(2)}>
            2
          </button>
          <button className="box-item" type="button" onClick={handleClick(3)}>
            3
          </button>
          <button className="box-item" type="button" onClick={handleClick(4)}>
            4
          </button>
        </div>
        <table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <td style={{ width: "200px" }}>Country</td>
              <td style={{ width: "200px" }}>City</td>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 &&
              list.map((item: IData, idx: number) => {
                return (
                  <tr key={`item-${idx}`}>
                    <td>{item.country}</td>
                    <td>{item.city}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </form>
  );
}
