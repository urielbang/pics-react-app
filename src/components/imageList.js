import ImageShow from "./imageShow";
function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <ImageShow image={image} />;
  });
  return <div>{renderImages}</div>;
}
export default ImageList;
