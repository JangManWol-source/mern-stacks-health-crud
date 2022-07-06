import React, { useEffect, useState } from "react";
import axios from "axios";
import HealthRecords from "./HealthRecords";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../features/toggle/toggle";
const Table = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://mern-health-data.herokuapp.com/health/")
      .then((response) => {
        setData(response.data);
        dispatch(toggleLoading());
        if (response.data.length === 0) {
          setError("No Data Available");
          dispatch(toggleLoading());
        }
      })
      .catch((error) => setError(error.message));
  }, [dispatch]);
  const deleteHandler = (id) => {
    axios
      .delete("https://mern-health-data.herokuapp.com/health/" + id)
      .then((response) => {
        setData(data.filter((each) => each._id !== id));
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="flex min flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Temperature
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length !== 0 && (
                  <HealthRecords deleteHandler={deleteHandler} data={data} />
                )}
              </tbody>
            </table>
          </div>
        </div>

        {data.length === 0 && (
          <div className="text-black w-full text-center text-xs">
            <div>{error}</div>
            <div>
              <Link to={"/add/"}>
                <button className="bg-gray-900 text-white text-xs p-1 m-2 rounded-sm">
                  ADD NEW DATA
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
