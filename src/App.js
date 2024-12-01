import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import AttendancePage from "./components/attendance";
import Sidebar from "./components/Sidebar";
import ViewAllMembers from "./components/ViewAllMembers";
import LiveLocation from "./components/LiveLocation";
import RouteTravel from "./components/RouteTravel";
import { useJsApiLoader } from "@react-google-maps/api";

function App() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ["places"],
  });

  return (
    <>
      <BrowserRouter>
        <main>
          {/* <Sidebar /> */}
          <div style={{ display: "flex" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div style={{ padding: "5px", width: "100%" }}>
              <Routes>
                {/* <Route path="/attendance" element={<AttendancePage />} /> */}
                <Route path="/" element={<AttendancePage />} exact />
                <Route path="/allmembers" element={<ViewAllMembers />} exact />
                <Route path="/livelocation" element={<LiveLocation />} exact />
                <Route path="/route" element={<RouteTravel />} exact />
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
