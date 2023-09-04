import { useState } from "react"

const initialState = {
    username: "",
    password:""
}
const LoginPage = () => {

    const [user, setuser] = useState(initialState);
    const handleChange = (e) => {
        setuser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //get values from the form
        const formData = new FormData(e.target);
        //console.log(Object.values(formData));
    }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
                          border: "1px solid gray",
              padding:"2rem"
            }}
          >
            <div>
              <input
                type="text"
                name="username"
                style={{
                  height: "1.5rem",
                }}
                placeholder="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                style={{
                  height: "1.5rem",
                }}
                placeholder="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <button style={{ width: "100%", cursor: "pointer" }}>
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginPage