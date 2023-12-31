import React from 'react';
import { Container } from 'reactstrap';
import "../../../styles/common-section.css"

const CommonSection = ({title}) => {
    return (
        <section className='common-section'>
            <Container>
                <h2 className='text-white'>{title}</h2>
            </Container>
        </section>
    );
};

export default CommonSection;