let take = document.getElementById("tbl");
let cvb = "";
let color = "";
for (let i = 0; i < 9; i++) {
    cvb += `<tr>`;
    for (let j = 0; j < 9; j++) {
        color = (((i + j) % 8 == 0) || (i==j)) ? "yellow" : "red";
        cvb += `<td style="background-color : ${color} ">  ${i}  ${j} </td>`;
    }
    cvb += `</tr>`;

}

take.innerHTML = cvb;