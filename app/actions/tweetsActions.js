import axios from "axios";
import { connect } from "react-redux";

export function fetchTweets() {
  return function(dispatch) {
    dispatch({ type: "FETCH_TWEETS" });
    axios
      .get("http://localhost:3000/tweets")
      .then(response => {
        dispatch({
          type: "FETCH_TWEETS_FULFILLED",
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_TWEETS_REJECTED", payload: err });
      });
  };
}
