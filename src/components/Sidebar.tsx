import Image from "next/image";

export default function Sidebar() {
  return (
    <div className={"sidebar"}>
      <div className="sidebar-title">
        <Image src="/favicon.ico" alt="favicon" width={48} height={48} />
        <h1 className="sidebar-title-text">イアのサイト(低予算版)</h1>
      </div>
      <div>
        <p style={{ fontSize: "0.8rem" }}>しがないアクセスカウンター</p>
        <Image
          src="https://count.getloli.com/@i14a-legacy?name=i14a-legacy&theme=moebooru&padding=7&offset=0&align=center&scale=1&pixelated=1&darkmode=0"
          alt="access counter"
          width="315"
          height="100"
          unoptimized
          className={"accesscounter"}
        />
      </div>
    </div>
  );
}
