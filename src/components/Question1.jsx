import React, { useState } from "react";

const Question1 = () => {
  const [components, setComponents] = useState([]);

  const addComponent = (type) => {
    setComponents((prevComponents) => [
      ...prevComponents,
      { id: prevComponents.length, type },
    ]);
  };

  const mapComponent = (component) => {
    switch (component.type) {
      case "text":
        return <input type="text" key={component.id} />;
      case "checkbox":
        return <input type="checkbox" key={component.id} />;
      case "radio":
        return <input type="radio" key={component.id} />;
      case "range":
        return <input type="range" key={component.id} />;
      case "number":
        return <input type="number" key={component.id} />;
      case "date":
        return <input type="date" key={component.id} />;
      case "time":
        return <input type="time" key={component.id} />;
      case "file":
        return <input type="file" key={component.id} />;
      case "email":
        return <input type="email" key={component.id} />;
      case "password":
        return <input type="password" key={component.id} />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="grid lg:grid-cols-5 px-3  sm:px-10 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center items-center gap-5 py-10">
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("text")}
        >
          Add Text Input
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("checkbox")}
        >
          Add Checkbox
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("email")}
        >
          Add email
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("number")}
        >
          Add Number
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("range")}
        >
          Add Range
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("radio")}
        >
          Add Radio
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("date")}
        >
          Add Date
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("time")}
        >
          Add Time
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("file")}
        >
          Add file
        </button>
        <button
          className="bg-yellow-400 px-4 py-2 font-bold text-green-600 rounded-xl"
          onClick={() => addComponent("password")}
        >
          Add Password
        </button>
      </div>

      <div className="flex flex-col  justify-center items-center gap-5">
        {components.map((component) => mapComponent(component))}
      </div>
    </div>
  );
};

export default Question1;
