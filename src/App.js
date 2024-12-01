import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import AttendancePage from "./components/attendance";
import Sidebar from "./components/Sidebar";
import ViewAllMembers from "./components/ViewAllMembers";

function App() {
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
                <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/" element={<HomePage />} exact />
            <Route path="/allmembers" element={<ViewAllMembers />} exact />
              </Routes>
         
            </div>
          </div>

        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
