"use client";

import { useState } from "react";

export default function Page() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSendRequest = () => {
    // TODO: Implement request sending logic
    console.log("Sending request to server...");
    setIsAnimating(true);

    // Stop animation after 6 seconds (3 cycles of 2s each)
    setTimeout(() => {
      setIsAnimating(false);
    }, 6000);
  };

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center transition-colors duration-200 flex-col p-8 gap-[48px] ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
      data-oid="4ovt4n0"
    >
      {/* Dark Mode Toggle */}
      <div className="absolute top-8 right-8" data-oid="vx2w8d_">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors duration-200 ${
            isDarkMode
              ? "bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
              : "bg-white border-gray-300 text-gray-900 hover:bg-gray-50"
          }`}
          data-oid="f_b2nb5"
        >
          <span className="text-lg" data-oid="m43wwm7">
            {isDarkMode ? "☀️" : "🌙"}
          </span>
          <span className="text-sm font-medium" data-oid="k58:9qp">
            {isDarkMode ? "Light" : "Dark"}
          </span>
        </button>
      </div>

      {/* Server-Client Visualization */}
      <div
        className="flex items-center justify-center gap-16 w-full max-w-4xl"
        data-oid="38lhuy2"
      >
        {/* Server Side */}
        <div className="flex flex-col items-center gap-4" data-oid="01ayprf">
          <h2
            className={`text-xl font-semibold ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
            data-oid="pv5n_jj"
          >
            Server
          </h2>
          <div
            className={`w-80 h-64 border-2 rounded-lg flex flex-col ${
              isDarkMode
                ? "bg-blue-900 border-blue-700"
                : "bg-blue-100 border-blue-300"
            }`}
            data-oid="7ci.3kj"
          >
            <div
              className={`text-center p-2 border-b ${
                isDarkMode ? "border-blue-700" : "border-blue-300"
              }`}
              data-oid="wwqgc8o"
            >
              <div className="text-xl mb-1" data-oid="kukoki6">
                🖥️
              </div>
              <div
                className={`text-xs font-medium ${
                  isDarkMode ? "text-blue-200" : "text-blue-800"
                }`}
                data-oid="i7o7ie2"
              >
                Backend Server
              </div>
            </div>
            <div
              className="flex-1 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-b-lg overflow-hidden"
              data-oid=".k2twz5"
            >
              <div className="text-yellow-400 mb-1" data-oid="y_10rvo">
                HTTP Response:
              </div>
              <div data-oid="npmxq8x">HTTP/1.1 200 OK</div>
              <div data-oid="1ecn7sz">Content-Type: application/json</div>
              <div data-oid="0q19mgw">Content-Length: 45</div>
              <div className="mt-2 text-white" data-oid="b5rbhwx">
                {`{"message": "Hello World", "status": "success"}`}
              </div>
            </div>
          </div>
        </div>

        {/* Connection Arrow */}
        <div className="flex items-center" data-oid="qjto5ut">
          <div
            className={`w-16 h-0.5 ${
              isDarkMode ? "bg-blue-400" : "bg-blue-500"
            }`}
            data-oid="rseklyy"
            style={{
              animation: isAnimating
                ? "oscillate 2s ease-in-out infinite"
                : "none",
            }}
          ></div>
          <div
            className={`w-0 h-0 border-l-4 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1 ${
              isDarkMode ? "border-l-blue-400" : "border-l-blue-500"
            }`}
            data-oid="5fff_ce"
            style={{
              animation: isAnimating
                ? "oscillate 2s ease-in-out infinite"
                : "none",
            }}
          ></div>
        </div>
        <style jsx data-oid="jjdizmf">{`
          @keyframes oscillate {
            0%,
            100% {
              opacity: 0.2;
              transform: scaleX(0.8) scaleY(1);
              filter: brightness(0.5);
            }
            50% {
              opacity: 1;
              transform: scaleX(1.3) scaleY(2);
              filter: brightness(1.5);
            }
          }
        `}</style>

        {/* Client Side */}
        <div className="flex flex-col items-center gap-4" data-oid="fbfzyoy">
          <h2
            className={`text-xl font-semibold ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
            data-oid="--tfkbu"
          >
            Client
          </h2>
          <div
            className={`w-80 h-64 border-2 rounded-lg flex flex-col ${
              isDarkMode
                ? "bg-green-900 border-green-700"
                : "bg-green-100 border-green-300"
            }`}
            data-oid="2.stt9t"
          >
            <div
              className={`text-center p-2 border-b ${
                isDarkMode ? "border-green-700" : "border-green-300"
              }`}
              data-oid="4thrb:r"
            >
              <div className="text-xl mb-1" data-oid="1il8cw7">
                💻
              </div>
              <div
                className={`text-xs font-medium ${
                  isDarkMode ? "text-green-200" : "text-green-800"
                }`}
                data-oid="brm3hu."
              >
                Web Browser
              </div>
            </div>
            <div
              className="flex-1 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-b-lg overflow-hidden"
              data-oid="1i4ivlw"
            >
              <div className="text-yellow-400 mb-1" data-oid="799nuru">
                HTTP Request:
              </div>
              <div data-oid="ag6mxkg">GET /api/data HTTP/1.1</div>
              <div data-oid="lv.:4bg">Host: localhost:3000</div>
              <div data-oid="9ek28p-">User-Agent: Mozilla/5.0</div>
              <div data-oid="v.mg2nf">Accept: application/json</div>
              <div data-oid="g2ot_u.">Authorization: Bearer token123</div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Button */}
      <div className="flex flex-col items-center gap-4" data-oid="dorbb_e">
        <button
          onClick={handleSendRequest}
          className={`px-8 py-3 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl ${
            isDarkMode
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          data-oid="unv27jw"
        >
          Send Request to Server
        </button>
        <p
          className={`text-sm text-center max-w-md ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
          data-oid="jtk0dfz"
        >
          Click the button above to simulate sending a request from the client
          to the server
        </p>
      </div>
    </div>
  );
}
