import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return(
        <>
        
                        <div className="col-md-3 col-10">
                            <div className="card">
                                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                                    <p className="card-text">{props.sdescription}</p>
                                    <NavLink to="" className="btn btn-primary">See More</NavLink>
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default Card;