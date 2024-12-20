function displayImages(option) {
    const contentDiv = document.getElementById("content");
    
    // Clear the previous content
    contentDiv.innerHTML = "";

    let heading, images, text, documentLink, videoLink;

    // Update content based on the clicked menu item
    switch (option) {
        case 1:
            heading = "CIRCUITO IMPLEMENTADO";
            images = ["./fp1.jpg", 
                      "./fp2.jpg","./fp3.jpg"];
            text = "Fotos y videos del proyecto realizado.";
            documentLink = "./fpb/ifpb.pdf"; // Local document link
            break;
        case 2:
            heading = "CIRCUITO IMPLEMENTADO";
            images = ["./vg1.jpg", 
                      "./vg2.jpg"];
                      text = "Fotos y videos del proyecto realizado.";
                      documentLink = "./VGA/vgi.pdf";
                      break;
        case 3:
            heading = "IMPLEMENTACION";
            images = ["./fireb1.jpg", 
                      "./fireb2.jpg"];
                      documentLink = "./fireb/firebi.pdf"; // Local document link
                      videoLink = "./fireb/firev.mp4"; // Local video link          
                      text = "Fotos y videos del proyecto realizado.";
            break;
        case 4:
            heading = "IMPLEMENTACION";
            images = ["./disc1.jpg", 
                      "./disc2.jpg"];
                      text = "Fotos y videos del proyecto realizado.";
                      documentLink = "./disc/disci.pdf"; // Local document link
                      videoLink = "./disc/discv.mp4"; // Local video link          
                      break;
        case 5:
            heading = "IMPLEMENTACION";
            images = ["./assem1.png", 
                    "./assem2.png","./assem/assem3.png"];
                    text = "Fotos y videos del proyecto realizado.";
                    documentLink = "./assem/assemi.pdf"; // Local document link
                    break;
        default:
            heading = "Bienvenido!";
            text = "Repositorio de trabajos realizados a lo largo de la formacion universitaria.";
            images = [];
    }

    // Add heading
    const headingElement = document.createElement("h2");
    headingElement.innerText = heading;
    contentDiv.appendChild(headingElement);

    // Add images
    images.forEach(imageUrl => {
        const imgContainer = document.createElement("div");
        imgContainer.className = "image-container";
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Image";
        imgContainer.appendChild(img);
        contentDiv.appendChild(imgContainer);
    });

    // Add text
    const textElement = document.createElement("div");
    textElement.className = "text";
    textElement.innerText = text;
    contentDiv.appendChild(textElement);
        // Add document link
        if (documentLink) {
            const linkElement = document.createElement("a");
            linkElement.href = documentLink;
            linkElement.innerText = "Ver el informe";
            linkElement.target = "_blank";
            linkElement.style.display = "block";
            linkElement.style.marginTop = "20px";
            contentDiv.appendChild(linkElement);
        }
    
        // Add video
        if (videoLink) {
            const videoContainer = document.createElement("div");
            videoContainer.className = "video-container";
            const video = document.createElement("video");
            video.src = videoLink;
            video.controls = true;
            video.alt = "Video";
            videoContainer.appendChild(video);
            contentDiv.appendChild(videoContainer);
        }
        const returnButton = document.createElement("button");
        returnButton.className = "return-button";
        returnButton.innerText = "Pagina principal";
        returnButton.onclick = () => {
            contentDiv.innerHTML = '<h1>Bienvenidos!</h1><p>Repositorio de trabajos realizados a lo largo de la formacion universitaria.</p>';
        };
        contentDiv.appendChild(returnButton);
}
