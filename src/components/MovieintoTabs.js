import React, { Component } from 'react'
import { dataDigitalBestSeller } from './data';

import { Card } from 'react-bootstrap';
export default class MovieintoTabs extends Component {
  render() {
    return (

        <div>
        {dataDigitalBestSeller.map((item) => (
             <Card>
             <Card.Body>
               <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text>
             </Card.Body>
             <Card.Img variant="bottom" src= {item.linkImg} />
           </Card>
          ))}
          </div>
    )
  }
}
