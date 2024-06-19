import { Link, useNavigate } from "react-router-dom";
import BookSingleCard from "./BookSingleCard";
import { MdOutlineAddBox } from "react-icons/md";
import Spinner from "../Spinner";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ViewContext } from "../../src/ViewContext";

const BooksCard = () => {
  const { view, setView } = useContext(ViewContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => {
            navigate("/table");
            setView("table");
          }}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => {
            navigate("/card");
            setView("card");
          }}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 mx-4">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl mx-4" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((item) => (
            <BookSingleCard key={item._id} book={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksCard;
