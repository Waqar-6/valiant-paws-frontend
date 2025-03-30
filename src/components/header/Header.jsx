const Header = () => {
  return (
    <header className="container shadow-lg h-20 p-10">
      <nav className="flex justify-between items-center w-full h-full">
        <h3 className="">Logo</h3>

        <ul className="flex items-center space-x-20">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Litters</li>
          <li className="cursor-pointer">Dogs</li>
          <li className="cursor-pointer">Events</li>
        </ul>

        <div className="">
          <button>Profile</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
