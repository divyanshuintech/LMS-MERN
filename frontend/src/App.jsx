import React, { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import CreateBook from "../pages/CreateBook";
import DeleteBook from "../pages/DeleteBook";
import EditBook from "../pages/EditBook";
import ShowBook from "../pages/ShowBook";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import { ViewContext } from "./ViewContext";

const App = () => {
  const { view, setView } = useContext(ViewContext);

  return (
    <Routes>
      <Route path="/table" element={<BooksTable />} />
      <Route path="/card" element={<BooksCard />} />
      <Route path="/books/create" element={<CreateBook view={view} />} />
      <Route path="/books/delete/:id" element={<DeleteBook view={view} />} />
      <Route path="/books/edit/:id" element={<EditBook view={view} />} />
      <Route path="/books/details/:id" element={<ShowBook view={view} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
