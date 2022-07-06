import axios from "axios";
import React, { useRef, useState } from "react";
import Modal from "./Modal";

const CreateData = () => {
    const name = useRef()
    const temperature = useRef()
    const email = useRef()
    const phone = useRef()
    const [error, setError] = useState(null)
    let [isOpen, setOpen] = useState(false)
    const onSubmitHandler = (e) => {
        const data = {
            full_name: name.current.value,
            temperature: temperature.current.value,
            email: email.current.value,
            phone_number: phone.current.value
        }
        e.preventDefault()

        axios.post("https://mern-health-data.herokuapp.com/health/add", data)
            .then(res => window.location = "/")
            .catch(err => {
              console.log("Error :" + err)
              setError('Error:'+ err)
              openModal()
            })
    }
    function onCloseHandler () {
      setOpen(false)
    }
    function openModal(){
      setOpen(true)
    }
  return (
   <React.Fragment>
    <Modal title={'Error Message'} message={error} isOpen={isOpen} closeModal={onCloseHandler} button_text='Ok, I understand'/>
     <div className="full flex flex-col min-h-screen items-center justify-center">
      <div className="font-bold p-2">CreateData</div>
      <div className="w-full p-1 md:p-0 md:w-9/12 text-left">
        <form onSubmit={onSubmitHandler} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input ref={name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="name"
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
          <input ref={temperature}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="temperature"
            type="number"
            placeholder="Temperature"
          />
        </div>

        <div className="mb-4">
          <input
            ref={phone}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Phone"
            type="tel"
            placeholder="Phone"
          />
        </div>
        <div className="mb-4">
          <input
            ref={email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="w-full text-right">
            <button type="submit" className="bg-gray-900 text-white p-2 text-xs rounded">Submit</button>
        </div>
        </form>
      </div>
    </div>
   </React.Fragment>
  );
};

export default CreateData;
