import { Component, View } from 'angular2/core';
import { MarkdownEditor } from './components/subcomponent/markdowneditor';

@Component({
  selector: 'umd-editor'
})
@View({
  template: `
    <div class="parent">
      <markdown-editor></markdown-editor>
    </div>
  `,
  directives: [MarkdownEditor]
})
export class UmdEditorComponent {
  appStatus: string;

  constructor() {
    this.appStatus = 'Application is working.';
  }
}
