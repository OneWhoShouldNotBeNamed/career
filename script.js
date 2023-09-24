const ProfileAnalysis = JSON.parse(sessionStorage.getItem("ProfileAnalysis"));
const Insights = JSON.parse(sessionStorage.getItem("Insight"));
var submenuContent = [
  [
    "Quick Summary",
    "Skills",
    "Opportunities",
    "Market Analysis",
    "Recommendations for Improvement",
  ],
  [
    "Profile Analysis",
    "Knowledge Economy Interventions",
    "Strategy",
    "Action Plan",
    "Ecosystem Creation",
    "Suggestions for the Knowledge Economy Advisor",
  ],
  // Add more submenu items for other main menu items here
];

function showSubMenu(submenuNumber) {
  var submenuList = document.getElementById("submenu-content");

  // Clear existing submenu items
  submenuList.innerHTML = "";
  submenuContent[submenuNumber].forEach(function (item) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    submenuList.appendChild(li);
    li.classList.add("list-contents");
  });
  if (submenuNumber === 0) {
    contentLoad(ProfileAnalysis, submenuContent[0]);
  } else if (submenuNumber === 1) {
    {
      contentLoad(Insights, submenuContent[1]);
    }
  }
}

function contentLoad(data, menu) {
  var contentList = document.getElementById("content");

  contentList.innerHTML = "";

  var keys = Object.keys(data);
  // Loop through the keys and create div elements for each key and content
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var content = data[key];
    // Create a div element
    var divElement = document.createElement("div");
    // Create an h5 element with the key as text content
    var h5Element = document.createElement("h5");
    h5Element.textContent = menu[i];
    // Create a p element with the content as text content
    var pElement = document.createElement("p");
    pElement.textContent = content;
    // Append the h5 and p elements to the div
    divElement.appendChild(h5Element);
    divElement.appendChild(pElement);
    contentList.appendChild(divElement);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  contentLoad(ProfileAnalysis, submenuContent[0]);
});
function navigate() {
  //pull data from API
  //  var id = sessionStorage.getItem('Id');
  var id = 1;
  fetch(
    `https://commerce-onewhoshouldnotbenamed.vercel.app/api/data?sheet=CareerSparsh&id=${id}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data,typeof(data))

      sessionStorage.setItem("CCS", JSON.stringify(data[0]));
      sessionStorage.setItem("DACC", JSON.stringify(data[1]));
      sessionStorage.setItem("CSA", JSON.stringify(data[2]));

      window.location.href = "./career.html"; // Replace with your desired URL
    })
    .catch((error) => console.error("Error fetching data:", error));
}
