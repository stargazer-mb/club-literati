import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

import test1 from "../../resources/imgs/news.jpg";
import test2 from "../../resources/imgs/tedx/tedxmlrit.jpg";
import test3 from "../../resources/imgs/lit fest/lit fest.jpg";
import test4 from "../../resources/imgs/parallax/bg1.jpg";
import test5 from "../../resources/imgs/parallax/bg2.jpg";
import test6 from "../../resources/imgs/parallax/bg3.jpg";
import test7 from "../../resources/imgs/mun/mun.jpg";
import test8 from "../../resources/imgs/clblit.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "80vw",
    height: "auto",
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: "translateZ(0)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const imageList = [
  {
    img: test1,
    featured: true,
  },
  {
    img: test2,
    featured: false,
  },
  {
    img: test3,
    featured: false,
  },
  {
    img: test4,
    featured: false,
  },
  {
    img: test5,
    featured: true,
  },
  {
    img: test6,
    featured: false,
  },
  {
    img: test7,
    featured: false,
  },
  {
    img: test8,
    featured: true,
  },
];

export default function Gallery() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList gap={2} className={classes.imageList}>
        {/*rowHeight={} prop*/}
        {imageList.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.featured ? 2 : 1}
            rows={item.featured ? 2 : 1}
          >
            <img
              src={item.img}
              alt='reload page'
              style={{ width: "100%", height: "auto" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
