import LoginForm from "./_components/login-form";
import StaticUiAside from "./_components/static-ui-aside";



export default function LoginPage() {
  return (
    <div className="flex flex-col w-full h-full lg:flex-row overflow-hidden">
      <LoginForm />
      <StaticUiAside />
    </div>
  )
}
