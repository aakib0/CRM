// import { Routes, Route, Navigate } from "react-router-dom";
// import MyEmployees from "./component/pages/MyEmployees";
// import Layout from "./component/pages/Layout";
// import EmployeeDetail from "./component/pages/EmployeeDetail";
// import CustomerLeads from "./component/pages/CustomerLeads";
// import MyData from "./component/pages/MyData";

// function App() {
//   return (
//     <Routes>
//       <Route path="/CRM" element={<Layout />}>
//         <Route index element={<Navigate to="my-data" replace />} />
//         <Route path="/CRM/my-data" element={<MyData />} />
//         <Route path="/CRM/my-employees" element={<MyEmployees />} />
//         <Route path="/CRM/employee-details" element={<EmployeeDetail />} />
//         <Route path="/CRM/customer-leads" element={<CustomerLeads />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;


import { Routes, Route, Navigate } from "react-router-dom";
import MyEmployees from "./component/pages/MyEmployees";
import Layout from "./component/pages/Layout";
import EmployeeDetail from "./component/pages/EmployeeDetail";
import CustomerLeads from "./component/pages/CustomerLeads";
import MyData from "./component/pages/MyData";

function App() {
  return (
    <Routes>
      <Route path="/CRM" element={<Layout />}>
        {/* Default redirect to my-data */}
        <Route index element={<Navigate to="my-data" replace />} />

        {/* Each page at the same level */}
        <Route path="my-data" element={<MyData />} />
        <Route path="my-employees" element={<MyEmployees />} />
        <Route path="employee-details" element={<EmployeeDetail />} />
        <Route path="customer-leads" element={<CustomerLeads />} />
      </Route>
    </Routes>
  );
}

export default App;
