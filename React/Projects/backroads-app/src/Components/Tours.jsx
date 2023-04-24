import React from "react";
import Title from "./Title";
import { tours } from "./Data";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />

        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { id, img, date, titles, info, location, duration, cost } =
              tour;
            console.log(img)
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt={ titles} />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{titles}</h4>
                  </div>
                  <p>{info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{duration}</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
