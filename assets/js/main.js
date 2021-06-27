function state() {

    fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
        .then(response => response.json())
        .then(data1 => {

            var i = document.getElementById('state1').value

            var state = document.getElementById('state')
            state.innerHTML = data1.regionData[i].region

            var s_ac = document.getElementById('s_ac')
            s_ac.innerHTML = data1.regionData[i].activeCases

            var s_acn = document.getElementById('s_acn')
            s_acn.innerHTML = data1.regionData[i].newInfected

            var s_rc = document.getElementById('s_rc')
            s_rc.innerHTML = data1.regionData[i].recovered

            var s_rcn = document.getElementById('s_rcn')
            s_rcn.innerHTML = data1.regionData[i].newRecovered

            var s_dt = document.getElementById('s_dt')
            s_dt.innerHTML = data1.regionData[i].deceased

            var s_dtn = document.getElementById('s_dtn')
            s_dtn.innerHTML = data1.regionData[i].newDeceased

            var s_pdt = document.getElementById('s_pdt')
            s_pdt.innerHTML = data1.regionData[i].totalInfected
        })
        .catch(err => {
            console.log(err);
        });
}

fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
    .then(response => response.json())
    .then(data => {

        var ac = document.getElementById('ac')
        ac.innerHTML = data.activeCases

        var acn = document.getElementById('acn')
        acn.innerHTML = data.activeCasesNew

        var rc = document.getElementById('rc')
        rc.innerHTML = data.recovered

        var rcn = document.getElementById('rcn')
        rcn.innerHTML = data.recoveredNew

        var dt = document.getElementById('dt')
        dt.innerHTML = data.deaths

        var dtn = document.getElementById('dtn')
        dtn.innerHTML = data.deathsNew

        var pdt = document.getElementById('pdt')
        pdt.innerHTML = data.previousDayTests

        var tc = document.getElementById('tc')
        tc.innerHTML = data.totalCases
    })
    .catch(err => {
        console.log(err);
    });