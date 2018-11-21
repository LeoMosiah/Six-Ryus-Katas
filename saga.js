function* fetchPosts() {
    const posts = yield call(getPosts());
    yield put({ type: "RECEIVE_POSTS", posts });
  }

function* fetchComments() {
    const comments = yield call(getComments());
    yield put({ type: "RECEIVE_COMMENTS", comments });
  }

  function* fetchCategories() {
    const categories = yield call(getCategories());
    yield put({ type: "RECEIVE_CATEGORIES", categories });
  }

export function* rootSaga() {
    yield all ([
        fork(fetchPosts),
        fork(fetchComments),
        fork(fetchCategories)
    ]
    )
}
