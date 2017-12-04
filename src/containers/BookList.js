import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { getBooks } from '../ducks/books';

const mapStateToProps = (state, props) => {
    return {
        books: getBooks(state, props)
    }
}

export default connect(mapStateToProps)(BookList);
