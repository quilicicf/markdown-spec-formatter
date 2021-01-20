'use babel';

// eslint-disable-next-line import/no-unresolved
import { CompositeDisposable } from 'atom';

import formatEditorContent from './formatEditorContent';

const MARKDOWN_SCOPES = [ 'source.gfm', 'text.md' ];

const COMMANDS_CONTEXTS = {
  GFM: 'atom-text-editor[data-grammar="source gfm"]',
  MD: 'atom-text-editor[data-grammar="text md"]',
};

const COMMANDS = {
  'markdown-spec-formatter:format': async function () {
    const editor = this.getModel();
    await formatEditorContent(editor);
  },
};

const isMarkdownEditor = (editor) => MARKDOWN_SCOPES.includes(editor.getGrammar().scopeName);

export default {
  subscriptions: null,
  subscriptionsByURL: null,
  config: {
    watermark: {
      type: 'string',
      enum: [ 'none', 'top', 'toc' ],
      default: 'none',
      description: 'Adds a link to the formatter in a comment either at the top of the file or inside the ToC end\'s comment',
    },
  },

  activate () {
    this.subscriptionsByURL = new Map();

    this.subscriptions = new CompositeDisposable(
      atom.commands.add(COMMANDS_CONTEXTS.GFM, COMMANDS),
      atom.commands.add(COMMANDS_CONTEXTS.MD, COMMANDS),

      atom.workspace.observeTextEditors((editor) => {
        if (!isMarkdownEditor(editor)) { return; }

        const URI = editor.getURI();
        this.subscriptionsByURL.set(URI, editor.buffer.onWillSave(() => formatEditorContent(editor)));
      }),
    );
  },

  deactivate () {
    this.subscriptions.dispose();
    this.subscriptionsByURL.forEach((disposable) => disposable.dispose());
    this.subscriptionsByURL.clear();
  },
};
