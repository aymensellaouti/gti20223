import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective implements OnInit {
  @Input() appUnless = true;
  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  ngOnInit(): void {
    if (!this.appUnless) this.vcr.createEmbeddedView(this.template);
  }
}
