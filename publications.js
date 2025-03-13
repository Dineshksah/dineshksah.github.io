// document.addEventListener("DOMContentLoaded", function () {
//     // Fetch Journal Publications
//     fetch('journals.json')
//         .then(response => response.json())
//         .then(data => {
//             let journalsList = document.getElementById("journals-list");
//             journalsList.innerHTML = "";
//             data.forEach(journal => {
//                 let listItem = `
//                     <li class="list-group-item">
//                         <strong>${journal.title}</strong> - ${journal.authors} <br>
//                         <em>${journal.journal}, ${journal.year} [Impact Factor: ${journal.impact_factor}]</em> <br>
//                         <a href="${journal.link}" target="_blank" class="btn btn-sm btn-primary mt-2">Read More</a>
//                     </li>
//                 `;
//                 journalsList.innerHTML += listItem;
//             });
//         })
//         .catch(error => console.error("Error loading journals:", error));

//     // Fetch Conference and Book Chapter Publications
//     fetch('papers.json')
//         .then(response => response.json())
//         .then(data => {
//             let papersList = document.getElementById("papers-list");
//             papersList.innerHTML = "";
//             data.forEach(paper => {
//                 let listItem = `
//                     <li class="list-group-item">
//                         <a href="${paper.link}" target="_blank">${paper.title}</a> - ${paper.authors} (${paper.year})
//                     </li>
//                 `;
//                 papersList.innerHTML += listItem;
//             });
//         })
//         .catch(error => console.error("Error loading papers:", error));
// });




document.addEventListener("DOMContentLoaded", function () {
    // Fetch Journal Publications
    fetch('journals.json')
        .then(response => response.json())
        .then(data => {
            let journalsList = document.getElementById("journals-list");
            journalsList.innerHTML = "";
            data.forEach(journal => {
                let journalEntry = `
                    <div class="card shadow border-0 rounded-4 mb-5">
                        <div class="card-body p-5">
                            <div class="row align-items-center gx-5">
                                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div class="bg-light p-4 rounded-4">
                                        <div class="text-primary fw-bolder mb-2">${journal.year}</div> <!-- Year -->
                                        <div class="small fw-bolder">${journal.journal}</div> <!-- Journal Name -->
                                        <div class="small text-muted">Impact Factor: ${journal.impact_factor}</div> <!-- Impact Factor -->
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div><strong>${journal.title}</strong> - ${journal.authors}</div> <!-- Paper Title & Authors -->
                                    <a href="${journal.link}" class="btn btn-sm btn-primary mt-2" target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>`;
                journalsList.innerHTML += journalEntry;
            });
        })
        .catch(error => console.error("Error loading journals:", error));

    // Fetch Conference and Book Chapter Publications
    fetch('papers.json')
        .then(response => response.json())
        .then(data => {
            let papersList = document.getElementById("papers-list");
            papersList.innerHTML = "";
            data.forEach(paper => {
                let paperEntry = `
                    <div class="card shadow border-0 rounded-4 mb-5">
                        <div class="card-body p-5">
                            <div class="row align-items-center gx-5">
                                <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div class="bg-light p-4 rounded-4">
                                        <div class="text-primary fw-bolder mb-2">${paper.year}</div> <!-- Year -->
                                        <div class="small fw-bolder">${paper.conference}</div> <!-- Conference Name -->
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div><strong>${paper.title}</strong> - ${paper.authors}</div> <!-- Paper Title & Authors -->
                                    <a href="${paper.link}" class="btn btn-sm btn-primary mt-2" target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>`;
                papersList.innerHTML += paperEntry;
            });
        })
        .catch(error => console.error("Error loading papers:", error));
});
