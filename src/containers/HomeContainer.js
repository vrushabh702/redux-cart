import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../Services/Actions/action";

const mapStateTOProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateTOProps, mapDispatchToProps)(Home);
// export default Home;
