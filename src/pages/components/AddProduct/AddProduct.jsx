import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../store/product.js";
import { sendProductData } from "../../../store/product-actions.js";
import { useEffect, useState } from "react";
import Form from "../Form.jsx";
import { AlertDefault } from "../UI/AlertDefault.jsx";

let WE_JUST_LANDED = true;
const AddProduct = () => {
  const [isUploading, setIsUploading] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onFormSubmit = async (event) => {
    setIsUploading(true);

    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    const desktopImage = await convertToBase64(data.desktop_image);
    const tabletImage = await convertToBase64(data.tablet_image);
    const mobileImage = await convertToBase64(data.mobile_image);

    dispatch(
      productActions.updateProduct({
        id: Math.random() * 100,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        deskImg: desktopImage,
        tabImg: tabletImage,
        mobImg: mobileImage,
      })
    );
    setIsUploading(false);
  };

  useEffect(() => {
    if (WE_JUST_LANDED) {
      WE_JUST_LANDED = false;
      return;
    } else {
      setIsUploading(true);
      dispatch(sendProductData({ ...product }));
      setIsUploading(false);
    }
  }, [product, dispatch]);

  return (
    <>
      <section className="2xl:w-1/3 lg:w-1/2 w-11/12 p-4 rounded-lg bg-gray-100 shadow-xl">
        <Form submitHandler={onFormSubmit} />
      </section>
      <AlertDefault isActive={isUploading} />
    </>
  );
};

export default AddProduct;
