import { Link } from "react-router-dom";

function FeaturePost() {
  return (
    <div className="flex flex-col lg:flex-row mt-8 gap-4 justify-around">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <img src="featured1.jpeg" className="rounded-3xl object-cover" />
        <div className="flex items-center gap-4">
          <h1>01.</h1>
          <Link className="text-blue-500">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <h1 className="text-xl font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.?
        </h1>
      </div>
      <div className=" w-full lg:w-1/2 flex flex-col gap-4">
        <div className=" lg:h-1/3 flex justify-between gap-4">
          <img
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="flex-col">
            <div className="flex items-center gap-4">
              <h1>01.</h1>
              <Link className="text-blue-500">Web Design</Link>
              <span>2 days ago</span>
            </div>
            <h1 className="text-xl font-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.?
            </h1>
          </div>
        </div>

        <div className=" lg:h-1/3 flex justify-between gap-4">
          <img
            src="featured3.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="flex-col">
            <div className="flex items-center gap-4">
              <h1>01.</h1>
              <Link className="text-blue-500">Web Design</Link>
              <span>2 days ago</span>
            </div>
            <h1 className="text-xl font-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.?
            </h1>
          </div>
        </div>

        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="featured4.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="flex-col">
            <div className="flex items-center gap-4">
              <h1>01.</h1>
              <Link className="text-blue-500">Web Design</Link>
              <span>2 days ago</span>
            </div>
            <h1 className="text-xl font-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturePost;
