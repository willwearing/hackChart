import React from "react";

const Card = (props) => {
  return (
      <div class="mb-4 pb-1 col-12 col-md-6 col-lg-4">
        <a class="featured-item-card-link text-decoration-none" href="/inclusive-culture" rel="nofollow">
          <div class="featured-item-card h-100 overflow-hidden position-relative d-flex flex-column">
            <div class="featured-item-card-hover-wrapper position-absolute w-100 h-100">
              <div class="featured-item-card-hover position-absolute w-100 h-100 flex-row align-items-center justify-content-center text-center">
                <div style={{ 'background-image': "url('https://diversity.hrtechgroup.com/sites/default/files/2020-06/ImageCard1.png')" }} class="h-100 w-100 featured-item-card-hover-background position-absolute"></div>
                <div class="featured-item-card-hover-content d-flex flex-column justify-content-end align-items-start
                    text-align-left position-relative featured-item-card-content h-100 w-100 p-4">
                  <div class="featured-item-card-title text-white">
                    {props.title}                 </div>
                  <div class="featured-item-card-hover-link-text">
                    Read more
                  </div>
                </div>
              </div>
            </div>

            <div class="featured-item-card-image">
              <div data-blazy="" class="blazy blazy--field blazy--field-image blazy--field-image--default field field--name-field-image field--type-entity-reference field--label-hidden field__item blazy--on blazy--first">
                <div class="media media--bundle--image media--blazy media--image is-b-loaded">
                  <img alt="" class="media__image media__element b-lazy img-fluid b-loaded" loading="lazy" src="https://diversity.hrtechgroup.com/sites/default/files/styles/featured_card/public/2020-06/ImageCard1.png?itok=OzCVfTXJ" typeof="foaf:Image" width="350" height="190" />
                </div>
              </div>
            </div>
            <div class="featured-item-card-content p-3 m-1">
              <div class="featured-item-card-title">
                {props.title}             </div>
            </div>
          </div>
        </a>
      </div>
  );
};

export default Card;

