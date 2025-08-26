import React, { useState } from "react";     
const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!false);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <header className="absolute top-0 w-full z-100">
            <div className="flex justify-between items-center max-w-[90%] border mx-auto">
                <a href="#">
                    <img
                        src="https://readymadeui.com/readymadeui.svg"
                        alt="logo"
                        className="w-50 aspect-[1/0.4] border"
                    />
                </a>

                <div>
                    <ul
                        className={` ${open
                                ? "left-0 top-0 text-white"
                                : "-top-[1000%] left-[100%] text-black"
                            } absolute w-full h-screen lg:h-auto bg-black/80 lg:bg-white  flex flex-col items-center justify-center  lg:flex-row lg:static  gap-4 transition-all duration-300 ease-in-out backdrop-blur-xs`}>
                        <li>Home</li>
                        <li>about</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className="space-x-6">
                    <button>Log in</button>
                    <button>Sign in</button>
                </div>
                {(open && (
                    <button
                        id="toggleClass"
                        className="z-50"
                        onClick={handleClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3.5 h-3.5 fill-white"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>
                )) || (
                        <button
                            id="toggleOpen"
                            onClick={() => handleOpen()}
                            class="lg:hidden cursor-pointer">
                            <svg
                                class="w-7 h-7"
                                fill="#000"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    )}
            </div>
        </header>
    );
};

export default Header; 