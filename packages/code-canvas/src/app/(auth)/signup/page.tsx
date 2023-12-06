import SignupForm from "./_components/signup-form";
import StaticUiAside from "./_components/static-ui-aside";


export default function SignUpPage() {
  return (
    <div className="flex flex-col w-full h-full lg:flex-row overflow-hidden">
      <SignupForm />
      <StaticUiAside/>
    </div>
  )
}
