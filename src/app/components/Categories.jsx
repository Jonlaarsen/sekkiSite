import { Catagories} from "../data/Data";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col md:flex-row gap-4 w-screen h-screen items-center justify-center pb-1 md:pb-10">
        {Catagories.map((item) => (
          <div
            key={item.id}
          >
            <Link href={`work#${item.category}`}>
            <div
              id={item.id}
              key={item.id}
              style={{ backgroundImage: `url(${item.thumbnail})` }}
              className="flex group opacity-60 hover:opacity-100 items-center justify-center w-[20rem] bg-red-600 h-[10rem] md:w-[29rem] md:h-[35rem] bg-cover bg-center"
            >
              <h1 className="text-[1rem] md:text-4xl opacity-100 group-hover:opacity-0">
                {item.title}
              </h1>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
