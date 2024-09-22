import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

export default class News extends Component {
  constructor(props) {
    super(props);
    //console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - news`;
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.updateNews = this.updateNews.bind(this);
    this.searchNews = this.searchNews.bind(this);
  }
  pagesize = 6;
  async componentDidMount() {
    //console.log(this.props.category);
    // console.log("serach"+typeof(this.props.search));
    if (this.props.search === "true") {
      // console.log("serach"+this.props.search);
      this.searchNews();
    } else {
      this.updateNews();
    }
  }
  searchNews = async () => {
    const stext = this.props.stext;
    console.log("stext:" + stext);
  };
  updateNews = async () => {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.pagesize}`;
    this.setState({ loading: true });
    const data = await fetch(url);
   
    const parsedData = await data.json();
    console.log("data:"+parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults:0,
    });
    this.props.setProgress(100);
  };
  handlePrevious = async () => {
    //console.log("Previous");
    await this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handleNext = async () => {
    // console.log("next");
    await this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  render() {
    if (this.state.loading) {
      return <Loader />;
    } else {
      return (
        <div className="container" style={{ justifyContent: "space-between" }}>
          <h1 style={{marginTop:"10px"}}>Top Headlines</h1>
          
          <div className="row">
            
              {this.state.articles.map((element, index) => {
                //console.log(element);
                return (
                  <div className="col-sm-4 " key={index}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      content={element.content}
                      publishedAt={new Date(element.publishedAt).toGMTString()}
                    />
                  </div>
                );
              })}
           
          </div>
          
          <div
            className="container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalArticals / this.page)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      );
    }
  }
}
