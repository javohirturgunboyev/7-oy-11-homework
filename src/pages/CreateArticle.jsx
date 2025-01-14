
import React, { useState } from "react";
import Header from "../components/Header";

function CreatArticle() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [desc, setDesc] = useState("");
  const [tempComment, setTempComment] = useState("");

  function handleCreatArticle(e) {
    e.preventDefault();
    const newArticle = {
      title,
      poster,
      desc,
      id: Date.now(),
      comments: [], 
    };
    const updatedArticles = [...articles, newArticle];
    setArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
    setTitle("");
    setPoster("");
    setDesc("");
  }

  function handleAddComment(articleId) {
    if (tempComment.trim() === "") return;

    const updatedArticles = articles.map((article) =>
      article.id === articleId
        ? { ...article, comments: [...article.comments, tempComment] }
        : article
    );
    setArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
    setTempComment("");
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <form className="flex flex-col mx-auto mt-[100px]">
          <input
            type="text"
            className="w-[400px] border bg-gray-300 p-3 rounded-md mb-2 text-white text-xl"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-[400px] border bg-gray-300 p-3 rounded-md mb-2 text-white text-xl"
            placeholder="Enter Poster"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
          <textarea
            className="w-[400px] border bg-gray-300 p-3 rounded-md mb-2 text-white text-xl"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button
            className="w-[400px] border bg-green-400 p-3 rounded-md mb-2 text-white text-xl"
            onClick={handleCreatArticle}
          >
            Create Article
          </button>
        </form>

        <div className="mt-5 flex flex-row flex-wrap flex-2 justify-between mx-auto gap-[30px]">
          {articles.length === 0 ? (
            <p className="text-center text-xl">
              Hozircha hech qanday ma'lumot qushmadiz
            </p>
          ) : (
            articles.map((article, index) => (
              <div
                key={index}
                className="border p-4 w-[500px] rounded-md mb-3 bg-gray-100"
              >
                <h3 className="text-2xl font-bold">{article.title}</h3>
                <p className="text-lg">{article.poster}</p>
                <p className="text-lg">{article.desc}</p>

                <div className="mt-3">
                  <textarea
                    className="w-full border p-2 rounded-md"
                    placeholder="Add a comment"
                    value={tempComment}
                    onChange={(e) => setTempComment(e.target.value)}
                  ></textarea>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                    onClick={() => handleAddComment(article.id)}
                  >
                    Add Comment
                  </button>
                </div>

                <div className="mt-3">
                  <h4 className="text-lg font-semibold">Comments:</h4>
                  {article.comments.length === 0 ? (
                    <p className="text-sm italic">No comments yet</p>
                  ) : (
                    <ul className="list-disc list-inside">
                      {article.comments.map((comment, idx) => (
                        <li key={idx} className="text-sm">
                          {comment}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CreatArticle;
