import loginBg from "./login-bg.png";
import acraLogo from "./acra-logo.png";
import LoginCard from "../../components/login/login-card";

function Login() {
    return (
      <div className="min-h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${loginBg.src})`,
            filter: "blur(0px)",
        }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
          }}
        />

        {/* logo */}
        <div className="absolute top-7 left-7 z-10">
          <img
            src={acraLogo.src}
            alt="Acra"
            className="h-18 w-auto"
            style={{
              filter: "brightness(1.5) drop-shadow(0 4px 6px rgba(0,0,0,0.9))",
            }}
          />
        </div>


        {/* login card */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
        <LoginCard />
        </div>


      </div>
    );
  }
  
  export default Login;