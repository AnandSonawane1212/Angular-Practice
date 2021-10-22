import { Directive, ElementRef, HostListener, Input,Renderer2 } from "@angular/core";


@Directive({
    selector:'[styleMe]'
})

export class StyleMe{

    constructor(private e:ElementRef,private renderer: Renderer2){}
    @Input() defaultColor!:string; // default color of element
    @Input('styleMe') chooseColor!:string; // color to applied
    @HostListener('mouseenter') onMouseEnter(){
        this.styleIt(this.chooseColor || this.defaultColor || 'blue');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.styleIt('')
    }
    private styleIt(color:string){
        // this.renderer.setStyle(this.e.nativeElement, 'backgroundColor', color);
        // this.renderer.setStyle(this.e.nativeElement, 'border-style', 'thick solid #0000FF');
        this.e.nativeElement.style.backgroundColor = color;
        this.e.nativeElement.style.border = 'dashed red';
    }
}