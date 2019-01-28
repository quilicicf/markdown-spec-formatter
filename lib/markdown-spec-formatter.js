'use babel';

import MarkdownSpecFormatterView from './markdown-spec-formatter-view';
import { CompositeDisposable } from 'atom';

export default {

  markdownSpecFormatterView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.markdownSpecFormatterView = new MarkdownSpecFormatterView(state.markdownSpecFormatterViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.markdownSpecFormatterView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'markdown-spec-formatter:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.markdownSpecFormatterView.destroy();
  },

  serialize() {
    return {
      markdownSpecFormatterViewState: this.markdownSpecFormatterView.serialize()
    };
  },

  toggle() {
    console.log('MarkdownSpecFormatter was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
