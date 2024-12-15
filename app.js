const slider = document.querySelector('.slider');

// Array of background images
const images = [
    './img/Places-To-Visit-In-India.webp',
    './img/india_best_main.jpg',
];

let currentI = 0;

// Function to change background image
function changeBackground() {
    slider.style.backgroundImage = `url(${images[currentI]})`;
    currentI = (currentI + 1) % images.length; // Loop back to the first image
}

// Start the background slider
setInterval(changeBackground, 8000); // Change every 3 seconds

// Initialize the first background
changeBackground();


// for to-do-list

var taskInput=document.querySelector("#taskInput");
var addTaskBtn=document.querySelector("#addTaskBtn");
var taskList=document.querySelector("#taskList");



function doneTodo(listItem){
    listItem.classList.toggle('doneList');

}
function delTodo(listItem){
    listItem.parentNode.remove();
}
    
function addTask() {
    if (taskInput.value != "") {
        taskList.innerHTML = taskList.innerHTML + `<li onclick="doneTodo(this)">
            <span>${taskInput.value}</span>
            <i class="fa-solid fa-xmark" onclick="delTodo(this)"></i>
            </li>`;
        taskInput.value = "";
    } else {
        alert("Please enter a task");
    }
}
  
addTaskBtn.addEventListener("click", addTask);

// Event listener for Enter key
taskInput.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
addTask();
}
})


// slider 

let currentSlide = 1;
const totalSlides = 5;

function nextSlide() {
  currentSlide = (currentSlide % totalSlides) + 1;
  document.getElementById(`${currentSlide}`).checked = true;
}

setInterval(nextSlide, 6000); // Change slide every 3 seconds


// accordian 


const qus=document.querySelectorAll('.qus');
const ans=document.querySelectorAll('.ans')
const plus=document.querySelectorAll('.plus');
const mins=document.querySelectorAll('.mins')
const tab=document.querySelectorAll('.tab')
qus.forEach(function(qus, index) {
    qus.addEventListener('click', function() {
        // Close all other tabs
        ans.forEach((otherAns, otherIndex) => {
            if (otherIndex !== index) {
                otherAns.classList.remove('display');
                plus[otherIndex].style.display = "block";
                mins[otherIndex].style.display = "none";
            }
        });

        // Toggle the current tab
        ans[index].classList.toggle('display');
        if (ans[index].classList.contains('display')) {
            plus[index].style.display = "none";
            mins[index].style.display = "block";
        } else {
            plus[index].style.display = "block";
            mins[index].style.display = "none";
        }
    });
});
const popupOverlay = document.getElementById("popupOverlay");
const openPopupButton = document.querySelector(".book-now-btn");
const closePopupButton = document.getElementById("closePopup");

openPopupButton.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

// Close Popup form
closePopupButton.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

// Close Popup When Clicking Outside
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});

// Handle Form Submission
document.getElementById("popupBookingForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  let isValid = true;

    // Validate Name
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
      nameError.textContent = 'Name is required.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailError.textContent = 'Invalid email address.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

    // Validate Phone
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^[0-9]{10}$/; // Adjust as needed
    if (!phonePattern.test(phone.value)) {
      phoneError.textContent = 'Phone number must be 10 digits.';
      isValid = false;
    } else {
      phoneError.textContent = '';
    }
 


    // Validate Destination
    const destination = document.getElementById('destination');
    const destinationError = document.getElementById('destinationError');
    if (destination.value === '') {
      destinationError.textContent = 'Please select a destination.';
      isValid = false;
    } else {
      destinationError.textContent = '';
    }

    // If form is valid, submit it
    if (isValid==true) {
      alert('Form submitted successfully!');
      popupOverlay.style.display = 'none'; // Close the popup
    }
  });

//   notes app



const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");
// Select content textareas
const notes =document.querySelectorAll(".note .content"); 
 // Select title textareas
 const titles = 
 document.querySelectorAll(".note .title"); 

// Click event listener
addBtn.addEventListener("click", function () {
    addNote();
});

// Save button function
const saveNotes = () => {
const data = [];

    notes.forEach((note, index) => {
        const content = note.value;
        const title = titles[index].value;
        console.log(title);
        if (content.trim() !== "") {
            data.push({ title, content });
        }
    });

    const titlesData = 
        data.map((item) => item.title);
    console.log(titlesData);
    localStorage.setItem(
        "titles", JSON.stringify(titlesData));

    const contentData = 
        data.map((item) => item.content);
    localStorage.setItem(
        "notes", JSON.stringify(contentData));
};

// Addnote button function
const addNote = (text = "", title = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="icons">
         <i class="save fas fa-save" 
             style="color:red">
         </i>
         <i class="trash fas fa-trash" 
             style="color:yellow">
         </i> 
    </div>
    <div class="title-div">
        <textarea class="title" 
            placeholder="Write the title ...">${title}
        </textarea>
    </div>
    <textarea class="content" 
        placeholder="Note down your thoughts ...">${text}
    </textarea>
    `;
    function handleTrashClick() {
        note.remove();
        saveNotes();
    }
    function handleSaveClick() {
        saveNotes();
    }
    const delBtn = note.querySelector(".trash");
    const saveButton = note.querySelector(".save");
    const textareas = note.querySelectorAll("textarea");

    delBtn.addEventListener("click", handleTrashClick);
    saveButton.addEventListener("click", handleSaveClick);
    main.appendChild(note);
    saveNotes();
};

// Loading all the notes those are saved in 
// the localstorage
function loadNotes() {

    const titlesData = 
        JSON.parse(localStorage.getItem("titles")) || [];
    const contentData = 
        JSON.parse(localStorage.getItem("notes")) || [];
        
    for (let i = 0; 
            i < Math.max(
                titlesData.length, contentData.length); i++) {
        addNote(contentData[i], titlesData[i]);
    }
}
loadNotes();

// light box 
 var sliderimg = document.querySelectorAll('.item');
 var lightbox = document.getElementById('lightbox'); // Lightbox container
var lightboxImage = document.getElementById('lightbox-image'); 

var poe = 0;

function next() {
    console.log(sliderimg.length)
    if (sliderimg.length - 4 <= poe) return
    //3<=3
    poe += 1
    for (var i = 0; i < sliderimg.length; i++) {
        sliderimg[i].style.transform = `translateX(-${poe * 250}px)`
    }

}

function prev() {
    if (poe == 0) return
    poe -= 2
    for (var i = 0; i < sliderimg.length; i++) {
        sliderimg[i].style.transform = `translateX(-${poe * 250}px)`
    }

}
function openLightbox(index) {
    currentIndex = index; // Set the current index
    lightbox.style.display = 'flex'; // Show the lightbox
    lightboxImage.src = sliderimg[currentIndex].querySelector('img').src; // Set the lightbox image
}

// Close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none'; // Hide the lightbox
}

// Show the next image in the lightbox
function lightboxNext() {
    if (currentIndex < sliderimg.length - 1) {
        currentIndex++; // Increment the current index
        lightboxImage.src = sliderimg[currentIndex].querySelector('img').src;
        console.log(sliderimg[currentIndex].querySelector('img').src) // Update lightbox image
    }
}

// Show the previous image in the lightbox
function lightboxPrev() {
    if (currentIndex > 0) {
        currentIndex--; // Decrement the current index
        lightboxImage.src = sliderimg[currentIndex].querySelector('img').src; // Update lightbox image
    }
}
