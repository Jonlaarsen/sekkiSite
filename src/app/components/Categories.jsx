import { Catagories} from "../data/Data";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="h-full w-screen pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {Catagories.map((item) => (
          <div
            key={item.id}
          >
            <Link href={`work#${item.category}`}>
            <div
              id={item.id}
              key={item.id}
              style={{ backgroundImage: `url(${item.thumbnail})` }}
              className="flex object-fill group opacity-60 hover:opacity-100 items-center justify-center bg-red-600 h-[13rem]  md:h-[35rem] bg-cover bg-center"
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
