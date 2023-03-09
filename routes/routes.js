import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Posts from "../src/components/Posts";
import Dashboard from "../src/components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />}>
          <Route path="/posts" element={<Posts />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
