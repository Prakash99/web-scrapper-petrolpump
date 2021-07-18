// Use this script on the page console to get data into drive, through pipedream.
const tbodyHeader = document.querySelectorAll('.table.table-user-information > tbody')
const locationName = tbodyHeader[0].children[1].children[1].innerText
const companyName = tbodyHeader[1].children[0].children[1].innerText
const districtName = tbodyHeader[1].children[1].children[1].innerText
const castCategory = tbodyHeader[1].children[3].children[1].innerText
const tbody = document.querySelector('table#DataTables_Table_0.table.applicants.dataTable.no-footer > tbody')
const data = Array.from(tbody.children).map((tr) => {
    return [locationName, companyName, districtName, castCategory, ...Array.from(tr.children).map(td => {
        return td.innerText;
    })]
})
fetch(LINK_TO_PIPEDREAM_ACCOUNT, {
  method: 'post',
  body: JSON.stringify(data)
})
