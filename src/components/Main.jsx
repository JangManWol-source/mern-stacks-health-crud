import React from "react";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import Table from "./Table";

const Main = () => {
  const isLoading = useSelector((state)=> state.toggle.isLoading)
  return (
    <div className="w-full min-h-screen flex justify-center items-start">
      {isLoading && <Spinner />}
      <div className="md:w-9/12 w-full text-left">
        <Table />
        <div className="text-xs">Note: Large scale of data cause the table to be scrollable. Rotate or set to landscape to view all info.</div>
      </div>
    </div>
  );
};

export default Main;
