import { Link } from "react-router-dom";

function PostListItem() {
  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-4 my-5">
        <img
          src="/postImg.jpeg"
          className="xl:w-1/3 rounded-3xl object-fill aspect-video md:hidden xl:block "
        />
        <div className="flex flex-col justify-around">
          <h1 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            nesciunt ipsam.
          </h1>
          <div className="space-x-2">
            <span className="text-sm">Wriiten by</span>
            <span className="text-blue-500 text-sm">John Doe</span>
            <span className="text-sm">Web Design</span>
            <span className="text-sm">2 days ago</span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut,
            corrupti placeat quae ad error esse totam vitae consequuntur
            nesciunt repellat aperiam dolores! Aut voluptatibus numquam dicta
            consectetur iusto, est optio.
          </p>
          <Link className="text-blue-600">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default PostListItem;
