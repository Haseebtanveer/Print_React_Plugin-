import React from "react";

const fileUpdate = React.lazy(() => import("./components/FileUpload"));
const PrintJob = React.lazy(() => import("./components/PrintJobNotification"));
const routes = [
  { path: "/Upload", exact: true, name: "File Upload", Component: fileUpdate },
  { path: "/PrintJob", exact: true, name: "Print Info", Component: PrintJob },
];

export default routes;
