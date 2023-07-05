import React, { useEffect, useState } from "react";
import Helmet from "./../components/helmet/Helmet";
import CommonSection from "./../components/UI/common-section/CommonSection";
import { Col, Container, Row } from "reactstrap";
import ReactPaginate from "react-paginate";
import _ from "lodash";

import "../styles/all-foods.css";
import "../styles/pagination-btns.css";

import products from "./../assets/fake-data/products";
import ProdactCard from "./../components/UI/product-card/ProdactCard";

const AllFoods = () => {
    const [foods , setFoods] = useState(products)
  //search box ------------------

  const [searchQuery, setSearchQuery] = useState("");

  const searchedItems = foods.filter((item) => {
    if (searchQuery.trim() === "") return item;
    if (
      item.title.toLowerCase().includes(searchQuery.trim().toLocaleLowerCase())
    )
      return item;
  });

  //pagination ---------------

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayingItems = searchedItems.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedItems.length / productPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  //filter price -----------------

  const handleFilterPrice = (e) => {
    const price = e.target.value
    switch (price) {
        case "high-price":{
            const highToLowPrice = _.orderBy(products , ["price"] , ["desc"])
            setFoods(highToLowPrice)
            break;
        }

        case "low-price":{
            const lowToHighPrice = _.orderBy(products , ["price"] , ["asc"])
            setFoods(lowToHighPrice)
            break;
        }

        default:
            setFoods(products)
            break;
    }
  }

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6"  xs='6'>
              <div className="search-widgets d-flex align-items-center justify-content-between w-50">
                <input
                  value={searchQuery}
                  onChange={(e) => { 
                    setSearchQuery(e.target.value), setPageNumber(0);
                  }}
                  type="text"
                  placeholder="I'm Looking for... "
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs='6' className="mb-5">
              <div className="sort-widgets text-end">
                <select onClick={handleFilterPrice} className="w-50">
                  <option >No Filter</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayingItems.map((item) => (
              <Col
                className="mb-4 h-100 product-col"
                lg="3" md="4" sm="6" xs="7"
                key={item.id}
              >
                <ProdactCard item={item} />
              </Col>
            ))}

            {pageCount > 1 ?
            (<div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageChange}
                previousLabel="Prev"
                containerClassName="paginationBtns"
              />
            </div>) : null }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
