import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { InterestingToYear } from "./pages/InterestingTo2024/InterestingToYear";
import { CircleIcon } from "./_shared/СircleIcon/CircleIcon";
import { Form } from "./pages/Review/Form/Form";
import { Response } from "./pages/Review/Response/Response";
import { paths } from "./helpers/path";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    area: "",
  });
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <div className="main">
      <div className="relative">
        <div className="content">
          <Routes>
            <Route path={paths.HOME} element={<Home />} />
            <Route
              path={paths.INTERESTING}
              element={<InterestingToYear onClick={onClickBack} />}
            />
            <Route
              path={paths.REVIEW}
              element={
                <Form
                  setFormData={setFormData}
                  onClickBack={onClickBack}
                  data={formData}
                />
              }
            />
            <Route
              path={paths.RESPONSE}
              element={<Response data={formData} onClickBack={onClickBack} />}
            />
          </Routes>
        </div>
        <div className="balls">
          <div>
            <div className="pink">
              <CircleIcon color="#e4c1ff" />
            </div>
            <div className="w-96 blue">
              <CircleIcon color="#7ce7ff" />
            </div>
          </div>
          <div className="w-64 mt-[115px] green">
            <CircleIcon color="#65ffc8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
