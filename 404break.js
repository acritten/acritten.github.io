// List of Bandcamp albums (embed URLs + links)
const albums = [
  {
    embed: "https://bandcamp.com/EmbeddedPlayer/album=2069212504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/",
    link: "https://celer.bandcamp.com/album/you-and-i-cant-ever-change-expanded",
    title: "You and I Can't Ever Change (Expanded) by Celer"
  },
  {
    embed: "https://bandcamp.com/EmbeddedPlayer/album=4007327579/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/",
    link: "https://steamroom.bandcamp.com/album/steamroom-40",
    title: "Steamroom 40 by Jim O'Rourke"
  },
  {
    embed: "https://bandcamp.com/EmbeddedPlayer/album=3077526983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/",
    link: "https://acritten.bandcamp.com/album/maybe-if-i-really-tried-with-all-of-my-heart",
    title: "Maybe If I Really Tried With All Of My Heart by evergreen avenue"
  },
  {
    embed: "https://bandcamp.com/EmbeddedPlayer/album=594369267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/",
    link: "https://celer.bandcamp.com/album/before-you-know-it",
    title: "Before You Know It by Celer"
  },
  {
    embed: "https://archive.org/embed/basic-channel-quadrant-dub-01-quadrant-dub-i",
    link: "https://archive.org/details/basic-channel-quadrant-dub-01-quadrant-dub-i",
    title: "Quadrant Dub by Basic Channel"
  }
  // add more...
];

// List of artworks
const artworks = [
  {
    img: "/assets/gursky_singapore.jpg",
    caption: `"Singapore Port" by Andreas Gursky`,
    link: "https://www.andreasgursky.com/en/works/1997/singapore-1"
  },
  {
    img: "/assets/gursky_rhineii.jpg",
    caption: `"Rhein II" by Andreas Gursky`,
    link: "https://www.andreasgursky.com/en/works/1999/rhein-ii"
  },
  {
    img: "/assets/winter_amwehr1.jpg",
    caption: `"Am Wehr" by Fritz Winter`,
    link: "https://www.lenbachhaus.de/digital/sammlung-online/detail/zyklus-am-wehr-1-untertitel-stroemen-fliessen-stuerzen-30004349"
  },
  {
    img: "/assets/kusuma_infinityroom.jpg",
    caption: `"Infinity Room" by Yayoi Kusama`,
    link: "https://www.yayoi-kusama.jp/"
  },
  {
    img: "/assets/hiroshige_100views35.jpg",
    caption: "Suijin Shrine and Massaki on the Sumida River (隅田川水神の森真崎) by Hiroshige",
    link: "https://en.wikipedia.org/wiki/One_Hundred_Famous_Views_of_Edo"
  }
  // add more...
];

// Utility: pick a random item from an array
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Inject into page after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Music
  const album = randomChoice(albums);
  document.getElementById("music").innerHTML = `
    <iframe style="border:0; width:100%; height:120px;" src="${album.embed}" seamless>
      <a href="${album.link}">${album.title}</a>
    </iframe>
  `;

  // Artwork
  const art = randomChoice(artworks);
  document.getElementById("artwork").innerHTML = `
    <img alt="${art.caption}" src="${art.img}" style="height:100%; width:100%; object-fit:contain" />
    <figcaption><a href="${art.link}">${art.caption}</a></figcaption>
  `;
});
