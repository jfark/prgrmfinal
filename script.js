Vue.component ('the-portfolio', {
	props: ['title', 'image', 'caption'],
	template: `
		<div class="portfolioNode">
			<h3 class="nodeTitle">{{title}}</h3>
			<p class="nodeCaption">{{caption}}</p>
			<div class="nodeImageContainer"
				<div class="nodeImage"><img v-bind:src="image" alt="Name"/></div>
			</div>
			<div class="nodeImageContainer2"
				<div class="nodeImage2"><img v-bind:src="image2" alt="Name"/></div>
			</div>
		</div>
	`
});

var signedBooksCollection = new Vue ({
	el: ".portfolioProjects",
	data: {
		portfolio: [
			{
				title: "Barnes Foundation Fall 2019 Course Catalog",
				image: 'images/barnes.jpg',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "DuBois + Baldwin Reader / MCAD Spring 2019: Typography",
				image: 'images/reader.png',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Future Shuttle Album Art",
				image: 'images/fs.jpg',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Digital Animation",
				image: 'images/plants.gif',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Hand & Digitally-Drawn Typeface / MCAD Spring 2019: Typography",
				image: 'images/typeface.png',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: '"My Practice" / MCAD Fall 2018: Design in Context',
				image: 'images/practice.png',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Isabella Stuart Gardner Homepage Recreation / MCAD Fall 2018: Web Development",
				image: 'images/isg.png',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Oberlin College Press Website Exercise / MCAD Fall 2018: Web Development",
				image: 'images/ocpress.png',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Poster / MCAD Fall 2018: Design in Context",
				image: 'images/poster1.png',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Annotated Poster / MCAD Fall 2018: Design in Context",
				image: 'images/poster2.png',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Future Shuttle Website Exercise / MCAD Fall 2018: Web Development",
				image: 'images/fssite.png',
				image2: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
		]
	},
});

$(".portfolioNode").click(function () {
              $(this).toggleClass("next");
          });
		  

var myAppSecond = new Vue({
  el: '#myTrick',
  data: {
    headerMessage: "Jessa Farkas / Graphic and Web Design",
	  introMessage: "I am currently completing a master's degree in graphic and web design via the Minneapolis College of Art and Design (MCAD). What follows is some recent work.",
  },
  methods: {
    reverseMessage: function () {
      this.headerMessage = this.headerMessage.split('').reverse().join('')
    }
  }
});


				
				
      

 




