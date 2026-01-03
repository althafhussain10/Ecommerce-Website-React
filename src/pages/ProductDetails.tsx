import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <section className="px-6 py-10">
      <h1 className="text-2xl font-semibold">Product Details</h1>
      <p className="mt-2 text-gray-600">Product ID: {id}</p>
    </section>
  );
};

export default ProductDetails;