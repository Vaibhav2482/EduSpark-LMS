import { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isLogin) {
      console.log("Login Data:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      console.log("Signup Data:", formData);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" style={styles.button}>
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p style={styles.text}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            style={styles.link}
          >
            {isLogin ? " Signup" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );

}

const styles = {
  page: {
    minHeight: "88vh",
    background: "linear-gradient(135deg, #eef2f7, #dce3ea)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: "380px",
    padding: "28px",
    backgroundColor: "#f8fafc",
    borderRadius: "14px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    color: "#0f172a",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "600",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontSize: "14px",
  },

  passwordBox: {
    position: "relative",
  },

  eye: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    fontSize: "16px",
  },

  button: {
    padding: "12px",
    marginTop: "8px",
    background: "linear-gradient(135deg, #6b7280, #4b5563)",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  text: {
    marginTop: "16px",
    fontSize: "14px",
    textAlign: "center",
    color: "#475569",
  },

  link: {
    marginLeft: "5px",
    fontWeight: "600",
    cursor: "pointer",
  },
};


export default Login;
