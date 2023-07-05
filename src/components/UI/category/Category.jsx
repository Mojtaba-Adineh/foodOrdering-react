import React from 'react';

import categoryImg01 from "../../../assets/images/category-01.png"; 
import categoryImg02 from "../../../assets/images/category-02.png"; 
import categoryImg03 from "../../../assets/images/category-03.png"; 
import categoryImg04 from "../../../assets/images/category-04.png"; 
import { Container , Row , Col } from 'reactstrap';
import "../../../styles/category.css"

const Category = () => {
    const categoryData =[
        {
            display : "Fastfood",
            imgUrl : categoryImg01
        },
        {
            display : "Pizza",
            imgUrl : categoryImg02
        },
        {
            display : "Asian food",
            imgUrl : categoryImg03
        },
        {
            display : "Row meat",
            imgUrl : categoryImg04
        }
    ]

    return (
        <Container>
            <Row>
                {
                    categoryData.map((item , index) => (
                        <Col lg="3" md="6" sm="6" className='mb-4' key={index}>
                            <div className='category-item d-flex align-items-center gap-3'>
                                <div className="category-image">
                                    <img src={item.imgUrl} alt={item.display} />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Category;