'use babel';

import TutPackageView from './tut-package-view';
import { CompositeDisposable } from 'atom';

export default {

  tutPackageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.tutPackageView = new TutPackageView(state.tutPackageViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.tutPackageView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tut-package:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.tutPackageView.destroy();
  },

  serialize() {
    return {
      tutPackageViewState: this.tutPackageView.serialize()
    };
  },

  toggle() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      let reversed = selection.split('').reverse().join('')
      editor.insertText(reversed)
    }
  }

};
