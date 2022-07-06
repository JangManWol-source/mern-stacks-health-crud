import axios from "axios";
import React, { Component } from "react";

export class UpdateData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    axios
      .get("https://mern-health-data.herokuapp.com/health/" + id)
      .then((res) => {
        console.log(res.data);
        this.setState({
          full_name: res.data.full_name,
          temperature: res.data.temperature,
          email: res.data.email,
          phone_number: res.data.phone_number,
        });
      })
      .catch((err) => console.log(err));
    console.log(this.state);
  }

  onChange(e) {
    this.setState({
      [e.target.dataset.name]: e.target.value,
    });
    console.log(e);
  }
  onSubmit(e) {
    e.preventDefault();
    const newData = {
      full_name: this.state.full_name,
      temperature: this.state.temperature,
      email: this.state.email,
      phone_number: this.state.phone_number,
    };
    console.log(newData);

    axios
    .post(
      "https://mern-health-data.herokuapp.com/health/update/" + this.props.match.params.id,
      newData
    )
    .then((res) => {
      window.location = ("/");
    })
    .catch((err) => console.log(err));
  }
  render() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-center flex-col items-center">
            <div className="font-bold p-2">Update Data</div>
            <div className="w-full md:p-0 md:w-9/12 text-left">
              <form
                onSubmit={this.onSubmit}
                className="bg-white rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <input
                    onChange={this.onChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="name"
                    data-name="full_name"
                    defaultValue={this.state.full_name}
                    placeholder="Username"
                  />
                </div>

                <div className="mb-4">
                  <input
                    onChange={this.onChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="temperature"
                    type="number"
                    defaultValue={this.state.temperature}
                    data-name="temperature"
                    placeholder="Temperature"
                  />
                </div>

                <div className="mb-4">
                  <input
                    onChange={this.onChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Phone"
                    data-name="phone_number"
                    defaultValue={this.state.phone_number}
                    type="tel"
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-4">
                  <input
                    onChange={this.onChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    data-name="email"
                    type="email"
                    defaultValue={this.state.email}
                    placeholder="Email"
                  />
                </div>
                <div className="w-full text-right">
                  <button
                    type="submit"
                    className="bg-gray-900 text-white p-2 text-xs rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default UpdateData;
