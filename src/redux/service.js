import axios from "axios";

export function* axiosGet(url) {
  let getResponse = yield axios.get(url);
  return getResponse;
}

export function* axiosPost(url, payload) {
  let postResponse = yield axios.post(url, payload);
  return postResponse;
}

export function* axiosDelete(url) {
  let deleteResponse = yield axios.delete(url);
  return deleteResponse;
}
