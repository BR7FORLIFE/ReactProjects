function Header() {
  return (
    <header className="w-full h-16 flex justify-between items-center px-2">
      <div className="w-auto h-full ml-5 inline-flex flex-row gap-5 items-center justify-center">
        <img
          className="size-5 object-cover mb-1.5"
          src="src/assets/menu_logo.png"
          alt="menu logo"
        />
        <div className="flex flex-row">
          <img src="src/assets/google_logo.svg" alt="google logo" />
          <span className="text-xl text-black/70 font-sans mb-1.5">
            Traductor
          </span>
        </div>
      </div>
      <div className="w-auto h-full mr-5 flex flex-row justify-center items-center gap-5">
        <img
          className="size-7 opacity-75"
          src="src/assets/setting.png"
          alt="setting icon image"
        />
        <img
          className="size-6 object-cover"
          src="src/assets/dots-menu.png"
          alt="menu dots icons"
        />
        <div className="size-10 rounded-full bg-blue-300 inline-flex items-center justify-center">
          <span className="text-lg text-white">B</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
