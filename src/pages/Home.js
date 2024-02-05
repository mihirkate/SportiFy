import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import userEvent from "@testing-library/user-event";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState(null);
  const postCollectionRef = collection(db, "posts");
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = async () => {
    const data = await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  async function deletePost(id) {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    getPosts();
  }
  if (!postLists || !auth.currentUser) {
    return null;
  }

  return (
    <div className="homePage" id ='home'>
      {postLists.map((post) => {
        console.log({ auth, post });
        console.log(auth && auth.currentUser && auth.currentUser.uid, post);
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {(auth && auth.currentUser && auth.currentUser.uid) ===
                  (post && post.author && post.author.id) && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.author && post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
