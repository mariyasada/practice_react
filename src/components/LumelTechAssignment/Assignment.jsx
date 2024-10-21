import React, { useEffect, useState } from "react";
import tableData from "../../Constant.json";
import style from "../../styles/Assignment.module.css";
import { useMessage } from "../../context/MessageContext";

const Assignment = () => {
  const { data, setData } = useMessage();
  return (
    <div style={{ margin: "auto" }}>
      <table>
        <tr style={{ display: "flex", gap: "2rem", border: "1px solid black" }}>
          {[
            "Label",
            "Value",
            "Input",
            "Allocation (%)",
            "Allocation Val",
            "Variance (%)",
          ].map((name) => (
            <th
              style={{
                width: "fit-content",
                borderRight: "1px solid black",
                paddingRight: "10px",
              }}
            >
              {name}
            </th>
          ))}
        </tr>
        {data?.map((category) => (
          <TableRow category={category} key={category.id} />
        ))}
      </table>
    </div>
  );
};

export default Assignment;

export const TableRow = ({ category }) => {
  const [inputValue, setInputValue] = useState("s");
  const { data, setData } = useMessage();

  // useEffect(() => {
  //   if (category.children?.length > 0) {
  //     const newData = data?.map((parentCategory) =>
  //       parentCategory.id === category.id
  //         ? { ...parentCategory, value: calculateNewValue(parentCategory) }
  //         : parentCategory
  //     );
  //     setData(newData);
  //   }
  // }, []);

  const calculateNewValue = (category) => {
    if (category.children?.length > 0) {
      return category.children.reduce((acc, curr) => acc + curr.value, 0);
    }
  };
  const percentageClickHandler = (category) => {
    const percentageValue = category.value / inputValue;
    const newData = data?.map((categoryData) => {
      const maincategory = categoryData.id === category.id;
      if (maincategory) {
        return { ...categoryData };
      } else {
        const categoryExists = categoryData?.children?.some(
          (child) => child.id === category.id
        );
        const updatedCategoryExists = categoryExists
          ? {
              ...categoryData,
              variance: (
                (percentageValue / calculateNewValue(categoryData)) *
                100
              ).toFixed(2),
            }
          : categoryData;
        return {
          ...updatedCategoryExists,
          children: categoryData?.children?.map((child) =>
            child.id === category.id
              ? {
                  ...child,
                  value: child.value + percentageValue,
                  variance: inputValue,
                }
              : child
          ),
        };
      }
    });
    setData(newData);
    setInputValue("");
  };

  const valueClickHandler = (category) => {
    const newData = data?.map((categoryData) => {
      const isMainCategory = categoryData.id === category.id;
      if (isMainCategory) {
        return {
          ...categoryData,
          value: Number(inputValue),
          variance:
            ((Number(inputValue) - calculateNewValue(categoryData)) /
              calculateNewValue(categoryData)) *
            100,
        };
      } else {
        return {
          ...categoryData,
          value: calculateNewValue(categoryData),
          children: categoryData?.children?.map((child) =>
            child.id === category.id
              ? {
                  ...child,
                  value: Number(inputValue),
                  variance: (
                    ((inputValue - child.value) / child.value) *
                    100
                  ).toFixed(2),
                }
              : child
          ),
        };
      }
    });
    const updatedData = newData?.map((parentCategory) => {
      const isChildExists = parentCategory?.children.some(
        (child) => child.id === category.id
      );
      if (isChildExists) {
        return {
          ...parentCategory,
          value: calculateNewValue(parentCategory),
          variance: (
            ((calculateNewValue(parentCategory) - parentCategory.value) /
              parentCategory.value) *
            100
          ).toFixed(2),
        };
      }
      return parentCategory;
    });
    // console.log(newData, "check newdata");
    // console.log(updatedData, "check updateddata");
    setData(updatedData);
    setInputValue("");
  };
  return (
    <>
      <tr
        style={{
          display: "flex",
          gap: "2rem",
          borderBottom: "1px solid black",
        }}
      >
        <td>{category.label}</td>
        <td>
          {category.value === 0 ? calculateNewValue(category) : category.value}
        </td>
        <td>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
          />
        </td>
        <td>
          <button onClick={() => percentageClickHandler(category)}>
            % btn
          </button>
        </td>
        <td>
          <button onClick={() => valueClickHandler(category)}>val btn</button>
        </td>
        <td>{category.variance} %</td>
      </tr>
      {category?.children?.length > 0 &&
        category?.children?.map((children) => (
          <TableRow category={children} key={children.id} />
        ))}
    </>
  );
};
