import React from "react";

const Card = (props) => {
  return (
      <div className="mb-4 pb-1 col-12 col-md-6 col-lg-4">
        <a className="featured-item-card-link text-decoration-none" href="/inclusive-culture" rel="nofollow">
          <div className="featured-item-card h-100 overflow-hidden position-relative d-flex flex-column">
            <div className="featured-item-card-hover-wrapper position-absolute w-100 h-100">
              <div className="featured-item-card-hover position-absolute w-100 h-100 flex-row align-items-center justify-content-center text-center">
              <img src={props.image} class="featured-item-card-hover-background position-absolute" width="450" height="290"></img>
                <div className="featured-item-card-hover-content d-flex flex-column justify-content-end align-items-start
                    text-align-left position-relative featured-item-card-content h-100 w-100 p-4">
                  <div className="featured-item-card-title text-white">
                    {props.title}                 </div>
                  <div className="featured-item-card-hover-link-text">
                    Read more
                  </div>
                </div>
              </div>
            </div>

            <div className="featured-item-card-image">
              <div data-blazy="" className="blazy blazy--field blazy--field-image blazy--field-image--default field field--name-field-image field--type-entity-reference field--label-hidden field__item blazy--on blazy--first">
                <div className="media media--bundle--image media--blazy media--image is-b-loaded">
                  <img alt="" className="media__image media__element b-lazy img-fluid b-loaded" loading="lazy" src={props.image} typeof="foaf:Image" width="350" height="190" />
                </div>
              </div>
            </div>
            <div className="featured-item-card-content p-3 m-1">
              <div className="featured-item-card-title">
                {props.title}             </div>
            </div>
          </div>
        </a>
      </div>
  );
};

export default Card;

