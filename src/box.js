import { BsPlayCircle } from "react-icons/bs";

export default function Box({music, circular}) {
  return (
    <div className={circular ? "circularBox" : "boxDefault"}>
      <div className="boxTitle">{music}</div>
      <button className="buttonTransparent"><BsPlayCircle className="faIcon"/></button>
    </div>
  )
}