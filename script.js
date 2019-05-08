Vue.component ('the-portfolio', {
	props: ['title', 'image', 'caption'],
	template: `
		<div class="portfolioNode">
			<h3 class="nodeTitle">{{title}}</h3>
			<p class="nodeCaption">{{caption}}</p>
			<div class="nodeImageContainer"
				<div class="nodeImage"><img v-bind:src="image" alt="Name"/></div>
			</div>
		</div>
	`
});

var signedBooksCollection = new Vue ({
	el: ".portfolioProjects",
	data: {
		selectedNode: null,
		portfolio: [
			{
				title: "Barnes Foundation Fall 2019 Course Catalog",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "DuBois + Baldwin Reader / MCAD Spring 2019: Typography",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Future Shuttle Album Art",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Digital Animation",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Hand & Digitally-Drawn Typeface / MCAD Spring 2019: Typography",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: '"My Practice" / MCAD Fall 2018: Design in Context',
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Isabella Stuart Gardner Homepage Recreation / MCAD Fall 2018: Web Development",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Oberlin College Press Website Exercise / MCAD Fall 2018: Web Development",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Poster / MCAD Fall 2018: Design in Context",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Annotated Poster / MCAD Fall 2018: Design in Context",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Future Shuttle Website Exercise / MCAD Fall 2018: Web Development",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			},
			{
				title: "Future Shuttle Website Exercise / MCAD Fall 2018: Web Development",
				image: 'images/garf.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
			}
		]
	},
    methods: {
      zoom(url) {
        this.selectedNode = url;
      }
    }
	
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

new Vue({
  el: '#app',
  data: {
    selectedImage: null,
    images: [
      'http://via.placeholder.com/400x300?text=image%201',
      'http://via.placeholder.com/600x400?text=image%202',
      'http://via.placeholder.com/500x500?text=image%203'
    ]
  },
  methods: {
    zoom(url) {
      console.log("Zoom", url);
      this.selectedImage = url;
    }
  }
});


      $(".portfolioNode").click(function () {

                    $(this).animate({ width: "" });

                });
      $(".portfolioNode").mouseout(function () {

                    $(this).animate({ width: "90%" });

                });

 




