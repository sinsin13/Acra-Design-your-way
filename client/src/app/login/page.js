import loginBg from "./login-bg.png";
import acraLogo from "./acra-logo.png";


function Login() {
    return (
      <div className="min-h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${loginBg.src})`,
            filter: "blur(1.5px)",
        }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
          }}
        />
        <div className="absolute top-2 left-2 z-10">
          <img src={acraLogo.src} alt="Acra logo" className="h-8 w-auto" />
        </div>
      </div>
    );
  }
  
  export default Login;