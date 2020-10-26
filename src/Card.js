import React from "react";

export default function Card({img=""}) {
  return (
    <div class="col-md-6 col-lg-4 mb-5">
      <div
        class="portfolio-item mx-auto"
        data-toggle="modal"
        data-target="#portfolioModal3"
      >
        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div class="portfolio-item-caption-content text-center text-white">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src={img} alt="" />
      </div>
    </div>
  );
}
