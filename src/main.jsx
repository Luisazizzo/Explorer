import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import MainLayout from "./layouts/mainLayout";
import Activities from "./pages/activities";
import Activity from "./pages/activities/id";
import Cities from "./pages/cities";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="product" element={<Product />} />
      <Route path="activities" element={<Activity />} />
      <Route path="activities/:id" element={<Activities />} />
      <Route path="cities" element={<Cities />} />
      <Route path="cities/:id" element={<Cities />} />
    </Route>
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
