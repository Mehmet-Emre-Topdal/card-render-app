import React from "react";
import "./Render.css";



const Render = props =>{

    const {data} = props;

    return(
        <div className="Render container f-center">
            <div className="card">
                <div className="card-header">
                    <img src={data.cardImgUrl || "https://picsum.photos/id/5/200/250"} className="card-image" alt=""/>
                </div>

                <div className="card-body">
                    <p className="name">{data.cardName || "Product name"}</p>
                    <p className="price">{data.cardPrice || "Price"}</p>
                    <p className="category">{data.cardCategory ||"Category"}</p>

                </div>
            </div>
        </div>
    );    
}

export default Render;