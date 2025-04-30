import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, Uname] = useState("");
  const [passWord, Upwd] = useState("");
  const [log, Ulog] = useState(false);
  const navigate = useNavigate();
  const ApiUrl = "https://apis.ccbp.in/login";

  const update = async () => {
    Ulog((log) => !log);
    console.log(log);

    const credentials = { username: userName, password: passWord };
    const options = {
      method: "POST",
      body: JSON.stringify(credentials),
    };
    try {
      const response = await fetch(ApiUrl, options);
      const data = await response.json();
      if (response.ok === true) {
        navigate("/about");
        console.log(data);
        Cookies.set("jwt_token", data.jwt_token, { expires: 30 });
      } else {
        alert("login failed");
      }
    } catch (error) {
      console.error("login failed", error);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(event) => Uname(event.target.value)}
      />
      <input
        type="text"
        value={passWord}
        onChange={(event) => Upwd(event.target.value)}
      />
      <button onClick={update}>Login</button>
    </div>
  );
};

export default Login;
