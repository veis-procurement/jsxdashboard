import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";

// import FAQ from "./scenes/faq";
import Mainseach from "./Components/Mainsearch/Mainseach";
import FAQ from "./scenes/Faq";
import Sirensearch from "./scenes/Sirensearch";
import Bar from "./scenes/bar";
import BlankPage from "./scenes/blankpage";

// import Dashboard from "./scenes/dashboard";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {/* <Mainseach></Mainseach> */}


            
            <Routes>
              <Route path="/" element={<Mainseach />} />
              <Route path="/sirensearch" element={<Sirensearch />} />  
              <Route path="/team" element={<Bar />} />
              <Route path="/contacts" element={<BlankPage />} /> 
              {/* <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />    */}
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/calendar" element={<Bar />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */} 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;