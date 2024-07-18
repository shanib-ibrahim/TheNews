const LatestArticleShimmer = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Latest News</h2>
      <div className="flex justify-around  rounded-lg  overflow-hidden mb-8">
        <div className="bg-shimmer w-[60rem] h-[30rem]  rounded-lg  "></div>
        <div className="p-4 w-full" style={{ border: "1px solid red" }}>
          <div className="bg-shimmer w-[40rem] h-[2rem] text-3xl font-semibold text-gray-800 mb-4 mt-4"></div>
          <div className="bg-shimmer w-[40rem] h-[1rem] text-gray-600 mb-2"></div>
          <div className="bg-shimmer w-[30rem] h-[1rem] text-gray-600 mb-2"></div>
          <div className="bg-shimmer w-[20rem] h-[1rem] text-gray-600 mb-2"></div>
          <div className="inline-block w-[6rem] h-[2.4rem] bg-shimmer hover:bg-black text-white font-semibold px-4 py-2 rounded mt-8"></div>
        </div>
      </div>
    </>
  );
};

export default LatestArticleShimmer;
