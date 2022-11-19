import React, { useEffect, useState, useReducer } from "react";
import { useParams, Link } from "react-router-dom"
import Loading from "./Loading";
import { MainContainer, UserProfile, CarouselContainer, UserSectionBottom, UserSectionTop } from "./Styles"

import {

    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
//https://jsonplaceholder.typicode.com/photos

function ImageGallery() {
    const params = useParams()
    const [images, setImages] = useState([])
    const [sliderdIDX, dispatch] = useReducer(reducer, 0);
    const [image, setImage] = useState("")

    function reducer(state, action) {
        switch (action.type) {
            case "prev":
                return MoveSliderPrev(state);
            default:
                return MoveSliderNext(state);
        }
    }

    function MoveSliderPrev(state) {
        if (state != 0) {
            return state - 1;
        }
        return (state = 0);
    }

    function MoveSliderNext(state) {
        if (state < 10) {
            return state + 1;
        }
        return (state = 10);
    }

    function fetchImages() {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => filterImages(data))
            .catch(err => err)
    }

    function filterImages(data) {
        const ImagesFiltered = data.filter(img => {
            return img.albumId == params.id
        })
        setImages(ImagesFiltered)
    }

    function filterChosenImg() {
        if (!image || image.length == 0) {
            return <div className="img-frame"></div>
        } else {
            const IDIMG = images.filter(img => {
                return img.id == image
            })

            return <div className="img-frame">
                <div data={IDIMG[0].title} className="img-other">
                    <img className="Img-big" src={IDIMG[0].url} alt={IDIMG[0].title} />
                </div>
            </div>

        }


    }


    useEffect(() => {
        fetchImages()
    }, [])

    if (!images || images.length === 0) {
        return <Loading />
    }

    return <MainContainer>
        <UserProfile>
            <UserSectionTop style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", height: "30%" }} >
                <CarouselContainer>
                    <div className="CarouselSlider"
                        style={{
                            transform: `translateX(-${650 * sliderdIDX}px)`,
                            transition: ".5s ease transform",
                        }}
                    >
                        {
                            images.map(img => {
                                return <div key={img.id} onClick={() => setImage(img.id)} ><img src={img.thumbnailUrl} alt=""></img></div>
                            })
                        }
                    </div>
                </CarouselContainer>
                <div className="button-container">
                    <FaChevronLeft
                        onClick={() => dispatch({ type: "prev" })}
                        className="icon"
                    />
                    <FaChevronRight
                        onClick={() => dispatch({ type: "next" })}
                        className="icon"
                    />
                </div></UserSectionTop>
            < UserSectionBottom style={{ height: "70%" }} >

                <div className="img-container">
                    {
                        filterChosenImg()
                    }
                </div>

            </UserSectionBottom >
        </UserProfile>
    </MainContainer>;
}

export default ImageGallery;
