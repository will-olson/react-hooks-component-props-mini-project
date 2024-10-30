import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} image={blogData.image} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;



// function App() {
//   return (
//     <div>
//       <div className="Header">
//         <h1>{blogData.name}</h1>
//       </div>
//       <div className="About">
//         <aside>
//           <img
//             src={blogData.image || "https://via.placeholder.com/215"}
//             alt="blog logo"
//           />
//         </aside>
//       </div>
//       <div className="Article List">
//         <main>
//           {blogData.posts.map(post => (
//             <article key={post.id}>
//               <h3>{post.title}</h3>
//               <small>{post.date || "January 1, 1970"}</small>
//               <p>{post.preview}</p>
//             </article>
//           ))}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;
