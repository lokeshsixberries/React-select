import "./styles.css";
import Select from "react-select";
export default function App() {
  const Styles = {
    option: (provided, state) => ({
      ...provided,
      color: "indigo",
      backgroundColor: "yellow",
      fontSize: "25px",
      textShadow: "1px 1px 3px gray"
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "green",
      color: "white",
      boxShadow: "1px 1px 4px gray"
    }),
    singleValue: (provided, state) => ({
      ...provided,
      backgroundColor: "red"
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "red"
    }),
    multiValue: (provided, state) => ({
      ...provided,
      color: "white",
      backgroundColor: "blue",
      height: "25px",
      width: "70px",
      fontSize: "20px"
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: "yellow",
      fontWeight: 900
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: "black",
      paddingLeft: "16px",
      ":hover": {
        color: "yellow"
      }
    })
  };
  const options = [
    {
      label: "One",
      value: "1"
    },
    {
      label: "two",
      value: "2"
    },
    {
      label: "three",
      value: "3"
    },
    {
      label: "four",
      value: "4"
    },
    {
      label: "five",
      value: "5"
    },
    {
      label: "six",
      value: "6"
    },
    {
      label: "seven",
      value: "7"
    }
  ];
  return (
    <Select
      isMulti={true}
      styles={Styles}
      options={options}
      isClearable
      isLoading
    />
  );
}
