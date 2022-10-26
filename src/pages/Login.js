export default function Login() {
    return (
        <form action="http://localhost:3000/" method="post" className="login">
            <div className="logocontainer">
                <img
                src="./Swift Login Page_files/logo 512 256.svg"
                alt="Logo Swift e-learning"
                className="logoImage"
                />
            </div>
            <div className="loginformcontainer">
                <label htmlFor="emailLogin" className="loginGuide">
                Email
                </label>
                <input type="email" id="emailLogin" name="emailLogin" required="" />
                <label htmlFor="pwLogin" className="loginGuide">
                Password
                </label>
                <input type="password" id="pwLogin" name="pwLogin" required="" />
                <a href="http://localhost:3000/lupapassword" className="forgetpw">
                Lupa password?
                </a>
            </div>
            <div className="loginformcontainer">
                <button type="submit" className="loginbutton">
                Log In{" "}
                </button>
                <div className="newstudent">
                <label>siswa baru? </label>
                <a href="http://localhost:3000/register">Daftar Sekarang!</a>
                </div>
            </div>
        </form>
    )
}