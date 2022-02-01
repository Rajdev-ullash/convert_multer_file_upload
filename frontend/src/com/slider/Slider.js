import React, { useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';


import { useDispatch, useSelector} from "react-redux";
import { useAlert } from 'react-alert';
import { getSlider } from '../../actions/sliderActions';
function SliderBanner() {

    const alert = useAlert()

    const dispatch = useDispatch();
    
    let {slider, error } = useSelector(state => state.slider)

    useEffect(() => {
        
        dispatch(getSlider());

        if(error) {
            alert.success("Done")
            return alert.error(error);
        }

    }, [dispatch, alert, error]);



    const sliderStyle = {
        maxHeight: "320px",
      };
    return (
        <React.Fragment>
            <section className="slider__control">
                {slider && slider.map( slide => (
                    <Carousel pasue="hover" key={slide.images[0].public_id}>
                        <CarouselItem style={sliderStyle}>
                            <img className="d-block w-100" src={slide.images[0].url} alt={'Sider Img'} />
                        </CarouselItem>  

                        <CarouselItem style={sliderStyle}>
                            <img className="d-block w-100" src={slide.images[1].url} alt={'Sider Img'} />
                        </CarouselItem>

                        <CarouselItem style={sliderStyle}>
                            <img className="d-block w-100" src={slide.images[2].url} alt={'Sider Img'} />
                        </CarouselItem>
                        
                        {/* {slider.images && slider.images.map( image => (
                            <CarouselItem  key={image.public_id} style={sliderStyle}>
                                console.log()
                                <img className="d-block w-100" src={image.url} alt={'Sider Img'} />
                            </CarouselItem>
                        ))} */}
                    </Carousel>
                ))}
            </section>
        </React.Fragment>
    )
}

export default SliderBanner
