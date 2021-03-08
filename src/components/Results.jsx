import React, { useEffect, useState } from "react";
import instance from "../firebase/Instance";
import ResultsAdd from "./ResultsAdd";
import ResultsList from "./ResultsList";
import { trackPromise } from "react-promise-tracker";
import { toast, Flip } from "react-toastify";

const Results = () => {
  const [data, setData] = useState({
    name: "",
    unit: "",
    grade: "",
  });

  const [results, setResults] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    trackPromise(getResultsData());
  }, []);

  const getResultsData = () => {
    return instance.get("/results.json").then((response) => {
      const fetchedData = [];
      for (let key in response.data) {
        fetchedData.push({ ...response.data[key], id: key });
      }
      setResults(fetchedData);
      setData({
        name: "",
        unit: "",
        grade: "",
      });
    });
  };

  const handleChange = (event) => {
    setData({ ...data, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handlePost = (event) => {
    event.preventDefault();

    const newData = {
      name: data.name,
      unit: data.unit,
      grade: data.grade,
    };

    trackPromise(
      instance.post("/results.json", newData).then((response) => {
        trackPromise(getResultsData());
        setData({
          name: "",
          unit: "",
          grade: "",
        });

        customToast("success", "You added a new entry...");
      })
    );
  };

  const handleRemove = (id) => {
    trackPromise(
      instance.delete(`/results/${id}.json`).then((response) => {
        trackPromise(getResultsData());

        customToast("error", "Entry removed ...");
      })
    );
  };

  const handleModalOpen = (id) => {
    if (!modalIsOpen) {
      const result = results.find((result) => result.id === id);
      setData(result);
    } else {
      setData({
        name: "",
        unit: "",
        grade: "",
      });
    }

    setModalIsOpen(!modalIsOpen);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    const newData = {
      name: data.name,
      unit: data.unit,
      grade: data.grade,
    };

    trackPromise(
      instance.put(`/results/${data.id}.json`, newData).then((response) => {
        getResultsData();
        setModalIsOpen(false);
        customToast("info", "Entry Updated...");
      })
    );
  };

  return (
    <div className="container">
      <ResultsAdd
        name={data.name}
        unit={data.unit}
        grade={data.grade}
        handleChange={handleChange}
        handlePost={handlePost}
      />
      <ResultsList
        results={results}
        handleRemove={handleRemove}
        modalIsOpen={modalIsOpen}
        handleModalOpen={handleModalOpen}
        handleUpdate={handleUpdate}
        handleChange={handleChange}
        name={data.name}
        unit={data.unit}
        grade={data.grade}
      />
    </div>
  );
};

const customToast = (type, message) => {
  const options = {
    closeOnClick: true,
    pauseOnHover: false,
    autoClose: 3000,
    transition: Flip
  };
  switch (type) {
    case "info":
      toast.info(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "success":
      toast.success(message, options);
      break;

    default:
      break;
  }
};

export default Results;
