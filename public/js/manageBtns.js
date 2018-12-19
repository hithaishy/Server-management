// let data = [
//   {
//     'name': 'VSphere 1',
//     'password': '12345',
//     'server': "VM1",
//     'pwd': 'C:\petclinic '
//   },
//   {
//     'name': 'VSphere 3',
//     'password': '12345',
//     'server': "VM1",
//     'pwd': 'C:\petclinic '
//   },
//   {
//     'name': 'VSphere 2',
//     'password': '12345',
//     'server': "VM1",
//     'pwd': 'C:\petclinic '
//   }
// ];

// document.addEventListener('DOMContentLoaded', () => {
//   const planBtn = document.getElementById('btn1');
//   const output = document.getElementById('output');
//   planBtn.addEventListener('click', function (e) {
//     console.log('button was clicked');

//     fetch('/plan', { method: 'POST' })
//       .then(response => response.text()).then(resp => {
//         console.log(JSON.stringify(resp))

//         //let text = document.createTextNode(resp);
//         resp = resp.replace(/\r\n/g, '<br />');
//         //let nresp = text2HTML(resp);
//         output.innerHTML = resp;
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });
//   const createBtn = document.getElementById('btn2');
//   const destroyBtn = document.getElementById('btn3');
// });

// function text2HTML(text) {
//   // 1: Plain Text Search
//   var text = text.replace(/&/g, "&amp;").
//     replace(/</g, "&lt;").
//     replace(/>/g, "&gt;");

//   // 2: Line Breaks
//   text = text.replace(/\r\n?|\n/g, "<br>");

//   // 3: Paragraphs
//   text = text.replace(/<br>\s*<br>/g, "</p><p>");

//   // 4: Wrap in Paragraph Tags
//   text = "<p>" + text + "</p>";

//   return text;
// }

// function openCity(evt, action) {
//   let i, tabcontent, tablinks;
//   let selectnValue = document.getElementById('serverList').value;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   let selectedTab = document.getElementById(action);
//   selectedTab.style.display = "block";
//   evt.currentTarget.className += " active";
//   //selectedTab.appendChild(document.createTextNode(selectnValue));
// }
document.addEventListener("DOMContentLoaded", () => {
let body = document.getElementById('accBody');
        body.addEventListener('click', (event) => {             //adding event listener once the DOM is loaded
            if (event.target && event.target.nodeName === 'BUTTON') {       //Listening to all click events on td
                let content = event.target.nextElementSibling;
                event.target.classList.toggle('is-open');
                if (content.style.maxHeight) {
                    //that means the accordion is open so close
                    content.style.maxHeight = null;
                } else {
                    //open the accordion
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        });
      });
