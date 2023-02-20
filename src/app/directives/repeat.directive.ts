import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective implements OnChanges {
  @Input('appRepeat') nbIteration = 0;
  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.vcr.clear();
    for (let i = 0; i < this.nbIteration; i++) {
      this.vcr.createEmbeddedView(this.template);
    }
  }
}
