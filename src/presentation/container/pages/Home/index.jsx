// --- core
import React, { useEffect, useState } from "react";

// --- templates
import Default from "presentation/components/templates/Default";

// --- components
import HeroBanner from "presentation/components/organisms/HeroBanner";
import Scale from "presentation/components/organisms/Scale";
import Loyalty from "presentation/components/organisms/Loyalty";
import Join from "presentation/components/organisms/Join";
import MovieCarousel from "presentation/components/organisms/MovieCarousel";

// --- data picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// --- hooks
import useFetch from "core/hooks/useFetch";

// --- data
import dataHeroBanner from "./dataHeroBanner";
import dataScale from "./dataScale";
import dataLoyalty from "./dataLoyalty";
import dataJoin from "./dataJoin";
import dataMovieCarousel from "./dataMovieCarousel";

// --- Home
const Home = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const { data: posts } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const { data: comments } = useFetch("https://jsonplaceholder.typicode.com/comments");

  const datePickerConfig = {
    selected: startDate,
    onChange: (date) => setStartDate(date),
    minDate: new Date(),
  };
  return (
    <Default>
      <h2>Data Posts</h2>
      <ul>
        {posts.map((val, idx) => (
          <li key={`po-${idx}`}>
            <h3>{val.title}</h3>
            <p>{val.body}</p>
          </li>
        ))}
      </ul>

      <h2>Data Comments</h2>
      <ul>
        {comments.map((val, idx) => (
          <li key={`co-${idx}`}>
            <h3>{val.name}</h3>
            <p>{val.email}</p>
            <p>{val.body}</p>
          </li>
        ))}
      </ul>
      <DatePicker {...datePickerConfig} />
      <MovieCarousel {...dataMovieCarousel} />
      <HeroBanner {...dataHeroBanner} />
      <Scale {...dataScale} />
      <Loyalty {...dataLoyalty} />
      <Join {...dataJoin} />
    </Default>
  );
};

export default Home;
