import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import axios from "axios";
import uuid from "react-uuid";

export default function levels({ data }: { data: { info: number[][][] } }) {
  console.log(data);
  const a = new Array(data.info[0].length * data.info[1].length).fill(1);
  const b = new Array(data.info[0].length).fill(1);
  const c = new Array(data.info[1].length).fill(1);
  return (
    <div>
      <div className="mt-20 aspect-square bg-gray-900 mx-80 grid grid-cols-5 grid-rows-12">
        
      </div>
    </div>
  );
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const response = await axios.get(
    `http://localhost:3000/api/levels/${context.params?.id}/${context.params?.number}`
  );
  const data = await response.data;
  return {
    props: { data },
  };
}
export async function getStaticPaths(context: GetStaticPathsContext) {
  const response = await axios.get("http://localhost:3000/api/levels");
  const data = await response.data;
  const easy = data.easy.map((item: any) => "/levels/easy/" + item.level);
  const medium = data.medium.map((item: any) => "/levels/medium/" + item.level);
  const hard = data.hard.map((item: any) => "/levels/hard/" + item.level);
  const paths = [].concat(medium, hard, easy);
  return {
    paths,
    fallback: false,
  };
}
