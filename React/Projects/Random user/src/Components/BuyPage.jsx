import { useState, useEffect } from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { Container, Row, Col } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "WC3R4x4IbGRCwTz6cyu0x7C8mj6XS36VYdDXSeDFNhV0ZBraRIJDoRIO";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localUrl = "https://api.jsonbin.io/v3/qs/647c70bb8e4aa6225ea908b8";

function BuyPage({ addToCart }) {
  const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => {
  //     const response = await axios.get(url, {
  //       headers: {
  //         Authorization: apiKey,
  //       },
  //     });
  //     };

  // fetch with hosted json
  const fetchPhotos = async () => {
    const response = await axios.get(localUrl);
    const photos = response.data.record.photos;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      id: Math.floor(Math.random() * 100),
    }));

    setProduct(allProduct);
    console.log(product);
  };

  // useeffect
  // useEffect(() => {
  //   fetchPhotos();
  // }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BuyPage;
