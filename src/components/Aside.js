import profileImg from "../assets/profile-img.jpg";

const Aside = () => {

  return (
    <aside className="pt-4 pb-10 px-6 flex flex-col gap-8 rounded-3xl bg-cyan-700 border border-solid border-black">

      <div className="info flex flex-col items-center gap-6">
        <figure className="w-40 h-40 border rounded-3xl border-none">
          <img alt="profile-img" src={profileImg} className="w-full h-full object-cover rounded-3xl" />
        </figure>

        <div className="name-and-button flex flex-col gap-2 w-full">
          <h1 className="name text-white font-semibold text-lg">Rachit Garg</h1>
          <button className="py-1 px-8 rounded-full text-white bg-cyan-900 text-sm">Hello, World!</button>
        </div>
      </div>

      <hr className="seperator border-b-1 border-solid border-black"></hr>

      <div className="more-info flex flex-col gap-8">

        <ul className="flex flex-col gap-10">

          <li className="flex items-center gap-4">
            <div className="icon-box w-20 h-12 rounded-xl flex items-center justify-center bg-gray-800">
              <svg className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <title>Hourglass</title>
                <path d="M415.7 427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52 279 320 270.61 320 256c0-14.41 8.49-22.64 26.16-38.44 25.93-23.17 61.44-54.91 69.56-132.84a47 47 0 00-12-36.26A50.3 50.3 0 00366.39 32H145.61a50.34 50.34 0 00-37.39 16.46 47.05 47.05 0 00-11.94 36.26c8.09 77.68 43.47 109.19 69.3 132.19C183.42 232.8 192 241.09 192 256c0 15.1-8.6 23.56-26.5 39.75-25.5 23.1-60.5 54.73-69.2 131.38a46.59 46.59 0 0011.7 36.2A50.44 50.44 0 00145.61 480h220.78A50.44 50.44 0 00404 463.33a46.59 46.59 0 0011.7-36.2zM343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.22 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z"></path>
              </svg>
            </div>
            <div className="flex flex-col items-start w-full">
              <p className="text-gray-400 text-xs">AGE</p>
              <p className="text-white font-thin">22 years old</p>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="icon-box w-20 h-12 rounded-xl flex items-center justify-center bg-gray-800">
              <svg className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <title>Hourglass</title>
                <path d="M415.7 427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52 279 320 270.61 320 256c0-14.41 8.49-22.64 26.16-38.44 25.93-23.17 61.44-54.91 69.56-132.84a47 47 0 00-12-36.26A50.3 50.3 0 00366.39 32H145.61a50.34 50.34 0 00-37.39 16.46 47.05 47.05 0 00-11.94 36.26c8.09 77.68 43.47 109.19 69.3 132.19C183.42 232.8 192 241.09 192 256c0 15.1-8.6 23.56-26.5 39.75-25.5 23.1-60.5 54.73-69.2 131.38a46.59 46.59 0 0011.7 36.2A50.44 50.44 0 00145.61 480h220.78A50.44 50.44 0 00404 463.33a46.59 46.59 0 0011.7-36.2zM343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.22 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z"></path>
              </svg>
            </div>
            <div className="flex flex-col items-start w-full">
              <p className="text-gray-400 text-xs">LOCATION</p>
              <p className="text-white font-thin">Agra, India</p>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="icon-box w-20 h-12 rounded-xl flex items-center justify-center bg-gray-800">
              <svg className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon s-ion-icon"
                viewBox="0 0 512 512"
              >
                <title>Hourglass</title>
                <path d="M415.7 427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52 279 320 270.61 320 256c0-14.41 8.49-22.64 26.16-38.44 25.93-23.17 61.44-54.91 69.56-132.84a47 47 0 00-12-36.26A50.3 50.3 0 00366.39 32H145.61a50.34 50.34 0 00-37.39 16.46 47.05 47.05 0 00-11.94 36.26c8.09 77.68 43.47 109.19 69.3 132.19C183.42 232.8 192 241.09 192 256c0 15.1-8.6 23.56-26.5 39.75-25.5 23.1-60.5 54.73-69.2 131.38a46.59 46.59 0 0011.7 36.2A50.44 50.44 0 00145.61 480h220.78A50.44 50.44 0 00404 463.33a46.59 46.59 0 0011.7-36.2zM343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.22 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13z"></path>
              </svg>
            </div>
            <div className="flex flex-col items-start w-full">
              <p className="text-gray-400 text-xs">PERSONALITY TYPE</p>
              <p className="text-white font-thin">INTJ</p>
            </div>
          </li>
          
        </ul>

        <ul className="social-icons flex items-center justify-between px-10">
          <li className="github">
            <i class="fa-brands fa-github text-lg text-gray-400"></i>
          </li>
          <li className="linkedin">
            <i class="fa-brands fa-linkedin text-lg text-gray-400"></i>
          </li>
          <li className="instagram">
            <i class="fa-brands fa-instagram text-lg text-gray-400"></i>
          </li>
          <li className="twitter">
            <i class="fa-brands fa-twitter text-lg text-gray-400"></i>
          </li>
        </ul>

      </div>

    </aside>
  );
};

export default Aside;
