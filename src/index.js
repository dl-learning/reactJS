import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { json } from "./books";
import Book, { Book2 } from "./Book";

const BookList = () => {
  const display_value = "shakeAndBake";
  const displayFunc = () => {
    console.log(display_value);
  };

  const getBook = (id) => {
    const book = json.find((book) => book._id === id);
    console.log(book);
  };
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="bookList">
        {/* <FormInput /> */}
        {json.slice(0, 6).map((book) => {
          const { thumbnailUrl, title, authors, _id } = book;
          return (
            // <Book
            //   thumbnailUrl={thumbnailUrl}
            //   title={title}
            //   authors={authors}
            //   key={_id}
            // />
            <Book
              {...book}
              key={book._id}
              displayFunc={displayFunc}
              getBook={getBook}
            />
          );
        })}
        {json.slice(7, 10).map((book) => {
          const { thumbnailUrl, title, authors, _id } = book;
          return (
            <Book2
              thumbnailUrl={thumbnailUrl}
              title={title}
              authors={authors}
              key={_id}
              displayFun={displayFunc}
              getBook={getBook}
            />
          );
        })}
      </section>
    </>
  );
};

// function FormInput() {
//   const input_change = (e) => {
//     // console.log(e.target.value);
//     console.log("input_changed");
//   };
//   const btn_click = (e) => {
//     e.preventDefault();
//     console.log("login");
//   };

//   return (
//     <section>
//       <form action="">
//         <h2>Input Form</h2>
//         <input type="text" name="username" onChange={input_change} />
//       </form>
//       <button onClick={btn_click}>click me</button>
//     </section>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
