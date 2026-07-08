import loginBg from "./login-bg.png";

function login(){
    return <div className="min-h-screen relative overflow-hidden">
        <div
        className="absolute -inset-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginBg.src})`,
          filter: "blur(1.5px)",
        }}
      />
    </div>
}


export default login;