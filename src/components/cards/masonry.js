// import React, { useState, useEffect } from "react";
// import GalleryCard from "./gallery-card";

// const Masonry = ({ items }) => {
//   const [columns, setColumns] = useState(1);

//   useEffect(() => {
//     const data = items.map((item, index) => {
//       return {
//         id: index,
//         width: item.width,
//         height: item.height,
//       };
//     });
//     setColumns(Math.max(2, Math.floor(window.innerWidth / 200)));
//   }, [items]);

//   const renderItem = ({ item, index }) => {
//     const col = index % columns;
//     return <GalleryCard key={index} item={item} />;
//   };

//   return <div className="masonry">{items.map(renderItem)}</div>;
// };

// export default Masonry;
export default null;