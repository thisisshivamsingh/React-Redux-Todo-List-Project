import React, { useState } from "react";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addTextList,
  deleteTextList,
  removeAllList,
} from "../features/add/addSlice";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.add.list);
  const dispatch = useDispatch();
  const clearText = () => {
    dispatch(
      addTextList({
        id: new Date().getTime().toString(),
        data: inputData,
      })
    );
    setInputData("");
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption> Add Your List Here ✌ </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={() => clearText()}></i>
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem">
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTextList({ id: elem.id }))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(removeAllList())}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
