const CCS = JSON.parse(sessionStorage.getItem("CCS"));
const DACC = JSON.parse(sessionStorage.getItem("DACC"));
const CSA = JSON.parse(sessionStorage.getItem("CSA"));

var submenuContent = [
  [
    "Personal Details",
    "Work Experience",
    "Educational Background",
    "Career Aspirations",
    "Language Proficiency",
    "Future Plans",
    "Key Takeaways",
  ],
  [
    "Personal Information",
    "Educational Background",
    "Career Aspirations",
    "Skillset",
    "Availability and Constraints",
    "Goals and Motivations",
    "Career Development Plan",
    "Potential Career Paths",
    "Attitude and Behavior",
    "Passion and Interests",
    "WorkStyle and Preferences",
    "Emotional Intelligence",
    "Resilience and StressManagement",
    "Adaptability",
    "Risk Taking",
  ],
  [
    "Short-Term Opportunities",
    "Long-Term Opportunities",
    "Skilling Opportunities",
    "Leadership Training",
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
    contentLoad(CSA, submenuContent[0]);
  } else if (submenuNumber === 1) {
    {
      contentLoad(DACC, submenuContent[1]);
    }
  } else if (submenuNumber === 2) {
    {
      contentLoad(CSA, submenuContent[2]);
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
  contentLoad(CSA, submenuContent[0]);
});
