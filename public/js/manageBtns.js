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
//     'name': 'VSphere 2',ˇ
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

let serverOptions = {
    networking: {
        network: null,
        adapter: null
    },
    storage: {
        dataStore: null,
        hardDrive: null
    },
    compute: {
        osFamily: null,
        os: null,
        cpu: null,
        instanceCount: null
    }
};
document.addEventListener("DOMContentLoaded", () => {
    let accBbody = document.getElementById('accBody');
    accBbody.addEventListener('click', (event) => {             //adding event listener once the DOM is loaded
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
    let testBtn = document.getElementById('testBtn');

    testBtn.addEventListener('click', (event) => {
        //console.log('button was clicked');
        let pwd = "/Users/hithaishy/Desktop/hello"
        output = document.getElementById('shellOutput');
        fetch('/manage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pwd })
        }).then(response => response.text()).then(resp => {
            output.innerHTML = resp;
        })
            .catch(function (error) {
                console.log(error);
            });
    });

    let planNext = document.getElementById('planNext');
    $(function () {

        $('#planNext').click(function (e) {
            e.preventDefault();
            let next_tab = $('.nav-tabs > .active').next('li').find('a');
            if (next_tab.length > 0) {
                next_tab.trigger('click');
                fillSummary();
            } else {
                $('.nav-tabs li:eq(0) a').trigger('click');
            }
        });
    });


    function fillSummary() {
        let pEle = document.getElementsByClassName('networkText');
        pEle[0].textContent += ($("#selectNetwork :selected").text()) ? $("#selectNetwork :selected").text() : "";
        pEle[1].textContent += ($("#selectAdapter :selected").text()) ? $("#selectAdapter :selected").text() : "";
        pEle[2].textContent += ($("#selectData :selected").text()) ? $("#selectData :selected").text() : "";
        pEle[3].textContent += ($("#selectOs :selected").text()) ? $("#selectOs :selected").text() : "";
    }
});


