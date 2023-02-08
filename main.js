const speakersList = document.querySelector('.container1');
const Speakers = [
  {
    speakername: 'Bill Ready',
    image: './img/pinterestseo.jfif',
    title: 'Pinterest/CEO',
    intro: 'Bill Ready is the CEO of Pinterest He previously worked at Google as a President of Commerce Bill Ready attended Harvard Business School. ',
  },
  {
    speakername: 'Steve Huffman',
    image: './img/redditCEO.jpg',
    title: 'Co-founder of Microsoft',
    intro: 'Steve Huffman, also known by his Reddit username spez, is an American web developer and entrepreneur. He is the co-founder and CEO of Reddit.',
  },
  {
    speakername: 'Matt Mullenweg',
    image: './img/wordpressCEO.jpg',
    title: 'Wordpress/CEO',
    intro: ' an American entrepreneur and web developer living in Houston.He is known for developing and founding the free and open-source web software WordPress.',
  },
  {
    speakername: 'Andy Jassy',
    image: './img/Amazonceo.jpg',
    title: 'Amazon/CEO',
    intro: 'Andrew R. Jassy is an American business executive who is the president and chief executive officer of Amazon. ',
  },
  {
    speakername: 'Patrick Collison',
    image: './img/stripee.webp',
    title: 'Stripe/CEO',
    intro: 'Patrick Collison is an Irish billionaire entrepreneur. He is the co-founder and CEO of Stripe, which he started with his younger brother, John, in 2010. ',
  },
  {
    speakername: ' Dan Schulman',
    image: ' ./img/paypalceo.webp ',
    title: 'Paypal/CEO',
    intro: 'Daniel H. Schulman is an American business executive. He is president and CEO of PayPal,formerly serving as group president of enterprise growth at American Express. ',
  },
];

for (let i = 0; i < Speakers.length; i += 1) {
  speakersList.innerHTML += `
    <div class="speakers-grid">
    <img src="${Speakers[i].image}" alt="speaker" class ="speaker-image">
    <div class="speaker-desc">
        <h5>${Speakers[i].speakername}</h5>
        <h6>${Speakers[i].title}</h6>
        <hr>
        <p>${Speakers[i].intro}</p>
    </div>
  </div>
    `;
}