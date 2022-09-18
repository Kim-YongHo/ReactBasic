import LoginButton from "../components/LoginButtion";

export default function Login(props) {
    return (
        <div>
            <h2>Login 페이지</h2>
            <LoginButton {...props} />
        </div>
    );
}