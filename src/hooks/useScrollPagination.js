import { useState, useEffect } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants";
import { debounce } from "../utilities/debounce";

// this is a custom hook
export const usePaginationScroll = () => {
  // set initial state and provide setters
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    } else {
      setLoading(true);
    }
  }, 500);

  useEffect(() => {
    if (!loading) return;
    // will stop the scrolling by setting count to max stories
    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      // count will be incremented by count plus 30
      setCount(count + STORY_INCREMENT);
    }
    // loading will be set to false indicating that the page has rendered
    setLoading(false);
  }, [loading, count]);

  useEffect(() => {
    // this useEffect will only render once
    window.addEventListener("scroll", handleScroll);
    // clean up function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
