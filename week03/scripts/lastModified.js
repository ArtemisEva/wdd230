function displayLastModifiedDate() {
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleDateString(); // Extract date only
    document.getElementById("lastModifiedDate").textContent = formattedDate;
}
displayLastModifiedDate();
