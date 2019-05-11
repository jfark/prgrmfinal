Vue.component ('the-portfolio', {
	props: ['project'],
	template: `
		<div class="portfolioNode">
			<h3 class="nodeTitle">{{project.title}}</h3>
			<p class="nodeCaption">{{project.caption}}</p>
			<div class="nodeImageContainer"
				<div class="nodeImage"><img v-bind:src="project.image" alt="title"/></div>
			</div>
			<a class="nodeLink" href="#" v-on:mouseover.prevent="newTab(project.link)">Link to Project</a>
		</div>`,
	data: function() {
		return {portfolio: []}
	},
	methods: {
		newTab: function(url){
					window.open(url, "_blank");
		}
	}
});

var portfolioProjects = new Vue ({
	el: ".portfolioOverall",
	data: {
		titleInput: "",
		captionInput: "",
		imageInput: "",
		portfolio: [
			{
				title: "Barnes Foundation Fall 2019 Course Catalog",
				image: 'images/barnes.jpg',
				caption: "url(https://jfarkas.studio.mcad.edu/webdev/final-project/)I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
					
			},
			{
				title: "DuBois + Baldwin Reader / MCAD Spring 2019: Typography",
				image: 'images/reader.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
			{
				title: "Future Shuttle Album Art",
				image: 'images/fs.jpg',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
			{
				title: "Digital Animation",
				image: 'images/plantsfull.gif',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
			{
				title: "Hand & Digitally-Drawn Typeface / MCAD Spring 2019: Typography",
				image: 'images/typeface.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
			{
				title: '"My Practice" / MCAD Fall 2018: Design in Context',
				image: 'images/practice.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
			{
				title: "Isabella Stuart Gardner Homepage Recreation / MCAD Fall 2018: Web Development",
				image: 'images/isg.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
			{
				title: "Oberlin College Press Website Exercise / MCAD Fall 2018: Web Development",
				image: 'images/ocpress.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
			{
				title: "Poster / MCAD Fall 2018: Design in Context",
				image: 'images/poster1.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
			{
				title: "Annotated Poster / MCAD Fall 2018: Design in Context",
				image: 'images/poster2.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
			{
				title: "Future Shuttle Website Exercise / MCAD Fall 2018: Web Development",
				image: 'images/fssite.png',
				caption: "I am currently working as a freelance graphic designer, completing the graphic design of the Barnes Foundation",
				link: "https://jfarkas.studio.mcad.edu/programming/wk12/prgrmwk12/",
				
			},
		]
	},
	methods: {
			addProject: function(){
				let project = {
					title: this.titleInput,
					image: this.imageInput,
					caption: this.captionInput,
				};
				this.portfolio.unshift(project);
				this.titleInput = this.imageInput = this.captionInput = "";
			}
		}
});

$(".portfolioNode").click(function () {
              $(this).toggleClass("next");
          });
		  
$(".nodeLink").mouseover(function () {
            $(this).click();
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

				
				
      

 




