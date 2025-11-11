
    // Question 1

    let mainContent = document.getElementById("main-content");
    console.log("Main Content:", mainContent);

    console.log("Children of main-content:");
    console.log(mainContent.children);


    let renderElements = document.getElementsByClassName("render");
    for (let i = 0; i < renderElements.length; i++) {
      document.write(renderElements[i].innerHTML + "<br>");
      console.log("Render Element:", renderElements[i].innerHTML);
    }

    document.getElementById("first-name").value = "Alex";

    // (v) 
    document.getElementById("last-name").value = "Bank";
    document.getElementById("email").value = "alexbank@example.com";

    // ---------------------------
    // Question 2
   

    // (i)
    let formContent = document.getElementById("form-content");
    console.log("Node type of form-content:", formContent.nodeType);

    // (ii) 
    let lastName = document.getElementById("lastName");
    console.log("Node type of lastName:", lastName.nodeType);
    console.log("Child node of lastName:", lastName.childNodes[0]);
    console.log("Node type of child node:", lastName.childNodes[0].nodeType);

    // (iii) 
    lastName.childNodes[0].nodeValue = "Last Name: Updated Bank";
    console.log("Updated lastName:", lastName.innerHTML);

    // (iv) 
    console.log("First child of main-content:", mainContent.firstChild);
    console.log("Last child of main-content:", mainContent.lastChild);

    // (v) 
    console.log("Next sibling of lastName:", lastName.nextElementSibling);
    console.log("Previous sibling of lastName:", lastName.previousElementSibling);

    // (vi) 
    let email = document.getElementById("email");
    console.log("Parent node of email:", email.parentNode);
    console.log("Node type of email:", email.nodeType);

