import UserDropdown from "./user-dropdown";


export default function Navbar() {
  return (
    <nav className="lg:pl-[250px] sticky bg-background top-0 left-0 w-full shadow-md">
        <div className="container py-2 flex">
            <UserDropdown/>
        </div>
    </nav>
  )
}
