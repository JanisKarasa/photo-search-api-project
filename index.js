let searchForm = document.querySelector("#search-form");

// // --- PHOTO SEARCH --- //
// searchForm.addEventListener("submit", function (e) {
//   // preventing a Default - Clicking on a "Submit" button, prevent it from submitting a form
//   e.preventDefault();

//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       // document.getElementById("demo").innerHTML = xhttp.responseText;
//       data = JSON.parse(xhttp.responseText);
//       console.log("First data:" + data);

//       // Mapping the part of JSON to see and extract what key-value pairs/objects are in our data. Returns and Array
//       let photoData = data.photos.map(function (photo) {
//         console.log("Items: " + photo);
//         return photo;
//       });
//       // or can be used this solution...
//       // let videoData = data.videos;
//       console.log("photoData: " + JSON.stringify(photoData));

//       // selecting a container to append a new div for each video
//       let container = document.querySelector("#content-container");

//       // resetting previous search results before load new search results
//       container.innerHTML = "";

//       // Looping trough - For each photo in (search result) photoData array ...
//       photoData.forEach(function (photo) {
//         // ... create a div element and giving a class to add some styles
//         let photoDiv = document.createElement("div");
//         photoDiv.classList.add("content-div");
//         // ... and populate that div with information
//         photoDiv.innerHTML = `
//                   <img src=${photo.src.original}>
//               `;
//         // ... and appending that videoDiv to a container #video-divs
//         container.appendChild(photoDiv);
//       });
//     }
//   };
//   // getting a value from Search Bar ...
//   let textValue = document.querySelector("#search-bar").value;
//   xhttp.open(
//     // Requesting a Search endpoint
//     "GET",
//     `https://api.pexels.com/v1/search?query=${textValue}&per_page=20`,
//     true
//   );

//   xhttp.setRequestHeader(
//     "Authorization",
//     "OU1tP3Dct9DhJHSoJUYTYrnNpfZvpcPRJPZsofyDldKCSlwqtlgBYc8l"
//   );
//   xhttp.send();
// });

// --- VIDEO SEARCH --- //
searchForm.addEventListener("submit", function (e) {
  // preventing a Default - Clicking on a "Submit" button, prevent it from submitting a form
  e.preventDefault();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      // document.getElementById("demo").innerHTML = xhttp.responseText;
      data = JSON.parse(xhttp.responseText);
      console.log("First data:" + data);

      // Mapping the part of JSON to see and extract what key-value pairs/objects are in our data. Returns and Array
      let videoData = data.videos.map(function (video) {
        console.log("Items: " + video);
        return video;
      });
      // or can be used this solution...
      // let videoData = data.videos;
      console.log("videoData: " + JSON.stringify(videoData));

      // selecting a container to append a new div for each video
      let container = document.querySelector("#content-container");

      // selecting columns to spread/stack the content evenly
      let contentColumns = document.querySelectorAll(".content-column");
      let contentColumn1 = document.getElementById("content-column1");
      let contentColumn2 = document.getElementById("content-column2");
      let contentColumn3 = document.getElementById("content-column3");

      // resetting previous search results before load new search results
      // container.innerHTML = "";
      contentColumn1.innerHTML = "";
      contentColumn2.innerHTML = "";
      contentColumn3.innerHTML = "";
      let i = 0;

      // Looping trough - For each video in (search result) videoData array ...
      videoData.forEach(function (video) {
        // ... create a div element and giving a class to add some styles
        let videoDiv = document.createElement("div");
        videoDiv.classList.add("content-div");
        // ... and populate that div with information
        videoDiv.innerHTML = `
                <a href=${video.video_files[0].link}>
                  <img src=${video.video_pictures[0].picture}>
                </a>
                `;

        contentColumns[i].appendChild(videoDiv);
        if (i < container.childElementCount - 1) {
          i++;
        } else {
          i = 0;
        }
      });
    }
  };
  // getting a value from Search Bar ...
  let textValue = document.querySelector("#search-bar").value;
  xhttp.open(
    // Requesting a Search endpoint
    "GET",
    `https://api.pexels.com/videos/search?query=${textValue}&per_page=20`,
    true
  );

  xhttp.setRequestHeader(
    "Authorization",
    "OU1tP3Dct9DhJHSoJUYTYrnNpfZvpcPRJPZsofyDldKCSlwqtlgBYc8l"
  );
  xhttp.send();
});
