import React, { Component } from 'react'

export class Newsitem extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Viral Pic From Anushka Sharma And Virat Kohli's Lunch Date In London - NDTV",
            "description": "Anushka Sharma and Virat Kohli are currently holidaying in London",
            "url": "https://www.ndtv.com/entertainment/viral-pic-from-anushka-sharma-and-virat-kohlis-lunch-date-in-london-3195717",
            "urlToImage": "https://c.ndtvimg.com/2022-07/nmcci32_anushka-sharma_625x300_26_July_22.jpg",
            "publishedAt": "2022-07-26T13:32:02Z",
            "content": "Anushka Sharma and Virat Kohli posing with the chef Surender Mohan. (courtesy: @SurenderChef)\r\nAnushka Sharma and Virat Kohli are busy holidaying and it seems the couple is now back in London. Recent… [+1846 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Dell is retiring its Mobile Connect app, here's when it will be discontinued - Times of India",
            "description": "Dell is retiring two of its apps – Dell Mobile Connect and Alienware Mobile Connect. The two apps allowed people to connect their smartphones with the",
            "url": "https://timesofindia.indiatimes.com/gadgets-news/dell-is-retiring-its-mobile-connect-app-heres-when-it-will-be-discontinued/articleshow/93140050.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-93140071,width-1070,height-580,imgsize-451759,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2022-07-26T12:52:00Z",
            "content": ""
        },
        {
            "source": {
                "id": null,
                "name": "Samsung.com"
            },
            "author": null,
            "title": "Meet the New Purple Edition, S22 Bora Purple – Samsung Newsroom India - Samsung",
            "description": "Every color has its own unique characteristics and heritage. Among them, purple has been one of the most beloved. It is a compelling color, blending the",
            "url": "https://news.samsung.com/in/meet-the-new-purple-edition-s22-bora-purple",
            "urlToImage": "https://img.global.news.samsung.com/in/wp-content/uploads/2022/07/feature-bora.jpg",
            "publishedAt": "2022-07-26T12:30:12Z",
            "content": "Every color has its own unique characteristics and heritage. Among them, purple has been one of the most beloved. It is a compelling color, blending the calmness of blue and the excitement of red to … [+1548 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NewsBytes"
            },
            "author": "Athik Saleh",
            "title": "Astronomers observe star formation in dwarf galaxies using Indian telescope - NewsBytes",
            "description": "Have you ever wondered how stars are formed in distant dwarf galaxies? If you have, a group of astronomers from India, France, and the US led by Pune's IUCAA have something for you",
            "url": "https://www.newsbytesapp.com/news/science/astronomers-spot-birth-of-stars-in-dwarf-galaxies/story",
            "urlToImage": "https://i.cdn.newsbytesapp.com/images/l48220220726132301.jpeg",
            "publishedAt": "2022-07-26T12:29:43Z",
            "content": "Astronomers observe star formation in dwarf galaxies using Indian telescope\r\nJul 26, 2022, 05:59 pm3 min read\r\nHave you ever wondered how stars are formed in distant dwarf galaxies? If you have, a gr… [+2892 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        let { title, description, ImageUrl } = this.props;
        return (
            <>
                <p className="font-font1">Hot News🔥🔥</p>
                <br />
                {this.state.articles.map((element) => {
                    return <div className="col-sm-6 pb-4">
                        <div class="card">
                            <h5 class="card-header">{element.title}</h5>
                            <div class="card-body">
                                <img src={element.urlToImage} class="card-img-top" alt="img_news" style={{ width: '40%' ,height: ''}} />
                                <br />
                                <h5 class="card-title">{element.description}</h5>
                                <h5 class="card-title">{element.publishedAt.split('', 10)}</h5>
                                <a href={element.url} class="btn btn-primary" target='_blank'>Go to news</a>
                            </div>
                        </div>
                    </div>
                })}
            </>
        )
    }
}

export default Newsitem;