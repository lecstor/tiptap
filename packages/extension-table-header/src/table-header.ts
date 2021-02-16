import { Node, mergeAttributes } from '@tiptap/core'

export interface TableHeaderOptions {
  HTMLAttributes: {
    [key: string]: any
  },
}
export const TableHeader = Node.create<TableHeaderOptions>({
  name: 'tableHeader',

  defaultOptions: {
    HTMLAttributes: {},
  },

  content: 'block+',

  addAttributes() {
    return {
      colspan: {
        default: 1,
      },
      rowspan: {
        default: 1,
      },
      colwidth: {
        default: null,
      },
    }
  },

  tableRole: 'header_cell',

  isolating: true,

  parseHTML() {
    return [
      { tag: 'th' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['th', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

})