const Book = (props) => {
  const { thumbnailUrl, title, authors, displayFunc, getBook, _id } = props;
  const displayTitle = () => console.log(title);
  return (
    <article className="book">
      <p className="number">{`#${_id}`}</p>
      <img src={thumbnailUrl} alt="" />
      <h1>{title}</h1>
      <br />
      <h4>{authors}</h4>
      <button onClick={displayTitle}>DisplayTitle</button>
      <br />
      <button onClick={displayFunc}>Click me</button>
      <br />
      <button
        onClick={() => {
          getBook(_id);
        }}
      >
        getBook
      </button>
    </article>
  );
};

export const Book2 = (props) => {
  const { thumbnailUrl, title, authors, displayFunc, getBook, _id } = props;
  const displayTitle = () => console.log(title);
  return (
    <article className="book">
      <img src={thumbnailUrl} alt="" />
      <h1>{title}</h1>
      <br />
      <h4>{authors}</h4>
      <button onClick={displayTitle}>DisplayTitle</button>
      <br />
      <button onClick={displayFunc}>Click me</button>
      <br />
      <button
        onClick={() => {
          getBook(_id);
        }}
      >
        getBook
      </button>
    </article>
  );
};

export default Book;
