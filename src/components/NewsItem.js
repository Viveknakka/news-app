//import React, { Component } from "react";

//export default class NewsItem extends Component 
export default function NewItem(props)
{
  //render() {
    let {title, description, imageUrl, url,author,publishedAt} = props;
    return (
      <div>
       
        <div className="container mx-3 my-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
               {description}
              </p>
              <a href={url} className="btn btn-primary">
                Know More
              </a>
              <p>Author:{author}</p>
              <p>Published on:{publishedAt}</p>
            </div>
          </div>
        </div>
      </div>
    );
//  }
}
