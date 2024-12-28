import Comments from "../components/Comments";
import PostMenuActions from "../components/PostMenuActions";
import Sidemenu from "../components/Sidemenu";

function SinglePostPage() {
  return (
    <div>
      <div className="flex gap-2">
        <div className="lg:w-3/5 flex flex-col gap-3">
          <h1 className="text-5xl font-semibold">
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
        </div>
        <img
          src="/featured3.jpeg"
          className=" hidden lg:block w-2/5 rounded-2xl"
        />
      </div>
      <div className="flex mt-5">
        <div className="lg:text-lg space-x-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            perferendis nulla asperiores ab quaerat autem in nemo voluptatum,
            est iste sint impedit dolorem architecto ullam numquam non ea. Quae,
            tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia perferendis nulla asperiores ab quaerat autem in nemo
            voluptatum, est iste sint impedit dolorem architecto ullam numquam
            non ea. Quae, tempore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            perferendis nulla asperiores ab quaerat autem in nemo voluptatum,
            est iste sint impedit dolorem architecto ullam numquam non ea. Quae,
            tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia perferendis nulla asperiores ab quaerat autem in nemo
            voluptatum, est iste sint impedit dolorem architecto ullam numquam
            non ea. Quae, tempore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            perferendis nulla asperiores ab quaerat autem in nemo voluptatum,
            est iste sint impedit dolorem architecto ullam numquam non ea. Quae,
            tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia perferendis nulla asperiores ab quaerat autem in nemo
            voluptatum, est iste sint impedit dolorem architecto ullam numquam
            non ea. Quae, tempore? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officia perferendis nulla asperiores ab quaerat
            autem in nemo voluptatum, est iste sint impedit dolorem architecto
            ullam numquam non ea. Quae, tempore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            perferendis nulla asperiores ab quaerat autem in nemo voluptatum,
            est iste sint impedit dolorem architecto ullam numquam non ea. Quae,
            tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia perferendis nulla asperiores ab quaerat autem in nemo
            voluptatum, est iste sint impedit dolorem architecto ullam numquam
            non ea. Quae, tempore?
          </p>
        </div>
        <div>
          <PostMenuActions />
        </div>
      </div>
      <h1 className="mt-10">Comments</h1>
      <Comments />
    </div>
  );
}

export default SinglePostPage;
