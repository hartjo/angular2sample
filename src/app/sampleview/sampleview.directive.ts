import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[sampleview]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}
})
export class Sampleview {

	constructor(private el: ElementRef, private renderer: Renderer) {

	}

	onFocus() {
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '500px');
	}

	onBlur() {
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '150px');
	}

}
