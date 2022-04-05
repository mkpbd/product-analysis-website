import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    const [data , setData] = useState([]);

    useEffect(()=>{
        // axios.get('question.json').then(datas => setData(datas)).catch(err => console.log(err));
        fetch('question.json').then(data => data.json()).then(datas => setData(datas)).catch(err => console.log(err));
    },[data])
    return (
        <Container className='my-5 py-5 bg-light'>
            <Row>
                {
                    data.map(da => (<Col sm={10} className="offset-1" key={da.question}>
                            <h2 className='bg-secondary text-white p-2 my-3'>{da.question}</h2>
                            <p className='text-dark'>
                                {da.Answer}
                            </p>
                    </Col>))
                }
            </Row>
        </Container>
    );
};

export default Blogs;