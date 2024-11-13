import Input from "./UI/Input";

const Form = ({ submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <Input label="Product name" id="name" />
      <div className="sm:flex justify-between gap-4">
        <Input
          label="Product Price"
          id="price"
          additionalClasses="w-full mb-4 sm:mb-0"
        />
        <Input
          label="Available quantity"
          id="quantity"
          name="quantity"
          additionalClasses="w-full"
        />
      </div>

      <div className="sm:flex justify-between gap-2 items-stretch">
        <Input
          icon="+"
          label="Add image for desktop version"
          labelClasses="py-8 bg-blue-gray-50 flex justify-center mt-4 cursor-pointer text-center"
          id="desktop_image"
          type="file"
          additionalClasses="w-full"
          inpClasses="hidden"
          accept="image/*"
        />

        <Input
          icon="+"
          label="Add image for tablet version"
          labelClasses="py-8 bg-blue-gray-50 flex justify-center mt-4 cursor-pointer text-center"
          id="tablet_image"
          type="file"
          additionalClasses="w-full"
          inpClasses="hidden"
          accept="image/*"
        />

        <Input
          icon="+"
          label="Add image for mobile version"
          labelClasses="py-8 bg-blue-gray-50 flex justify-center mt-4 cursor-pointer text-center"
          id="mobile_image"
          type="file"
          additionalClasses="w-full"
          inpClasses="hidden"
          accept="image/*"
        />
      </div>

      <button
        type="submit"
        className="bg-red-800 w-full py-4 text-gray-50 font-bold rounded-md hover:bg-red-900 transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
