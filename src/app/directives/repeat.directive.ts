import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

class RepeatContext {
  constructor(
    public index = 0,
    public totalIteration = 0,
    public paire = false,
    public impaire = false,
    public first = false,
    public last = false
  ) {
    this.paire = !!(this.index % 2);
    this.impaire = !this.paire;
    this.first = !this.index;
    this.last = this.index == this.totalIteration - 1;
  }
}

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
      let context = new RepeatContext(i, this.nbIteration);
      this.vcr.createEmbeddedView(this.template, context);
    }
  }
}
