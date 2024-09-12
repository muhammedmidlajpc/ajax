// $(document).ready(function () {
//   let num = 1;
//   $("#fetchDataButton").click(function () {
//     console.log("svf");

//     $.ajax({
//       url: `https://jsonplaceholder.typicode.com/posts/${num}`,
//       type: "GET",
//       success: function (response) {
//         console.log(response);

//         const innerContent = $("#datacontainer").html();
//         $("#datacontainer").html(
//           innerContent +
//             `<h2>${response.title}</h2>
//                 <p>${response.body}</p>`
//         );
//         console.log(typeof innerContent);

//         num++;
//       },
//       error: function (error) {
//         // console.error("error fetching data", error);
//       },
//     });
//   });
// });

let postnum = 1;
const fetchDataButton = document.getElementById("fetchDataButton");
fetchDataButton.addEventListener("click", function () {
  fetchDataButton.textContent = "loading";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `https://jsonplaceholder.typicode.com/posts/${postnum}`);
  xhr.onload = function () {
    var response = JSON.parse(xhr.response);
    console.log(response);
    document.getElementById("datacontainer").innerHTML += `
    <h2>${response.title}</h2>
    <p>${response.body}</p>`;
    postnum++;
    fetchDataButton.textContent = "fetch data";
    console.log(postnum);
    console.log(typeof fetchDataButton);
  };
  xhr.onerror = function () {
    console.error("error");
    fetchDataButton.textContent = "fetch data";
  };
  xhr.send();
});
