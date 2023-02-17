import Bnav from "@/components/Bnav";
import axios from "axios";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import Link from "next/link";
import uuid from "react-uuid";

export default function easy({
  level,
  data,
}: {
  level: string;
  data: { level: number; done: boolean }[];
}) {
  const currentLevel = data.findIndex((item) => item.done === false);
  return (
    <div>
      <h1 className="text-6xl text-center py-10">{level}</h1>
      <div className="grid text-black grid-cols-6 gap-10 p-10 bg-accent rounded-2xl mb-20 max-w-4xl w-full mx-auto">
        {data.map((item, index) => {
          return (
            <Link
              style={index <= currentLevel?{}:{ pointerEvents: "none" }}
              className={`btn  aspect-square h-20 ${
                item.done
                  ? "btn-success"
                  : index === currentLevel
                  ? "btn-primary"
                  : "btn-primary btn-outline"
              }`}
              href={"./" + level + "/" + item.level.toString()}
              key={uuid()}
            >
              {item.level}
            </Link>
          );
        })}
      </div>
      <Bnav />
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const response = await axios.get(`http://localhost:3000/api/levels/${id}`);
  const data = await response.data;
  return {
    props: {
      level: id,
      data,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: ["/levels/easy", "/levels/medium", "/levels/hard"],
    fallback: false,
  };
}
