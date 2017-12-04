// reducer
export default function books(state = []) {
    return state; // nothing to do here, but we need books node in redux store
}

// selectors
export function getBooks(state, props) {
    return state.books;
}

export function getBook(state, props) {
    return state.books.find(item => item.id === props.id);
}
