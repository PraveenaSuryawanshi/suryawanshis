import React from "react";
import product1 from "../images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg"
import product2 from "../images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg"
import product3 from "../images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg"
import { Link } from "react-router-dom";
const FeatureProject = (props) => {
    

    const data = {
        items : [
            {
                id:1,
                spantext:"New Arrival",
                tittle:"Tree pot",
                productdesc:"Original package design from house",
                img:product1
            },
            {
                id:2,
                spantext:"Low Price",
                tittle:"Fashion Set",
                productdesc:"Costume Package",
                img:product2
            },
            {
                id:3,
                spantext:"",
                tittle:"Juice Drinks",
                productdesc:"Nature made another world",
                img:product3
            }
        ]
    }
    return(
      <>
        <section class="featured-product section-padding">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-12 text-center">
                            <h2 class="mb-5">{props.tittle}</h2>
                        </div>
                        {
                            data.items.map((item)=>{
                                return  (
                                    <>
                                     <div class="col-lg-4 col-12 mb-3">
                            <div class="product-thumb">
                            <Link to={`/suryawanshis/project/detailspage${item.id}`}>
                                <img src={item.img} class="img-fluid product-image" alt=""/>
                                </Link>

                                <div class="product-top d-flex">
                                    <span class="product-alert me-auto">{item.spantext}</span>
                                </div>

                                <div class="product-info d-flex">
                                    <div>
                                        <h5 class="product-title mb-0">
                                            <Link to={`/suryawanshis/project/detailspage${item.id}`}  class="product-title-link">
                                            {item.tittle}
                                            </Link>
                                           
                                        </h5>

                                        <p class="product-p">{item.productdesc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                    </>
                                )
                            })
                        }
            
                    </div>
                </div>
            </section>
      </>
    )
}

export default FeatureProject;