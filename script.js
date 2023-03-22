const companies = {
  id: "companies",
  logo: "Annual Reports",
  button: "Visit",
  cards: [
    {
      title: "Apple",
      sub: "AAPL",
      text: "$ 2.690 T",
    },
    {
      title: "Microsoft",
      sub: "MSFT",
      text: "$ 2.228 T",
    },
    {
      title: "Saudi Aramco",
      sub: "2222.SR",
      text: "$ 2.205 T",
    },
    {
      title: "Alphabet (Google)",
      sub: "GOOG",
      text: "$ 1.778 T",
    },
    {
      title: "Amazon",
      sub: "AMZN",
      text: "$ 1.565 T",
    },
    {
      title: "Tesla",
      sub: "TSLA",
      text: "$ 837.00 B",
    },
    {
      title: "Nvidia",
      sub: "NVDA",
      text: "$ 601.99 B",
    },
  ],
};
const cardContainer = document.getElementById("card-container");


cardContainer.innerHTML = 
`${companies.cards.map(c =>
  `<div class="cards">
    <div class="data">
      <div class="sub-title-container">
        <span class="sub">${c.sub}</span>
        <span class="title">${c.title}</span>
      </div>
      <div class="text-container">
        <span class="text">${c.text}</span>
      </div>
    </div>
    
     <div class="visit-container">
        <span class="visit">Visit</span>
          <span class="material-symbols-outlined">
          arrow_forward
        </span>
     </div>
  </div>`
 )
.join("")}`
;


