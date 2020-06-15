import React, { Component } from "react";
import HomeIcon from '@material-ui/icons/Home';
import './productDetails.less'
import productdetails from './productDetails.json';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ReactStars from 'react-rating-stars-component';
import { connect } from 'react-redux'
import { DESCRIPTION, ABOUT, REVIEW } from "../../constants/actionTypes";




const mapStateToProps = (state) => {
    console.log(state.slide)
    return {
        card: state.card,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        cardDescription: () =>
            dispatch({
                type: DESCRIPTION
            }),
        cardReview: () =>
            dispatch({
                type: REVIEW
            }),
        cardAbout: () =>
            dispatch({
                type: ABOUT
            })
    }

}
class Product extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            show: true,
            id: '',
            listId: '',
            image: "../../assets/cycle.png",
            index: "0",
            card: "description"
        };
        this.cardDescription = () => this.props.cardDescription();
        this.cardReview = () => this.props.cardReview();
        this.cardAbout = () => this.props.cardAbout();


    }
    _onMouseMove = (id) => {
        this.setState({ show: true, id: id })
    }
    _onMouseOut = (id) => {
        this.setState({ show: false, id: id })
    }
    imageButton = (img, id, index) => {
        console.log(img, id, index)
        this.setState({ image: img, listId: "", index: index })
    }
    card = (card) => {
        this.setState({ card: card })
    }
    render() {
        return (
            <div className="firstcontainerdetails">
                {/* <div className="rowdetails">
                    <div className="productSizedetails">
                        <div className="productNamedetails">
                            <div className="productColordetails">Product Details</div>
                            <small className="productWelcomedetails">Welcome to Oreo</small>
                        </div>
                        <div className="pathdetails">
                            <div className="homeIcon1details">
                                <div>
                                    <HomeIcon className="iconHomeColordetails" style={{ fontSize: "18px" }} />
                                </div>
                                <div className="oreo1">
                                    <div className="wordStyle1">Oreo</div>
                                    <div className="wordStyle">/</div>
                                    <div className="wordStyle1">eCommerce</div>
                                    <div className="wordStyle">/</div>
                                    <div className="wordStyle">ProductDetails</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="containerFluiddetails">
                    <div className="rowFlexdetails">
                        <div className="coldetails" >
                            <div className="productItemdetails">
                                <div className="roworder">
                                    <div className="columnWise">
                                        <div>
                                            <img src={this.state.image} className="bigimg" />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row", padding: "5px" }}>
                                            {productdetails.Images.map((data, index) => (
                                                <div key={data.id} onClick={() => this.imageButton(data.img, data.id, index)} >
                                                    <img src={data.img} className="smallimssize" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="rowSide" >
                                        <div className="h3Style">
                                            {productdetails.DetailsList[this.state.index].title}
                                        </div>
                                        <div className="clockrow">
                                            <div className="h3Style">Current Price:</div>
                                            <div className="h3Stylecolor">{productdetails.DetailsList[this.state.index].price}</div>

                                        </div>
                                        <p>
                                            <ReactStars
                                                size={24}
                                                name="rate1"
                                                count={5}
                                                value={productdetails.DetailsList[this.state.index].rating}
                                            />
                                        </p>
                                        <p className="para1style">
                                            {productdetails.DetailsList[this.state.index].description}
                                        </p>
                                        <p className="para1style">
                                            78% of buyers enjoyed this product! (23 votes)
                                            </p>
                                        <div className="clockrow">
                                            <div className="h3Style">sizes:</div>
                                            <div className="h3Style21">s</div>
                                            <div className="h3Style2">m</div>
                                            <div className="h3Style2">l</div>
                                            <div className="h3Style2">xl</div>
                                        </div>
                                        <div className="clockrow">
                                            <div className="h3Style" >color:</div>
                                            <span className="color"></span>
                                            <span className="color1"></span>
                                            <span className="color2"></span>


                                        </div>

                                        <div className="clockrow">
                                            <div className="cart">
                                                add to cart
                                                </div>
                                            <div className="cart">
                                                <FavoriteBorderIcon />
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>






                            <div className="productItemdetails1">
                                <div className="roworder">
                                    <div className="card2style .border" onClick={() => { this.card("description") }} >
                                        Description
                                     </div>
                                    <div className="card2style" onClick={() => { this.card("review") }}>
                                        Review
                                     </div>
                                    <div className="card2style" onClick={() => { this.card("about") }}>
                                        About
                                     </div>
                                </div>
                            </div>

                            <div className="productItemdetails1">
                                {this.state.card === 'description' ?
                                    <div className="description">
                                        {productdetails.DetailsList[this.state.index].description}
                                    </div> :
                                    this.state.card === 'review' ?
                                        <div>
                                            <div className="description">
                                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied
                                       </div>

                                            {productdetails.profileDetails.map(data => {
                                                return (
                                                    <div className="rowImage2">
                                                        <div >
                                                            <img src={data.img} className="cardImgsize" />
                                                        </div>
                                                        <div className="rowSide">
                                                            <div>
                                                                {data.Name}
                                                            </div>
                                                            <div>
                                                                {data.Reply}
                                                            </div>
                                                            <div className="rowImage1">
                                                                <div className="rowImage">
                                                                    <div>{data.Item}</div>
                                                                    <div className="rating"><ReactStars
                                                                        size={15}
                                                                        name="rate1"
                                                                        count={5}
                                                                        value={data.rating}
                                                                    /></div>
                                                                </div>
                                                                <div>{data.Date}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}


                                        </div> :
                                        this.state.card === 'about' ?
                                            <div className="about">
                                                <h4>
                                                    WHERE DOES IT COME FROM?
                                    </h4>
                                                <div className="about1">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                    </div>
                                            </div> :
                                            <div className="description">
                                                {productdetails.DetailsList[this.state.index].description}
                                            </div>




                                }

                            </div>













                        </div>
                    </div>

                </div>



            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Product);