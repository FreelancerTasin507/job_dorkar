import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" lg:mt-[20%] md:mt-[30%] mt-[60%] ml-[45%]">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
