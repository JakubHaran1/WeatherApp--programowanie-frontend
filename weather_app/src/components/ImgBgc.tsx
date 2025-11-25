export default function ImgBgc({ link }: { link: string }) {
  return (
    <div className="img-bgc flex items-center justify-center row-start-1 row-end-2 absolute overflow-hidden  md:row-end-3  ">
      <img src={"https:" + link} alt="" className="pt-5" />
    </div>
  );
}
