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
    let planBtn = document.getElementById('testBtn');

    planBtn.addEventListener('click', (event) => {
        //console.log('button was clicked');
        let pwd = {
            cwd: "/Users/hithaishy/Desktop/testvm/",
            action: 'plan'

        }
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

    let applyBtn = document.getElementById('applyBtn');

    applyBtn.addEventListener('click', (event) => {
        //console.log('button was clicked');
        let pwd = {
            cwd: "/Users/hithaishy/Desktop/testvm",
            action: 'apply'

        }
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


    let destroyBtn = document.getElementById('destroyBtn');

    destroyBtn.addEventListener('click', (event) => {
        //console.log('button was clicked');
        let pwd = {
            cwd: "/Users/hithaishy/Desktop/testvm",
            action: 'destroy'

        }
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

    let settingIcon = document.getElementById('settingIcon');

    settingIcon.addEventListener('click', (eve) => {
        location.href = 'http://localhost:3000/settings'
    });


    let homeIcon = document.getElementById('homeIcon');

    homeIcon.addEventListener('click', (eve) => {
        location.href = 'http://localhost:3000/manage'
    });


    function fillSummary() {
        let pEle = document.getElementsByClassName('networkText');
        pEle[0].textContent += ($("#selectNetwork :selected").text()) ? $("#selectNetwork :selected").text() : "";
        pEle[1].textContent += ($("#selectAdapter :selected").text()) ? $("#selectAdapter :selected").text() : "";
        pEle[2].textContent += ($("#selectData :selected").text()) ? $("#selectData :selected").text() : "";
        pEle[3].textContent += ($("#selectOs :selected").text()) ? $("#selectOs :selected").text() : "";
    }
});


