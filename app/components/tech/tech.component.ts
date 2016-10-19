import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tl-tech',
    templateUrl: 'tech.component.html'
})
export class TechComponent implements OnInit {
    images: string[] = ['javascript--transparent', 
                        'HTML5--transparent', 
                        'CSS3--transparent', 
                        'csharp--transparent', 
                        'angular-js', 
                        'jquery--transparent', 
                        'd3js--transparent', 
                        'grunt--transparent', 
                        'mongodb--transparent', 
                        'nodejs--transparent', 
                        'sass-logo'];
    
    constructor() { }
     
    ngOnInit() {

     }
}