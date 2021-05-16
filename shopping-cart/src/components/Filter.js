import React, { Component } from 'react'
import { connect } from 'react-redux'
import {filterProducts, sortProducts, filterCategories, searchBar} from '../actions/productActions';

class Filter extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                <div className="col-md-4">
                {`${this.props.filteredProducts.length} items found.`}
                </div>
                <div className="col-md-4">
                <label>
                    Search
                    <br/>
                    <input
                    type="text"
                    placeholder="Search "
                    name="s" 
                    className="form-control"
                    onChange={(e) => this.props.searchBar(this.props.products,e.target.value)}
                    value={this.props.searchValue}/>
                </label>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <label>
                        Order By Price
                        <select className="form-control" value={this.props.sort}
                            onChange={(e) => this.props.sortProducts(this.props.filteredProducts,e.target.value)}>
                                <option value="">Select</option>
                                <option value="Lowest">Lowest to Highest</option>
                                <option value="Highest">Highest to Lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                <label>
                        Filter by Size
                        <select className="form-control" value={this.props.size}
                            onChange={(e) => this.props.filterProducts(this.props.filteredProducts, e.target.value)}>
                                <option value="">All</option>
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                <label>
                        Category
                        <select className="form-control" value={this.props.category}
                            onChange={(e) => this.props.filterCategories(this.props.filteredProducts, e.target.value)}>
                                <option value="">Select</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                        </select>
                    </label>
                </div>
                </div>
            </div>
                
        )
    }
}
const mapStateToProps = state => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort,
    catgory: state.products.category,
    searchValue: state.products.searchValue
})
export default connect(mapStateToProps, {filterProducts,sortProducts,filterCategories,searchBar})(Filter);
