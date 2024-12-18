import React, { useEffect, useState } from "react";
import { throttle } from "lodash";

let fake = [
  "1The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "2The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "3The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "4The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "5The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "6The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "7The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "8The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "9The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "10The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "11The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "12The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "13The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "14The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "15The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "16The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "17The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "18The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "19The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "20The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "21The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "22The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "23The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "24The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "25The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
  "26The future of frontend layout is here, and its called CSS Grid. Once you master this amazing tech youll be able to build crazy awesome UIs in very little time and code. Dont spend the next ten years guessing and worrying. Master every aspect of Grid right now, and save an adorable alien species while youre at it",
];

const Scrolls = () => {
  const [fakePosts, setFakePosts] = useState(fake.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);
  const loadMorePosts = () => {
    if (!hasMore) return;

    setFakePosts((prevPosts) => {
      const currentLength = prevPosts.length;
      const morePosts = fake.slice(currentLength, currentLength + 5);

      if (morePosts.length === 0) {
        setHasMore(false); // No more posts to load
      }

      return [...prevPosts, ...morePosts];
    });
  };
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollBottom = document.documentElement.scrollBottom;
      const clientHeight = document.documentElement.clientHeight;

      // Check if the user is near the bottom of the page
      if (scrollHeight - scrollTop <= clientHeight + 1200) {
        loadMorePosts();
      }
    }, 200); // Throttle scroll handler to 200ms

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fakePosts]);

  return (
    <div style={{ height: "200vh", padding: "1rem" }}>
      <div className="flex flex-col w-full justify-between">
        <ul className="">
          {fakePosts.map((v, i) => {
            return (
              <li className="my-20" key={i}>
                {fakePosts[i]}
              </li>
            );
          })}
        </ul>
        {!hasMore && <p>No more posts!!!</p>}
      </div>
    </div>
  );
};

export default Scrolls;
