import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-root',
	// templateUrl: './app.component.html',
	// templateUrl: '../views/customComponent.html',
	templateUrl: '../views/main.html',
	// templateUrl: '../mainpage/mainpage.component.html',
	// templateUrl: '../views/routing-view.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	httpdata;
	cutomerdata;

	form: FormGroup;
  	projects: Project[];

	constructor(private http: Http, private cookie : CookieService, private router : Router ) {

		this.projects = [
			new Project("Web Development"),
			new Project("UX"),
			new Project("SEO")
		  ];
	}
	ngOnInit() {
		// this.router.navigate(['app-mainpage']);

		this.http.get("http://jsonplaceholder.typicode.com/users")
		.map((response) => response.json() )
		.subscribe((data) => {
			console.log(data);
			this.displaydata(data);
		})

		this.cookie.set("Name", "GAURAV MARVAHA");
		this.cookie.set("Mobile", "8881438096");
		// console.log( this.cookie.check("Name") );
		// console.log( this.cookie.get("Name") );
		// console.log( this.cookie.getAll() );
		// this.cookie.delete("Name");
		this.cookie.deleteAll();
		
	}

	displaydata(data) {
		console.log(data);
		this.httpdata = data;
	}

	getUsersList(){
		this.http.get("http://jsonplaceholder.typicode.com/users")
		.map((response) => response.json() )
		.subscribe((data) => {
			console.log(data);
			this.httpdata = data
		})
	}


	title = 'Gaurav Angular App';

	show_true = true;
	show_false = false;

  	movies: Movie[] = [  
		{title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
		{title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
		{title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
		{title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
	];
	
	items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
	selectedValue: string= 'Two';  

	imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";


	numberA: number = 10;    
	numberB: number = 20; 
	   
  	addTwoNumbers() { 
		console.log("=============== Add Two Numbers ================");   
    	return this.numberA + this.numberB;    
	}  
	
	onSave($event){    
		console.log("Save button is clicked!", $event);    
		console.log(this)
	}
	
	fullName : string = 'this is test example';




	email = new FormControl('cfgvbh@vgbhjnm.gvbhjn');  
  	updateEmail() {  
    	this.email.setValue('sonoojaiswal@javatpoint.com');  
	}  
	

}


class item {  
	name: string;  
	val: number;  
}  


class Movie {  
	title : string;  
	director : string;  
	cast : string;  
	releaseDate : string;  
} 

class Project {
	id: number;
	name: string;
	constructor(name: string) {
	  this.name = name;
	}
}