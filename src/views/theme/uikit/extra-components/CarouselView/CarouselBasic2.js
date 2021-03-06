import clsx from 'clsx';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { IndexArrows } from '~/components/theme/Slider';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, Typography, CardContent } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {}
}));

// ----------------------------------------------------------------------

SlideItem.propTypes = {
  item: PropTypes.object
};

function SlideItem({ item }) {
  const { image, title, description } = item;

  return (
    <>
      <Box
        component="img"
        alt={title}
        src="/static/images/placeholder.svg"
        data-sizes="auto"
        data-src={image.small}
        data-srcset={`${image.small} 600w, ${image.medium} 960w`}
        className="lazyload blur-up"
        sx={{ width: '100%', height: 370, objectFit: 'cover' }}
      />

      <CardContent>
        <Typography variant="h6" noWrap gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" noWrap>
          {description}
        </Typography>
      </CardContent>
    </>
  );
}

CarouselBasic2.propTypes = {
  carousels: PropTypes.array.isRequired,
  className: PropTypes.string
};

function CarouselBasic2({ carousels, className, ...other }) {
  const classes = useStyles();
  const carouselRef = useRef();
  const [carouselIndex, setCarouselIndex] = useState(2);

  const settings = {
    fade: true,
    speed: 500,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: carouselIndex,
    afterChange: current => setCarouselIndex(current)
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <Slider ref={carouselRef} {...settings}>
        {carousels.map(item => (
          <SlideItem key={item.title} item={item} />
        ))}
      </Slider>

      <IndexArrows
        index={carouselIndex}
        total={carousels.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
        sx={{ bottom: '128px !important' }}
      />
    </Card>
  );
}

export default CarouselBasic2;
