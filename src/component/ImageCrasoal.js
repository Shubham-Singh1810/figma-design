import React from "react";
function ImageCrasoal({imageArr}) {
  return (
    <div className="Slide">
      {imageArr.map((v, i)=>{
        return(
            <img src={v}/>
        )
      })}
    </div>
  );
}

export default ImageCrasoal;
