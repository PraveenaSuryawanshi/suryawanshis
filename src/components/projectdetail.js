import React from "react";
import deetail1 from "../images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg";
import deetail2 from "../images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";
import deetail3 from "../images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () =>{
    let params = useParams()
    console.warn(params.id);

    const data = {
        iteams : [
            {
                id:1,
                tittle:"Tree pot",
                tagline:"Original package design from house",
                describe:"Description",
                describetext:"Over three years in business, We’ve had the chance to work on a variety of projects, with companies",
                img:deetail2
            },
            {
                id:2,
                tittle:"Fashion Set",
                tagline:"Costume Package",
                describe:"Description",
                describetext:"Over three years in business, We’ve had the chance to work on a variety of projects, with companies",
                img:deetail1
            },
            {
                id:3,
                tittle:"Juice Drinks",
                tagline:"Nature made another world",
                describe:"Description",
                describetext:"Over three years in business, We’ve had the chance to work on a variety of projects, with companies",
                img:deetail3
            }
        ]
    }
    return(
        <>
          <section className="product-detail section-padding">
                <div className="container">
                {
                            data.iteams.map((item)=>{
                                return params.id == item.id ? (
                                    <>
                    <div className="row">
                       
                                      <div className="col-lg-6 col-12">
                            <div className="product-thumb">
                                <img src={item.img} className="img-fluid product-image" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="product-info d-flex">
                                <div>
                                    <h2 className="product-title mb-0">{item.tittle}</h2>

                                    <p className="product-p">{item.tagline}</p>
                                </div>
                            </div>

                            <div className="product-description">

                                <strong className="d-block mt-4 mb-2">{item.describe}</strong>

                                <p className="lead mb-5">{item.describetext}</p>
                            </div>
                        </div>
                                
                    </div>
                    </>
                                ) : null
                            })
                        }
                </div>
            </section>
        </>
    )
}
 export default Detail;